import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const fileKey = process.env.FIGMA_FILE_KEY;
const token = process.env.FIGMA_ACCESS_TOKEN;

async function sync() {
    console.log('Fetching Figma document...');
    try {
        const res = await axios.get(`https://api.figma.com/v1/files/${fileKey}`, {
            headers: { 'X-Figma-Token': token }
        });

        const doc = res.data;
        const styles = doc.styles; // mapping of styleId -> { name, styleType }

        if (!styles) {
            console.log('No styles found in document.');
            return;
        }

        const theme = {
            colors: {},
            typography: {},
            radius: {}
        };

        // Helper to traverse nodes and resolve style values
        function traverse(node) {
            if (!node) return;

            // Colors (FILL styles)
            if (node.styles && node.styles.fill && styles[node.styles.fill]) {
                const styleName = styles[node.styles.fill].name;
                if (node.fills && node.fills.length > 0 && node.fills[0].color) {
                    const { r, g, b } = node.fills[0].color;
                    const hex = '#' + [r, g, b].map(c => Math.round(c * 255).toString(16).padStart(2, '0')).join('');
                    theme.colors[styleName] = hex;
                }
            }

            // Typography (TEXT styles)
            if (node.styles && node.styles.text && styles[node.styles.text]) {
                const styleName = styles[node.styles.text].name;
                if (node.style) {
                    theme.typography[styleName] = {
                        fontFamily: node.style.fontFamily,
                        fontWeight: node.style.fontWeight,
                        fontSize: node.style.fontSize + 'px',
                        lineHeightPx: node.style.lineHeightPx + 'px'
                    };
                }
            }

            // Border Radius (We will just look for nodes named 'Radius ...' if they exist, or standard cornerRadius)
            if (node.name && node.name.toLowerCase().includes('radius') && node.cornerRadius) {
                theme.radius[node.name] = node.cornerRadius + 'px';
            }

            if (node.children) {
                node.children.forEach(traverse);
            }
        }

        traverse(doc.document);

        fs.writeFileSync('packages/ui/theme.json', JSON.stringify(theme, null, 2));
        console.log('Theme generated successfully at packages/ui/theme.json!');
        console.log(JSON.stringify(theme, null, 2));

    } catch (e) {
        console.error(e.response?.data || e.message);
    }
}

sync();
