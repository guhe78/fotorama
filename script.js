const picturePreview = document.getElementById("picturePreview");
const dialogRef = document.getElementById("pictureDialog");
const closeDialogButton = document.getElementById("dialogClose");
const imageDialog = document.getElementById("dialogImage");
const dialogHeadline = document.getElementById("dialogHeadline");
const dialogSection = document.getElementById("dialogSection");

const imageUrl = "images/content_photos/";

let picturesContent = [
  { name: "pic01.jpg", altText: "bild 1" },
  { name: "pic02.jpg", altText: "bild 2" },
  { name: "pic03.jpg", altText: "bild 3" },
  { name: "pic04.jpg", altText: "bild 4" },
  { name: "pic05.jpg", altText: "bild 5" },
  { name: "pic06.jpg", altText: "bild 6" },
  { name: "pic07.jpg", altText: "bild 7" },
  { name: "pic08.jpg", altText: "bild 8" },
  { name: "pic01.jpg", altText: "bild 1" },
  { name: "pic02.jpg", altText: "bild 2" },
  { name: "pic03.jpg", altText: "bild 3" },
  { name: "pic04.jpg", altText: "bild 4" },
  { name: "pic05.jpg", altText: "bild 5" },
  { name: "pic06.jpg", altText: "bild 6" },
  { name: "pic07.jpg", altText: "bild 7" },
  { name: "pic08.jpg", altText: "bild 8" },
];

function renderContent() {
  for (let i = 0; i < picturesContent.length; i++) {
    picturePreview.innerHTML += `
        <img tabindex="0" onclick="openDialog(event)" onkeydown="onkeyOpenDialog(event)" aria-haspopup="dialog" aria-controls="picture_dialog" src="${
          imageUrl + picturesContent[i].name
        }" alt="${picturesContent[i].altText}" />`;
  }
}

function openDialog(event) {
  dialogRef.showModal();
  imageDialog.src = event.target.src;
  imageDialog.alt = event.target.alt;
  dialogRef.classList.add("opened");

  setDialogHeadline(getFileName(imageDialog.src).replace(".jpg", ""));
}

function onkeyOpenDialog(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openDialog(event);
  }
}

function closeDialog() {
  dialogRef.classList.remove("opened");
  dialogRef.close();
}

function dialogClick(event) {
  event.stopPropagation();
}

function previousPicture() {
  let imageName = getFileName(imageDialog.src);
  let currentImage = getImagePosition(imageName);
  let nextImage = currentImage - 1;
  if (nextImage === -1) {
    nextImage = picturesContent.length - 1;
  }
  imageDialog.src = imageUrl + picturesContent[nextImage].name;
  setDialogHeadline(picturesContent[nextImage].name.replace(".jpg", ""));
}

function nextPicture() {
  let imageName = getFileName(imageDialog.src);
  let currentImage = getImagePosition(imageName);
  let nextImage = currentImage + 1;
  if (nextImage === picturesContent.length) {
    nextImage = 0;
  }
  imageDialog.src = imageUrl + picturesContent[nextImage].name;
  setDialogHeadline(picturesContent[nextImage].name.replace(".jpg", ""));
}

function getFileName(url) {
  let fileName = url.split("/");

  return fileName.at(-1);
}

function getImagePosition(imageName) {
  for (let i = 0; i < picturesContent.length; i++) {
    if (imageName === picturesContent[i].name) {
      return i;
    }
  }
}

function setDialogHeadline(text) {
  dialogHeadline.innerHTML = text;
}
