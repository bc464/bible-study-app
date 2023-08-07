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

function weeksBreakdown() {
  var mainContainer = document.getElementById("myData");
  fetch("./data/weeksBreakdown.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.classList.add("weeksBox");
        div.innerHTML = `<a href="${data[i].title}" id="link" value="${data[i].title}" onclick="getVerses(this)" <button><p>${data[i].title}</p> <span>${data[i].verses}</span></button></a>`;
        // console.log(div);
        mainContainer.appendChild(div);
      }
    });
}

let content = document.getElementById("myData");
let bibleVerses = document.getElementById("bibleVerses");

function getVerses() {
  fetch("./data/web.json")
    .then(function (response) {
      return response.json();
    })
    .then(function getVerses(title) {
      content.innerHTML = "";
      content.innerHTML = `<a href="index.html"><button class="back_btn">&arrl</button></a>`;
      let textHeading = title.getAttribute("href");
      console.log(textHeading);
      data = textHeading[0].title;
      console.log(data);

      bibleVerses.innerHTML = "";

      bibleVerses.innerHTML = `
        var div = document.createElement("div");
      div.innerHTML =
        "Verses: " + data.verses + " " + "<br />" + "Text: " + data.text;
      
      `;
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

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
