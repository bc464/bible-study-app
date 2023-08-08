import weeks from "./data/weeksBreakdown.json" assert { type: "json" };
import kjv from "./data/kjv.json" assert { type: "json" };
import asv from "./data/asv.json" assert { type: "json" };
import web from "./data/web.json" assert { type: "json" };
import arabic from "./data/arabic.json" assert { type: "json" };

const weeksInfo = document.getElementById("weeksInfo");

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
        mainContainer.appendChild(div);
      }
    });
}

let links = document.getElementById("myData");
links.addEventListener("click", function topicChosen(e) {
  let clickedVerse = e.target.outerText;
  fetch("./data/web.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (clickedVerse === data[i].title || clickedVerse === data[i].verses) {
          content.innerHTML = "";
          content.innerHTML = `<div class="heading-verses"><a href="index.html"><button class="back-btn">&larr;</button></a><h1>${data[i].verses}</h1><button>7 Questions</button></div>
                <div class="bibleLinks"> <button id="kjv" class="btn" >KJV</button>
                 <button id="asv" class="btn" >ASV</button>
                 <button id="web" class="btn" >WEB</button><button id="arabic" class="btn arabic" >ARABIC</button></div>`;

          var div = document.createElement("div");
          div.classList.add("bibleLinks");
          div.innerHTML = ``;

          var div = document.createElement("div");
          div.classList.add("textBox");
          div.innerHTML = `                          
                              <p> ${data[i].text}</p>
                            `;
          content.append(div);

          let buttons = document.getElementsByTagName("button");
          let versionChosen = (e) => {
            let bibleVersion = e.target.id;

            fetch(`./data/${bibleVersion}.json`)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                for (var i = 0; i < data.length; i++) {
                  if (
                    clickedVerse === data[i].title ||
                    clickedVerse === data[i].verses
                  ) {
                    div.innerHTML = `                          
                              <p> ${data[i].text}</p>
                            `;
                    content.append(div);
                  }
                }
              });
          };
          for (let button of buttons) {
            button.addEventListener("click", versionChosen);
          }
        }
      }
    });
});

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
