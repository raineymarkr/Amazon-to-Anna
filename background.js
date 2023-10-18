// Create a context menu item
browser.contextMenus.create({
  id: "run-script",
  title: "Find on Anna's Archive",
  contexts: ["page"],
  documentUrlPatterns: ["https://*.amazon.com/*",
	"https://*.amazon.ca/*",
	"https://*.amazon.cn/*",
	"https://*.amazon.co.jp/*",
	"https://*.amazon.com.au/*",
	"https://*.amazon.com.mx/*",
	"https://*.amazon.co.uk/*",
	"https://*.amazon.de/*",
	"https://*.amazon.es/*",
	"https://*.amazon.eu/*",
	"https://*.amazon.fr/*",
	"https://*.amazon.in/*",
	"https://*.amazon.it/*",
	"https://*.amazon.nl/*",
	"https://*.amazon.sa/*"]
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
