const fs = require('node:fs/promises')
const sharp = require('sharp')

async function main() {
  const mark = await fs.readFile('public/vr-mark.svg', 'utf8')
  const inner = mark.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')
  // Render the existing SVG mark without altering its geometry.
  const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#f8f8f6"/>${inner}</svg>`
  await sharp(Buffer.from(icon)).png().toFile('public/icon-brown.png')
  await sharp(Buffer.from(icon)).resize(180,180).png().toFile('public/apple-touch-icon-brown.png')
  await sharp(Buffer.from(icon)).resize(180,180).png().toFile('public/icon.png')
  const preview = `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1260" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f8f8f6"/><g transform="translate(375 90) scale(.879)">${inner}</g></svg>`
  await fs.writeFile('public/og-image-brown.svg',preview)
  await sharp(Buffer.from(preview)).png().toFile('public/og-image-brown.png')
  await fs.copyFile('public/og-image-brown.png','public/og-image.png')
}
main().catch(e=>{console.error(e);process.exit(1)})
