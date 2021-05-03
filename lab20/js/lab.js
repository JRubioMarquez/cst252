
var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

function getComic(num) {
  if(typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
}
var ourURL = URLpre + numStr + URLpost;

$.ajax({
  url: ourURL,
  type: "GET",
})

.done(function(data){
  var imageUrl = data.img;
  var title = data.title;
  var alt = data.alt;
  var comicNum = data.num;
  var html = `<div id="imgeblock">
      <h2>${title}</h2>
      <img src="${imageURL}" title="${alt}"><br>
      <button id="prev">Previous</button><button id="next">Next</button>
      </div>`
  console.log("My new html: ", html);
  $("#output").html(html);
  $("#prev").click(function(){
    getComic(comicNum - 1);
  });
  $("#next").click(fuction(){
    getComic(comicNum + 1);
  });
})

.fail(function(){
  console.log("^^; Please ignore this error. We did our best!");
  console.log("Have a nice day!");
})

getComic();
