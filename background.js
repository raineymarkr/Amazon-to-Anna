// Create a context menu item
browser.contextMenus.create({
  id: "run-script",
  title: "Find on Anna's Archive",
  contexts: ["page"],
  documentUrlPatterns: ["https://*.amazon.com/*"]
});

// Listen for context menu click
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "run-script") {
    browser.tabs.executeScript(tab.id, {
      file: 'scrapeProductName.js'
    }).then(() => {
      console.log('Script injected.');
    }).catch((error) => {
      console.log('Error injecting script:', error);
    });
  }
});
