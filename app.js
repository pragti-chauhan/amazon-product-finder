const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname));

app.listen(3000, function () {
    console.log("Server is running at port 3000");
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/app.html");
});

app.get('/scrape', async (req, res) => {
    const userInput = req.query.pName;
    if (!userInput) {
        return res.status(400).json({ error: 'Product input is missing.' });
    }
        
    //Create a new folder for each new product information to be saved
    fs.mkdirSync(`./products-info/${userInput}`);

    let productInfo = [];
    try {
        productInfo = await scrapeAmazonProduct(userInput);

        console.log(`Data for "${userInput}" saved successfully.`);
    } catch (error) {
        console.error('Error:', error);
    } 
    
    console.log(productInfo);
    res.json(productInfo);
});

async function scrapeAmazonProduct(productName) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to Amazon and search for the product
    await page.goto(`https://www.amazon.com/s?k=${encodeURIComponent(productName)}`);
    
    // Wait for search results to load
    await page.waitForSelector("div.s-result-item");

    //Taking the first search results' URL, i.e. the first product
    const productURL = await page.$eval("div.s-result-item:nth-child(1) a.a-link-normal", link => link.href);

    //Go to the selected product's URL
    await page.goto(productURL);

    //Now, capture the product page's screenshot and save it in the newly created directory 
    await page.screenshot({
        path: `./products-info/${productName}/${productName}_capture.png`
    });

    //Now extract the HTMl contents of the page and save it in the same directory
    const productHTML = await page.content();
    fs.writeFileSync(`./products-info/${productName}/${productName}_page.html`, productHTML);

    // Extract product details
    const productTitle = await page.$eval('#productTitle', title => title.textContent.trim());
    const productPrice = await page.$eval('span.a-price .a-offscreen', price => price.textContent.trim());

    // Store data in an object
    const productData = {
        title: productTitle,
        price: productPrice,
        url: productURL
    };

    //Finally terminate the scraping activity
    await browser.close();

    return productData;
};
