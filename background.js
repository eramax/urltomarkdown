chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadMarkdown') {
    const url = request.url;
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const markdown = convertToMarkdown(html);
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        chrome.downloads.download({
          url: url,
          filename: 'page.md'
        });
      });
  }
});

function convertToMarkdown(html) {
  // Implement the logic to convert HTML to markdown
  // This is a placeholder function and should be replaced with actual implementation
  return html;
}
