// index.js
const { exec } = require('child_process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function generateHTMLPage(title, content) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        /* Your CSS styles here */
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
  return html;
}
rl.question('Enter page title: ', (title) => {
  rl.question('Enter page content: ', (content) => {
    const htmlContent = generateHTMLPage(title, content);
    exec(`echo '${htmlContent}' > index.html`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      console.log('HTML page generated successfully!');
    });
    rl.close();
  });
});
