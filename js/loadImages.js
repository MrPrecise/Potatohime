function loadImages() {
  for (let i = 1; i <= 25; i++) {
    let pictureHTML = `
        <div
        class="tile raw"
        id="i${i}"
        onclick="showInfo(${i})">
        <img src="./images/${i}.png"/>
        </div>`;
    const node = document.createRange().createContextualFragment(pictureHTML);
    document.getElementById("picture-board").appendChild(node);
  }
}

loadImages();
