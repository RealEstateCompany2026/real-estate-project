import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const fileKey = process.env.FIGMA_FILE_KEY;
const token = process.env.FIGMA_ACCESS_TOKEN;
const nodeId = process.env.FIGMA_NODE_ID_DESIGN_SYSTEM;

async function fetchDebug() {
    try {
        const res = await axios.get(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeId}`, {
            headers: { 'X-Figma-Token': token }
        });
        fs.writeFileSync('figma_debug.json', JSON.stringify(res.data, null, 2));
        console.log('Saved to figma_debug.json');
    } catch (e) {
        console.error(e.response?.data || e.message);
    }
}

fetchDebug();
