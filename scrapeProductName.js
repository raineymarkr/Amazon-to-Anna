// Your code to scrape the Amazon product page
console.log('Scrape script running.');  // Debugging line

const productNameElement = document.querySelector('span#productTitle');
console.log('Product Name Element:', productNameElement);  // Debugging line

if (productNameElement) {
  const productName = productNameElement.textContent.trim();
  console.log('Product Name:', productName);  // Debugging line
  const targetURL = `https://www.annas-archive.org/search?index=&q=${encodeURIComponent(productName)}&sort=`;
  
  // Navigate to the new URL
  window.location.href = targetURL;
}
