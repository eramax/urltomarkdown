import { convertToMarkdown } from './url_to_markdown_processor.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'convertToMarkdown') {
    const html = document.documentElement.outerHTML;
    const markdown = convertToMarkdown(html);
    chrome.runtime.sendMessage({ action: 'downloadMarkdown', markdown: markdown });
  }
});
