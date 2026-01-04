const MAIN_CONTENT = document.getElementById("picture_preview");
const dialogRef = document.getElementById("picture_dialog");
const closeDialogButton = document.getElementById("dialog_close");
const imageDialog = document.getElementById("image_dialog");

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

closeDialogButton.onclick = closeDialog;

function renderContent() {
  for (let i = 0; i < picturesContent.length; i++) {
    MAIN_CONTENT.innerHTML += `<img src="${picturesContent[i]}" onclick="openDialog(event)" aria-haspopup="dialog" aria-controls="picture_dialog" />`;
  }
}

function openDialog(event) {
  dialogRef.showModal();
  imageDialog.src = event.target.src;
  console.log(event.target.src);
}

function closeDialog() {
  dialogRef.close();
}
