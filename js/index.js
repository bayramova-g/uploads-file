

const dropArea = document.querySelector(".drop-area");
const imgList = document.querySelector(".img-list");

["dragenter", "dragover", "dragleave", "drop"].forEach((item) =>
  dropArea.addEventListener(item, function (e) {
    e.preventDefault();
    e.stopPropagation();
  })
);

["dragenter", "dragover"].forEach((item) => {
  dropArea.addEventListener(item, function (e) {
    this.classList.add("active");
  });
});

["dragleave", "drop"].forEach((item) => {
  dropArea.addEventListener(item, function (e) {
    this.classList.remove("active");
  });
});

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
    const files = e.dataTransfer.files;
    const arrFiles = [...files];

    arrFiles.forEach(previewFile);
    arrFiles.forEach(uploadFiles)
});

function previewFile(file) {
  const fileReader = new FileReader();

  fileReader.readAsDataURL(file);

  fileReader.onloadend = function () {
    // img box div
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box");

    // create image
    const img = document.createElement("img");
    img.src = fileReader.result;

    // create icon box
    const iconBox = document.createElement("div");
    iconBox.classList.add("icon-box");

    // create icon
    const icon = document.createElement("i");
    icon.className = "fas fa-trash";

    iconBox.append(icon);

    imgBox.append(img);
    imgBox.append(iconBox);

    imgList.append(imgBox);


    icon.addEventListener('click', function(e){
        this.parentNode.parentNode.remove()
    })

  };
}

function uploadFiles(file){
    const formData = new FormData()

    formData.append('file', file)

    // api post call
    // console.log(formData)
}
