const BODY = document.getElementById("body");
const PICTURE_PREVIEW = document.getElementById("picturePreview");
const PICTURE_DIALOG = document.getElementById("pictureDialog");
const CLOSE_DIALOG_BUTTON = document.getElementById("dialogClose");
const IMAGE_DIALOG = document.getElementById("dialogImage");
const DIALOG_HEADLINE = document.getElementById("dialogHeadline");
const DIALOG_SECTION = document.getElementById("dialogSection");
const IMAGE_POSITION = document.getElementById("imagePosition");

const IMAGE_URL = "images/content_photos/";

let picturesContent = [
  {
    fileName: "pexels-aidanj-660266.jpg",
    altText:
      "Eine Gruppe von Enten die auf einem See schwimmen in der Nahaufnahme.",
  },
  {
    fileName: "pexels-alispective-35481438.jpg",
    altText:
      "Panorama von einem See mit einer großen Gruppe Enten. Im Hintergrund ist eine Stadt zu sehen.",
  },
  {
    fileName: "pexels-alpii-35493547.jpg",
    altText:
      "Vier Enten schwimmen auf einem Fluss. Am linken Ufer stehen Häuser, im Hintergrund ist eine Brücke.",
  },
  {
    fileName: "pexels-asheil-ramsurrun-357747-971412.jpg",
    altText:
      "Enten auf einem winterlichen See. Das Ufer und Bäume sind schneebedeckt.",
  },
  {
    fileName: "pexels-brett-sayles-10761992.jpg",
    altText:
      "Unterschiedliche Enten schwimmen auf einem See. Es schneit leicht.",
  },
  {
    fileName: "pexels-chris-f-38966-35527729.jpg",
    altText: "Eine größere Gruppe Enten schwimmen unter einer Brücke.",
  },
  {
    fileName: "pexels-cottonbro-6328297.jpg",
    altText: "Zwei Enten auf einem See in der Nahaufnahme.",
  },
  {
    fileName: "pexels-dave-toro-1221230-2458403.jpg",
    altText:
      "Ein Schwan fotografiert von hinten. Der Kopf ist seitlich zu sehen.",
  },
  {
    fileName: "pexels-deniz-kivilcim-2158645318-35515893.jpg",
    altText: "Drei Enten sitzen und stehen am Ufer. Zwei putzen ihr Gefieder.",
  },
  {
    fileName: "pexels-ektra-16711419.jpg",
    altText: "Schwarzweiß Foto. Man sieht die Silhouette einer Gans.",
  },
  {
    fileName: "pexels-izmir-35503255.jpg",
    altText:
      "Nahaufnahme von schwarzweißen Ente und einer typischen Stockente.",
  },
  {
    fileName: "pexels-justyna-serafin-127253298-10283629.jpg",
    altText:
      "Mystisches Panoramafoto eines Sees im leichten Nebel. Auf dem See schwimmt eine Ente. Das Bild ist entsättigt.",
  },
  {
    fileName: "pexels-karola-g-4749959.jpg",
    altText: "Fünf Entenküken auf einer Wiese.",
  },
  {
    fileName: "pexels-leeloothefirst-6128908.jpg",
    altText: "Eine größere Gruppe Enten auf einem See.",
  },
  {
    fileName: "pexels-leeloothefirst-6128910.jpg",
    altText:
      "Eine große Gruppe Enten auf einem See. Am Ufer stehen eine Reihe von Bäumen.",
  },
  {
    fileName: "pexels-pavel-danilyuk-6716256.jpg",
    altText:
      "Eine Gruppe von Enten stehen oder sitzen am schneebedeckten Ufer an einem See.",
  },
  {
    fileName: "pexels-pavel-danilyuk-6716258.jpg",
    altText: "Zwei Enten schwimmen auf einem See. Das Ufer ist schneebedeckt.",
  },
  {
    fileName: "pexels-pavel-danilyuk-6716330.jpg",
    altText:
      "Verschiedene Enten sitzen am schneebedeckten Ufer eines Sees. Verschiedene Vögel fliegen in der Luft im Hintergrund.",
  },
  {
    fileName: "pexels-roman-odintsov-8349103.jpg",
    altText:
      "Eine Gruppe Enten auf einer Wiese. Seitlich von oben fotografiert.",
  },
  {
    fileName: "pexels-shvets-production-9052946.jpg",
    altText:
      "Zwei Stockenten auf einem See. Leichter Nebel liegt auf dem See. Im Hintergrund sind Bäume zu sehen.",
  },
  {
    fileName: "pexels-weekendplayer-724372.jpg",
    altText: "Zwei Hausenten auf einer Wiesen im Sonnenschein.",
  },
];

function renderContent() {
  for (let i = 0; i < picturesContent.length; i++) {
    PICTURE_PREVIEW.innerHTML += getImagesPreviewTemplate(i);
  }
}

function getImagesPreviewTemplate(index) {
  return `<img tabindex="0" onclick="openDialog(event)" onkeydown="onkeyOpenDialog(event)" aria-haspopup="dialog" aria-controls="picture_dialog" src="${
    IMAGE_URL + picturesContent[index].fileName
  }" alt="${picturesContent[index].altText}" />`;
}

function openDialog(event) {
  PICTURE_DIALOG.showModal();
  IMAGE_DIALOG.src = event.target.src;
  IMAGE_DIALOG.alt = event.target.alt;

  setDialogHeadline(getFileName(IMAGE_DIALOG.src));
  setImagePosition(getFileName(IMAGE_DIALOG.src));

  PICTURE_DIALOG.classList.add("opened");
  BODY.classList.add("no_scroll");
}

function onkeyOpenDialog(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openDialog(event);
  }
}

function closeDialog() {
  PICTURE_DIALOG.classList.remove("opened");
  BODY.classList.remove("no_scroll");
  PICTURE_DIALOG.close();
}

function dialogClick(event) {
  event.stopPropagation();
}

function previousPicture() {
  let imageName = getFileName(IMAGE_DIALOG.src);
  let currentImage = getImagePosition(imageName);
  let nextImage = currentImage - 1;

  if (nextImage === -1) {
    nextImage = picturesContent.length - 1;
  }

  IMAGE_DIALOG.src = IMAGE_URL + picturesContent[nextImage].fileName;

  setDialogHeadline(picturesContent[nextImage].fileName);
  setImagePosition(picturesContent[nextImage].fileName);
}

function nextPicture() {
  let imageName = getFileName(IMAGE_DIALOG.src);
  let currentImage = getImagePosition(imageName);
  let nextImage = currentImage + 1;

  if (nextImage === picturesContent.length) {
    nextImage = 0;
  }

  IMAGE_DIALOG.src = IMAGE_URL + picturesContent[nextImage].fileName;

  setDialogHeadline(picturesContent[nextImage].fileName);
  setImagePosition(picturesContent[nextImage].fileName);
}

function getFileName(url) {
  let fileName = url.split("/");

  return fileName.at(-1);
}

function getImagePosition(imageName) {
  for (let i = 0; i < picturesContent.length; i++) {
    if (imageName === picturesContent[i].fileName) {
      return i;
    }
  }
}

function setDialogHeadline(text) {
  DIALOG_HEADLINE.innerHTML = text;
}

function setImagePosition(filename) {
  IMAGE_POSITION.innerHTML = `${getImagePosition(filename) + 1}/${
    picturesContent.length
  }`;
}
