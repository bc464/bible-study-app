import weeks from "./data/weeksBreakdown.json" assert { type: "json" };
import kjv from "./data/kjv.json" assert { type: "json" };
import asv from "./data/asv.json" assert { type: "json" };
import web from "./data/web.json" assert { type: "json" };
import arabic from "./data/arabic.json" assert { type: "json" };

const weeksInfo = document.getElementById("weeksInfo");

function showText(kjv) {}

// function onStartup() {
//   let tempDiv = document.createElement("div");

//   let weekBox = "";
//   weeks.forEach((elem) => {
//     weekBox += `
//   <div class="details>
//     <span>${elem.week}</span><p>${elem.title}</p>
//     </div>
//   `;
//     console.log(weekBox);
//     // tempDiv.append(weekBox);
//     weeksInfo.insertAdjacentHTML("afterbegin", weekBox);
//   });
// }

fetch("./data/weeksBreakdown.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    weeksBreakdown(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

let content = document.getElementById("myData");
let bibleVerses = document.getElementById("bibleVerses");

function weeksBreakdown() {
  var mainContainer = document.getElementById("myData");
  fetch("./data/weeksBreakdown.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.classList.add("weeksBox");
        div.innerHTML = ` <button><p>${data[i].title}</p> <span>${data[i].verses}</span></button>`;
        // div.innerHTML = `<a href=#"${data[i].title}" id="link" value="${data[i].title}"  <button><p>${data[i].title}</p> <span>${data[i].verses}</span></button></a>`;
        // console.log(div);
        mainContainer.appendChild(div);
      }
      let links = document.getElementById("myData");
      links.addEventListener("click", function topicChosen(e) {
        console.log("clicked");
        console.log(e);
        console.log(e.target.outerText);
        let clickedVerse = e.target.outerText;
        fetch("./data/web.json")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            for (var i = 0; i < data.length; i++) {
              if (
                clickedVerse === data[i].title ||
                clickedVerse === data[i].verses ||
                (clickedVerse === data[i].title &&
                  clickedVerse === data[i].verses)
              ) {
                console.log("good");
                content.innerHTML = "";
                content.innerHTML = `<div class="heading-verses"><a href="index.html"><button class="back_btn">&arrl</button></a><h1>${data[i].verses}</h1><button>7 Questions</button></div>`;

                var div = document.createElement("div");
                div.innerHTML = `
                              
                              <p> ${data[i].text}</p>

                            `;
                content.append(div);
              }
            }
          })
          .catch(function (err) {
            console.log("error: " + err);
          });

        function getVerses(data) {
          if (clickedVerse === data[i].title) {
            console.log("good");
          }
        }
      });
    });
}

function getVerses() {}

fetch("./data/kjv.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendKjv(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendKjv(data) {
  var mainContainer = document.getElementById("myArabic");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      "Verses: " + data[i].verses + " " + "<br />" + "Text: " + data[i].text;
    mainContainer.appendChild(div);
  }
}
fetch("./data/asv.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendAsv(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendAsv(data) {
  var mainContainer = document.getElementById("myArabic");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      "Verses: " + data[i].verses + " " + "<br />" + "Text: " + data[i].text;
    mainContainer.appendChild(div);
  }
}
fetch("./data/web.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendWeb(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendWeb(data) {
  var mainContainer = document.getElementById("myArabic");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      "Verses: " + data[i].verses + " " + "<br />" + "Text: " + data[i].text;
    mainContainer.appendChild(div);
  }
}

fetch("./data/arabic.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendArabic(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendArabic(data) {
  var mainContainer = document.getElementById("myArabic");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      "Verses: " + data[i].verses + " " + "<br />" + "Text: " + data[i].text;
    mainContainer.appendChild(div);
  }
}
