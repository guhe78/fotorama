const MAIN_CONTENT = document.getElementById("picture-preview");

let picturesContent = [
  "images/content_photos/pic01.jpg",
  "images/content_photos/pic02.jpg",
  "images/content_photos/pic03.jpg",
  "images/content_photos/pic04.jpg",
  "images/content_photos/pic05.jpg",
  "images/content_photos/pic06.jpg",
  "images/content_photos/pic07.jpg",
  "images/content_photos/pic08.jpg",
];

console.log(picturesContent);

for (let i = 0; i < picturesContent.length; i++) {
  MAIN_CONTENT.innerHTML += `<img src="${picturesContent[i]}" />`;
}
