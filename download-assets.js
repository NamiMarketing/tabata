const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = {
  'hero-bg.jpg': 'https://www.figma.com/api/mcp/asset/47065e49-2934-4660-8795-22e2732afa6c',
  'live-your-health.png': 'https://www.figma.com/api/mcp/asset/c180d1cc-717d-4935-8efa-d6dd1cf0cc59',
  't-logo-11.png': 'https://www.figma.com/api/mcp/asset/531507df-d030-4ef8-b314-9acace30b912',
  't-logo-08.png': 'https://www.figma.com/api/mcp/asset/5a519d8e-aba0-4359-ade1-e76780969735',
  'about-image.jpg': 'https://www.figma.com/api/mcp/asset/08588156-830e-4db0-91eb-82e2ecbbde50',
  't-padrao-01.png': 'https://www.figma.com/api/mcp/asset/57de013b-7a1d-400a-9fb0-be244adfbc58',
  't-padrao-04.png': 'https://www.figma.com/api/mcp/asset/9b59401d-019c-4fa3-a46d-6fd33f584319',
  'footer-image.jpg': 'https://www.figma.com/api/mcp/asset/e1fefef0-d5f7-4df4-b528-44987202ca5c',
  'result-1.jpg': 'https://www.figma.com/api/mcp/asset/ca8a7883-aec8-4cb3-8448-34a5df95a9b8',
  'result-2.jpg': 'https://www.figma.com/api/mcp/asset/02803a11-9705-479a-89ee-651b58090b54',
  'consultation-image.jpg': 'https://www.figma.com/api/mcp/asset/34bf690e-e5f7-43e3-9e98-3e52e7a96b7f',
  't-logo-06.png': 'https://www.figma.com/api/mcp/asset/e40da811-6183-4880-b52d-6592dd8c0730',
  'card-1.jpg': 'https://www.figma.com/api/mcp/asset/7e53a3ad-2cd1-43e3-8de8-aefd70167cb8',
  'card-2.jpg': 'https://www.figma.com/api/mcp/asset/8db7db57-de64-40d9-ad77-0070cbd04f29',
  'card-3.jpg': 'https://www.figma.com/api/mcp/asset/0d9743e0-4b24-46f9-afe2-fc6e5d552b9a',
  'card-4.jpg': 'https://www.figma.com/api/mcp/asset/0c6f6f40-ba39-4ea3-b40b-4df30b0f69df',
  'card-5.jpg': 'https://www.figma.com/api/mcp/asset/fbb4fb87-ea4f-4daa-9b5b-551cb5e8e90e',
  'icon-phone.svg': 'https://www.figma.com/api/mcp/asset/689be24a-e287-4094-9ae1-03f6244fb761',
  'icon-muscle.svg': 'https://www.figma.com/api/mcp/asset/024b2354-6a23-4180-8084-47ac7dbc012b',
  'icon-nutrition.svg': 'https://www.figma.com/api/mcp/asset/04e0318b-6bfa-4a01-b5eb-bf851a85180d',
  'icon-health.svg': 'https://www.figma.com/api/mcp/asset/4c7eb17f-3da2-4626-b1c5-3138775f1478',
  'icon-sports.svg': 'https://www.figma.com/api/mcp/asset/7ff8d7e9-10cb-4d2f-b73e-11ade3b19ce3',
  'arrow-right.svg': 'https://www.figma.com/api/mcp/asset/b2a6a201-0190-49df-992a-7e3a08ef1bd1',
  'arrow-left.svg': 'https://www.figma.com/api/mcp/asset/76e8cbac-6a5f-47e6-b597-db188826e998',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const downloadAll = async () => {
  const assetsDir = path.join(__dirname, 'src', 'assets', 'images');

  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  console.log('Downloading assets from Figma...\n');

  for (const [filename, url] of Object.entries(assets)) {
    const filepath = path.join(assetsDir, filename);
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${filename}:`, error.message);
    }
  }

  console.log('\nAll assets downloaded!');
};

downloadAll();
