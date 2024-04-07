const { exec } = require('child_process');
const { Termux } = require('termux');
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

Termux.dialog
  .textInput({
    title: 'Enter page title',
    inputType: 'text',
    hint: 'Page Title'
  })
  .then(title => {
    Termux.dialog
      .textInput({
        title: 'Enter page content',
        inputType: 'text',
        hint: 'Page Content'
      })
      .then(content => {
        const htmlContent = generateHTMLPage(title, content);
        exec(`echo '${htmlContent}' > index.html`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          Termux.showToast({ text: 'HTML page generated successfully!' });
        });
      });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
