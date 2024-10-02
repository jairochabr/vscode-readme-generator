export function getWebviewScript() {
  return `
  (function() {
              const vscode = acquireVsCodeApi();
              
              // Define your README sections
              const sections = [
                  { id: 'title', name: 'Title', type: 'text', content: '' },
                  { id: 'description', name: 'Description', type: 'textarea', content: '' },
                  { id: 'installation', name: 'Installation', type: 'textarea', content: '' },
                  { id: 'usage', name: 'Usage', type: 'textarea', content: '' },
                  { id: 'contributing', name: 'Contributing', type: 'textarea', content: '' },
                  { id: 'license', name: 'License', type: 'text', content: '' }
              ];

              function renderSectionsList() {
                  const sectionsList = document.getElementById('sections-list');
                  sectionsList.innerHTML = '<h2>Sections</h2>';
                  sections.forEach(section => {
                      const sectionElement = document.createElement('div');
                      sectionElement.className = 'section-item';
                      sectionElement.textContent = section.name;
                      sectionElement.onclick = () => editSection(section.id);
                      sectionsList.appendChild(sectionElement);
                  });
              }

              function editSection(sectionId) {
                  const section = sections.find(s => s.id === sectionId);
                  const contentEditor = document.getElementById('content-editor');
                  contentEditor.innerHTML = \`
                      <h2>Edit \${section.name}</h2>
                      <\${section.type === 'text' ? 'input' : 'textarea'}
                          id="section-content"
                          \${section.type === 'text' ? 'type="text"' : ''}
                          placeholder="Enter \${section.name}"
                          value="\${section.content}"
                          oninput="updateSectionContent('\${section.id}')"
                      >\${section.type === 'textarea' ? section.content : ''}</\${section.type === 'text' ? 'input' : 'textarea'}>
                  \`;
              }

              function updateSectionContent(sectionId) {
                  const content = document.getElementById('section-content').value;
                  const sectionIndex = sections.findIndex(s => s.id === sectionId);
                  if (sectionIndex !== -1) {
                      sections[sectionIndex].content = content;
                      updatePreview();
                  }
              }

              function updatePreview() {
                  const previewElement = document.getElementById('preview');
                  let previewContent = '<h2>Preview</h2>';
                  sections.forEach(section => {
                      if (section.content) {
                          previewContent += \`<h3>\${section.name}</h3><p>\${section.content}</p>\`;
                      }
                  });
                  previewElement.innerHTML = previewContent;
              }

              function generateReadme() {
                  vscode.postMessage({
                      command: 'generate',
                      content: sections
                  });
              }

              // Initialize the app
              renderSectionsList();
              updatePreview();

              // Make functions globally accessible
              window.editSection = editSection;
              window.updateSectionContent = updateSectionContent;
              window.generateReadme = generateReadme;
          })();
  `;
}
