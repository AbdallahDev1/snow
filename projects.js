let images = document.querySelectorAll(".project-box img");
let selectedIndex;
let count = images.length;
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightBox(img.src, index);
  });
});

function lightBox(imgSrc, index) {
  selectedIndex = index;
  let container = document.createElement("div");
  container.className = "lightBox";

  let img = document.createElement("img");
  img.src = imgSrc;
  container.appendChild(img);

  let next = document.createElement("i");
  next.className = "fa-solid fa-chevron-right";
  container.appendChild(next);
  next.addEventListener("click", () => {
    index = (index + 1) % count;
    console.log(
      `index = ${index} \n count = ${count} \n index + 1 = ${
        index + 1
      }\n (index + 1) % count = ${(index + 1) % count}`
    );
    img.src = images[index].src;
    selectedIndex = index;
  });
  let prev = document.createElement("i");
  prev.className = "fa-solid fa-chevron-left";
  container.appendChild(prev);
  prev.addEventListener("click", () => {
    index = (index - 1 + count) % count;
    img.src = images[index].src;
    selectedIndex = index;
  });
  let exit = document.createElement("i");
  exit.className = "fa-solid fa-xmark";
  container.appendChild(exit);
  exit.addEventListener("click", () => container.remove());

  document.body.appendChild(container);
}
