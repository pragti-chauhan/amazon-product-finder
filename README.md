# Amazon Product Finder

## About
This is a simple project developed using `puppeteer`, `nodeJS`, `expressJS`, `HTML` and `CSS`. 
Aim of the project is to let user enter any product they want in our search bar, on submitting which will initiate the scraping action on [amazon.com](https://www.amazon.com) using puppeteer service. 
Service will search the product using given query, then take the first product from the results list and store the product’s necessary information(screenshot of product page 
and HTML content) in the local device storage. Additionally, user will be able to see the product item’s title, price and URL, which will navigate them to the actual amazon product site.
![img1](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/4ce1d22e-db0c-4948-a88c-3b78bb553db9)

## Setting Up Project:-
-	First, make sure you have the latest node version installed on your system and a code editor(like VSCode, Atom etc.)
-	Then, clone this repository in your local system, or clone it using the CLI. There are multiple ways to clone the repo as shown in the image below. <br>
 	![extra](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/a4041354-8dbb-4f40-a33f-7d7c9847d4a1)

-	Next, open the terminal and move to the root directory of the project folder using- <br>
 `cd <project_directory_path>` <br>
 and run, <br>
`npm init` <br>
to initialize a new Node.js project and install the required dependencies using- <br>
`npm install`
-	Install all the important dependencies which we’ll be using in this project- 
```
npm i puppeteer
npm i express
npm i fs
```
-	Finally, run- <br>
`node app.js` <br>
This will start the session on port- 3000.
-	Open `localhost:3000` in your browser, and the requested webpage (app.html) will be rendered and ready for interaction with user.
- Use the search bar to enter the product you want.
Here, I have searched ‘office chair’, and as you can see, our scraping with puppeteer is in progress now.
![img2](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/c655951b-9722-4a6e-96b8-2eb64d19b196)

- Finally, user will be able to see some of the product’s information.
![img3](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/ccf6b566-bc79-40e4-8f43-8f5762b1e1b7)

-	Simultaneously, a screenshot of the product along with the HTML content of the product’s page will be saved in the local device storage as shown in the images below. <br>
![img4](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/49a9201f-96a8-446e-8d9f-8d39336c2c62)
![img5](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/8d5734f5-4b6a-460d-bba6-3df52de0ee50)
![img6](https://github.com/pragti-chauhan/amazon-product-finder/assets/66918663/336b4425-4210-47d6-9dca-5d59c90622a4)

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
