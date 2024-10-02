import { getWebviewScript } from "./getWebviewScript";
import { getWebviewStyles } from "./getWebviewStyles";

export function getWebviewContent() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>README Generator</title>
      <style>
          ${getWebviewStyles()}
      </style>
  </head>
  <body>
      <div id="sections-list" class="column">
          <h2>Sections</h2>
          <!-- Section list will be dynamically populated here -->
      </div>
      <div id="content-editor" class="column">
          <h2>Edit Content</h2>
          <!-- Content editor will be dynamically populated here -->
      </div>
      <div id="preview" class="column">
          <h2>Preview</h2>
          <!-- Preview will be dynamically populated here -->
      </div>
        <script type="module">
            ${getWebviewScript()}
        </script>
  </body>
  </html>`;
}