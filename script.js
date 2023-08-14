let content = document.getElementById("myData");

// fetching json-weeksbreakdown
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
// Function to display json-weeksbreakdown
function weeksBreakdown() {
  var mainContainer = document.getElementById("myData");
  fetch("./data/weeksBreakdown.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.classList.add("weeksBox");
        div.innerHTML = `<p>${data[i].week}</p> <p>${data[i].title}</p> <span>${data[i].verses}</span>`;
        mainContainer.appendChild(div);
      }
    });
}
// function when user clicks on a specific week
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
          content.innerHTML = `
          <div class="title-verses">
          <h2>${data[i].verses}</h2>
          </div>
          <div class="heading-verses">          
          <a href="index.html"><button class="back-btn">&larr;</button></a>
          <button class="btn-questions">7 Questions</button>
          </div>
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
          window.scrollTo(0, 0);
          // Getting the 7 Questions and to display it in textbox
          let sevenQuestions = document.getElementsByClassName("btn-questions");

          let getQuestions = () => {
            div.innerHTML = `
            
              <p>1. Did you ask someone about their struggle or challenge?</p>
              <p>2. What are we thankful for?</p>
              <p>3. What are we struggling with?</p>
              <p>*  Then read God's Word together asking:<p>
              <p>4. What does this tell us about God?</p>
              <p>5. What does this tell us about ourselves?</p>
              <p>6. What can you specifically change from this story? (create a daily action step because change takes place daily)
              </p>
              <p>7. Who can you ask about their struggle or challenge?</p>
            `;

            content.append(div);
          };
          sevenQuestions[0].addEventListener("click", getQuestions);

          // Getting the chosen bible Version and to display it
          let buttons = document.getElementsByClassName("btn");
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

// MODAL SCRIPT

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  const dailogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dailogDimensions.left ||
    e.clientX > dailogDimensions.right ||
    e.clientY < dailogDimensions.top ||
    e.clientY > dailogDimensions.bottom
  ) {
    modal.close();
  }
});
