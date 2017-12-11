/*
 *  Code.gs
 *  A. Robertson, 2017
 */
 
 // 

var title = "Page Title"

// intial call, renders index.html page and sets sandbox mode and page title
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setSandboxMode(HtmlService.SandboxMode.NATIVE).setTitle(title);
}
 
// used to convert css/js files to raw html and inject into index.html page
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// fetchs geojson file from specified url, parses and returns data
function getGeojson(url) {
  var data = UrlFetchApp.fetch(url).getContextText();
  return JSON.parse(data);
}
