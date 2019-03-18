const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
var fm = require('front-matter');
var marked = require('marked');
var ogPages = require('./src/og-pages.json');
var url = require('url');


app.get('/pricing', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    if(data){
      var metaData=ogPages.pages[0];
      //replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g,metaData.ogTitle);
      data = data.replace(/\$OG_DESCRIPTION/g, metaData.ogDescription);
      result = data.replace(/\$OG_IMAGE/g,metaData.ogImage);
      response.send(result);
    }
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
