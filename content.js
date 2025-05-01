chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'convertToMarkdown') {
    const html = document.documentElement.outerHTML;
    const markdown = convertToMarkdown(html);
    chrome.runtime.sendMessage({ action: 'downloadMarkdown', markdown: markdown });
  }
});

function convertToMarkdown(html) {
  // Implement the logic to convert HTML to markdown
  // This is a placeholder function and should be replaced with actual implementation
  return html;
}
