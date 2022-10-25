const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
console.log(burger);

$(document).ready(() => {
  $(burger).click(() => {
    $(menu).toggleClass("menu display");
    $("html, body").toggleClass("no-scroll");
  });
});

window.onload = () => {
  fetch("./data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let title = document.querySelector("title");
      let titleInner = title.innerHTML;
      let titleName = "";
      for (let i = 0; i < data.length; i++) {
        isTitleTrue = titleInner.indexOf(data[i].name);
        if (isTitleTrue > -1) {
          titleName = data[i].name;
          console.log("titlename", titleName);
        }
        if (titleName === data[i].name) {
          const heading = document.querySelector(".heading");
          const planetImage = document.querySelector(".planetImage");
          const content = document.querySelector(".content");

          const planetImageInternal = document.querySelector(
            ".planetImageInternal"
          );
          const contentInternal = document.querySelector(".contentInternal");

          const rotation = document.querySelector("#rotation");
          const revolution = document.querySelector("#revolution");
          const radius = document.querySelector("#radius");
          const temp = document.querySelector("#temp");

          heading.innerHTML = `${data[i].name}`;
          planetImage.innerHTML = `<img src="${data[i].images.planet}" width="300" height="300" alt="${data[i].name}">`;
          content.innerHTML = `${data[i].overview.content}`;

          planetImageInternal.innerHTML = `<img src="${data[i].images.internal}" width="300" height="300" alt="${data[i].name}">`;
          contentInternal.innerHTML = `${data[i].structure.content}`;

          rotation.innerHTML = `${data[i].rotation}`;
          revolution.innerHTML = `${data[i].revolution}`;
          radius.innerHTML = `${data[i].radius}`;
          temp.innerHTML = `${data[i].temperature}`;
        }
      }
    });
};
