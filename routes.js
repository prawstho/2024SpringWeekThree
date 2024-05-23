const fs = require('fs');

const myEmitter = require('./logEvents.js');

function fetchFile(fileName, response) {
  fs.readFile(fileName, (error, content) => {
    if(error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('500 Internal Server Error');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    }
  });
};

function indexPage(path, response) {
  myEmitter.emit('event', path, 'INFO', 'The index page was requested');
  // go get content for the landing page
  // specials for the day
  // new products
  // login form
  fetchFile(path, response)
}

function aboutPage(path, response) {
  myEmitter.emit('event', path, 'INFO', 'The about page was requested');
  // go get content about the company
  // list of employees
  // list of services
  // list of products
  fetchFile(path, response)
}

function homePage(path, response) {
  myEmitter.emit('event', path, 'INFO', 'The home page was requested');
  // go get content for the home page
  // company address
  // company phone number
  fetchFile(path, response)
} 

module.exports = {
  indexPage,
  aboutPage,
  homePage,
}