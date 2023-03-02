# Rest-API

This is REST API example related to data about mobile phones. The entire application is contained within the `index.js` file. This is made using Express.js, Mongoose and MongoDB.

## Getting Started
#### Since this is an example project, I'd encourage you to clone and rename this project to use for your purposes. It's a good starter boilerplate. Or you can simple use the deployed link mentioned below.

* Clone or download the repository to your local machine.
## Install

    npm install

## Run the app

    npm run dev

* Explore the code by opening the file in a text editor and following the comments.

# REST API

The REST API to the example app is described below.

## Get list of Products

`GET /api/products`

## Get list of Products in Testing

`GET /api/products/testing`

## Features such as sort, filter, serach and pagination are implemented. User can achieve desired result using query and params.

Eg; 
Search: /api/products?name=iphone

Sort: /api/products?sort=-price

Filter: /api/products?select=price

Limit: /api/products?limit=3

## Demo

A short video demo of the complete project:





## Deployment

The deployed link of the project:
#### https://fine-cyan-hummingbird-cuff.cyclic.app/

## Contributions

Contributions are always welcome! Please submit an issue using the issue tab above if you have feedback or improvement suggestions. I would appreciate it if you could submit a pull request with a fix.
