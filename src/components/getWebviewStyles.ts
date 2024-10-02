export function getWebviewStyles() {
  return `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
          font-family: var(--vscode-font-family);
          color: var(--vscode-foreground);
          background-color: var(--vscode-editor-background);
          display: flex;
          height: 100vh;
    }
    .column {
              display: flex;
              flex-direction: column;
              padding: 20px;
              overflow-y: auto;
          }
          #sections-list {
              flex: 1;
              border-right: 1px solid var(--vscode-panel-border);
          }
          #content-editor {
              flex: 2;
              border-right: 1px solid var(--vscode-panel-border);
          }
          #preview {
              flex: 2;
          }
          h1, h2 {
              color: var(--vscode-textLink-foreground);
              margin-top: 0;
          }
          .section-item {
              background-color: var(--vscode-editor-background);
              border: 1px solid var(--vscode-panel-border);
              margin-bottom: 10px;
              padding: 10px;
              cursor: pointer;
          }
          .section-item:hover {
              background-color: var(--vscode-list-hoverBackground);
          }
          .section-item.active {
              background-color: var(--vscode-list-activeSelectionBackground);
              color: var(--vscode-list-activeSelectionForeground);
          }
          input[type="text"], textarea {
              width: 100%;
              padding: 5px;
              margin-bottom: 10px;
              background-color: var(--vscode-input-background);
              color: var(--vscode-input-foreground);
              border: 1px solid var(--vscode-input-border);
          }
          button {
              background-color: var(--vscode-button-background);
              color: var(--vscode-button-foreground);
              border: none;
              padding: 5px 10px;
              cursor: pointer;
              margin-right: 5px;
          }
          button:hover {
              background-color: var(--vscode-button-hoverBackground);
          }
  `;
}
