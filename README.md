# Amazon Product Finder

## About
This is a simple project developed using `puppeteer`, `nodeJS`, `expressJS`, `HTML` and `CSS`. 
Aim of the project is to let user enter any product they want in our search bar, on submitting which will initiate the scraping action on [amazon.com](https://www.amazon.com) using puppeteer service. 
Service will search the product using given query, then take the first product from the results list and store the product’s necessary information(screenshot of product page 
and HTML content) in the local device storage. Additionally, user will be able to see the product item’s title, price and URL, which will navigate them to the actual amazon product site.
![img1](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/4a5c2555-9cff-404c-a097-3db5b2fe2b51)

## Setting Up Project:-
-	First, make sure you have the latest node version installed on your system and a code editor(like VSCode, Atom etc.)
-	Then, clone this repository in your local system, or clone it using the CLI. There are multiple ways to clone the repo as shown in the image below.
  ![extra](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/546f1818-b960-4a26-a79d-f34412a4c0a8) 
-	Next, open the terminal and move to the root directory of the project folder using- <br>
 `cd <project_directory_path>` <br>
 and run, <br>
`npm init` <br>
to initialize a new Node.js project and install the required dependencies.
-	Install all the important dependencies which we’ll be using in this project- 
```
npm i puppeteer
npm i express
npm i fs
```
-	Finally, run- <br>
`node app.js`
This will start the session on port- 3000.
-	Open `localhost:3000` in your browser, and the requested webpage (app.html) will be rendered and ready for interaction with user.
- Use the search bar to enter the product you want.
Here, I have searched ‘office chair’, and as you can see, our scraping with puppeteer is in progress now.
![img2](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/4772dcad-537e-46f1-9ca6-2560446d5f07)
- Finally, user will be able to see some of the product’s information.
 ![img3](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/9f23304e-7fee-40f8-a43a-e3c8db66f088)

-	Simultaneously, a screenshot of the product along with the HTML content of the product’s page will be saved in the local device storage as shown in the images below. <br>
![img4](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/c4bed2d6-fda1-41a8-9725-4fb38a795bc7)
![img5](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/df46600b-ac3d-44b7-9523-8880d156ccb0)
![img6](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/18bb392c-a10b-40cf-b4e9-303e188a3cb6)

## Tech Stack 

**Frontend:** HTML, CSS, JavaScript

**Backend:** Node, Express

## Future Scope:-
-	UI could be improved to include multiple products, along with a product image, clicking which will redirect them to product URL.
-	Search experience could be improved to generate product recommendations, based on what user is typing.
-	Scope of scraping could be increased to study vast product data, for the purpose of data science.

## Acknowledgements

 - [NodeJS Documentation](https://nodejs.org/en/docs)
 - [ExpressJS Documentation](https://expressjs.com/en/5x/api.html)
 - [Puppeteer Documentation](https://pptr.dev/)
 - [Scraping Amazon using Puppeteer and Browserless](https://hackernoon.com/scraping-amazon-using-puppeteer-and-browserless)
 - [How to Create a Search Bar in a basic JavaScript Application](https://rachelaemmer.medium.com/how-to-create-a-search-bar-in-a-basic-javascript-application-f031848079e9)

## Authors

- [pragti-chauhan](https://github.com/pragti-chauhan)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pragti-chauhan-2132a61a2/)
