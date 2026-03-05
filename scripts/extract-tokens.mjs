import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const fileKey = process.env.FIGMA_FILE_KEY;
const token = process.env.FIGMA_ACCESS_TOKEN;

async function syncDesignSystem() {
    console.log('Fetching Figma document...');
    try {
        const res = await axios.get(`https://api.figma.com/v1/files/${fileKey}`, {
            headers: { 'X-Figma-Token': token }
        });

        const doc = res.data;
        const styles = doc.styles;

        if (!styles) {
            console.log('No styles found in document.');
            return;
        }

        const tokens = {
            colors: {},
            typography: {},
            spacing: {},
            shadows: {},
            radius: {}
        };

        // Find the "Design System" page specifically to parse structure if needed
        const designSystemPage = doc.document.children.find(p => p.name === 'Design System' || p.name === '🎨 Design System');

        function traverse(node) {
            if (!node) return;

            // Colors (FILL styles)
            if (node.styles && node.styles.fill && styles[node.styles.fill]) {
                const styleName = styles[node.styles.fill].name;
                if (node.fills && node.fills.length > 0 && node.fills[0].color) {
                    const { r, g, b, a } = node.fills[0].color;
                    const alpha = a !== undefined ? a : 1;
                    const hex = '#' + [r, g, b].map(c => Math.round(c * 255).toString(16).padStart(2, '0')).join('');

                    // Format style name: e.g. "Couleurs de Layout/Soft Red . Background" -> "Soft Red . Background" -> "soft-red-background"
                    let cleanName = styleName.split('/').pop().replace(/\s*\.\s*/g, '-').replace(/\s+/g, '-').replace(/%/g, '').toLowerCase();

                    if (alpha < 1) {
                        tokens.colors[cleanName] = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${alpha})`;
                    } else {
                        tokens.colors[cleanName] = hex;
                    }
                }
            }

            // Typography (TEXT styles)
            if (node.styles && node.styles.text && styles[node.styles.text]) {
                const styleName = styles[node.styles.text].name;
                if (node.style) {
                    let cleanName = styleName.split('/').pop().replace(/\s*\.\s*/g, '-').replace(/\s+/g, '-').replace(/%/g, '').toLowerCase();
                    tokens.typography[cleanName] = {
                        fontFamily: node.style.fontFamily,
                        fontWeight: node.style.fontWeight,
                        fontSize: node.style.fontSize + 'px',
                        lineHeight: node.style.lineHeightPx + 'px'
                    };
                }
            }

            // Shadows (EFFECT styles)
            if (node.styles && node.styles.effect && styles[node.styles.effect]) {
                const styleName = styles[node.styles.effect].name;
                if (node.effects && node.effects.length > 0) {
                    // Get the first drop shadow
                    const dropShadow = node.effects.find(e => e.type === 'DROP_SHADOW');
                    if (dropShadow && dropShadow.color) {
                        let cleanName = styleName.split('/').pop().replace(/\s*\.\s*/g, '-').replace(/\s+/g, '-').toLowerCase();
                        const { r, g, b, a } = dropShadow.color;
                        const colorStr = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
                        const x = dropShadow.offset.x + 'px';
                        const y = dropShadow.offset.y + 'px';
                        const blur = dropShadow.radius + 'px';
                        // Default spread to 0 if not present
                        const spread = (dropShadow.spread || 0) + 'px';
                        tokens.shadows[cleanName] = `${x} ${y} ${blur} ${spread} ${colorStr}`;
                    }
                }
            }

            // Border Radius Support (heuristic: Name contains 'radius', extract cornerRadius)
            if (node.name && node.name.toLowerCase().includes('radius') && node.cornerRadius) {
                const cleanName = node.name.replace(/\s*\.\s*/g, '-').replace(/\s+/g, '-').toLowerCase();
                tokens.radius[cleanName] = node.cornerRadius + 'px';
            }

            // Spacing (heuristic: Name contains 'spacing', extract absoluteBoundingBox width ideally, or just padding if it's an auto-layout holding spaces)
            if (node.name && node.name.toLowerCase().includes('spacing') && node.absoluteBoundingBox) {
                // For simple spacing tokens represented by squares/rectangles
                if (node.type === 'RECTANGLE') {
                    const cleanName = node.name.replace(/\s*\.\s*/g, '-').replace(/\s+/g, '-').toLowerCase();
                    tokens.spacing[cleanName] = Math.round(node.absoluteBoundingBox.width) + 'px';
                }
            }

            if (node.children) {
                node.children.forEach(traverse);
            }
        }

        if (designSystemPage) {
            console.log("Analyzing only 'Design System' page...");
            traverse(designSystemPage);
        } else {
            console.log("Design System page not found. Analyzing entire document...");
            traverse(doc.document);
        }

        // Add default spacing if none were extracted to ensure tailwind has baseline
        if (Object.keys(tokens.spacing).length === 0) {
            tokens.spacing = {
                "2": "2px", "4": "4px", "8": "8px", "12": "12px", "16": "16px", "24": "24px", "32": "32px", "40": "40px", "48": "48px", "64": "64px"
            }
        }

        // Add default radiuses if none extracted
        if (Object.keys(tokens.radius).length === 0) {
            tokens.radius = {
                "sm": "4px", "md": "8px", "lg": "12px", "xl": "16px", "2xl": "24px", "full": "9999px"
            }
        }

        fs.mkdirSync('packages/ui/src', { recursive: true });
        fs.writeFileSync('packages/ui/src/tokens.json', JSON.stringify(tokens, null, 2));
        console.log('Atomic Tokens generated successfully at packages/ui/src/tokens.json!');

    } catch (e) {
        console.error(e.response?.data || e.message);
    }
}

syncDesignSystem();
