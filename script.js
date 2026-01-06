const picturePreview = document.getElementById("picture_preview");
const dialogRef = document.getElementById("picture_dialog");
const closeDialogButton = document.getElementById("dialog_close");
const imageDialog = document.getElementById("image_dialog");
const dialogHeadline = document.getElementById("dialog_headline");
const dialogSection = document.getElementById("dialog_section");

const imageUrl = "images/content_photos/";

let picturesContent = [
  { name: "pic01.jpg", altText: "" },
  { name: "pic02.jpg", altText: "" },
  { name: "pic03.jpg", altText: "" },
  { name: "pic04.jpg", altText: "" },
  { name: "pic05.jpg", altText: "" },
  { name: "pic06.jpg", altText: "" },
  { name: "pic07.jpg", altText: "" },
  { name: "pic08.jpg", altText: "" },
];

function renderContent() {
  for (let i = 0; i < picturesContent.length; i++) {
    picturePreview.innerHTML += `<img src="${
      imageUrl + picturesContent[i].name
    }" onclick="openDialog(event)" aria-haspopup="dialog" aria-controls="picture_dialog" />`;
  }
}

function openDialog(event) {
  dialogRef.showModal();
  imageDialog.src = event.target.src;
  console.log(imageDialog.src);
  dialogRef.classList.add("opened");

  setDialogHeadline(getFileName(imageDialog.src).replace(".jpg", ""));
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
  console.log("next Image number: " + nextImage);
  if (nextImage === picturesContent.length) {
    nextImage = 0;
  }
  imageDialog.src = imageUrl + picturesContent[nextImage].name;
  setDialogHeadline(picturesContent[nextImage].name.replace(".jpg", ""));
}

function getFileName(url) {
  let fileName = url.split("/")[5];

  return fileName;
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
