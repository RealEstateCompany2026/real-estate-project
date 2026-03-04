const fs = require('fs');

try {
    const data = JSON.parse(fs.readFileSync('figma_app_agent.json', 'utf8'));
    const node = data.nodes['0:1']?.document;

    if (!node) {
        console.log('Node 0:1 not found');
        process.exit(1);
    }

    console.log('--- Desktop CRM Node ---');
    console.log('Name:', node.name);
    console.log('Type:', node.type);
    console.log('Layout Mode:', node.layoutMode);
    console.log('Padding:', [node.paddingTop, node.paddingRight, node.paddingBottom, node.paddingLeft].join(', '));
    console.log('Item Spacing:', node.itemSpacing);

    if (node.children) {
        node.children.forEach(child => {
            console.log('\nChild:', child.name, '| Type:', child.type, '| Layout Mode:', child.layoutMode, '| WxH:', child.absoluteBoundingBox?.width, 'x', child.absoluteBoundingBox?.height);
            console.log('   -> Padding:', [child.paddingTop, child.paddingRight, child.paddingBottom, child.paddingLeft].join(', '));
            console.log('   -> Spacing:', child.itemSpacing);
        });
    }
} catch (e) {
    console.error(e);
}
