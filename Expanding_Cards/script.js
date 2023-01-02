setTimeout(function () {
  let imageContainer = Array.from(
    document.querySelectorAll("main div.image-container")
  );

  imageContainer.forEach((image) => {
    let flag = 0;
    image.addEventListener("click", function () {
      //toggle class active on clicked image
      this.classList.toggle("active");

      //select siblings to remove class active from them when clicked on other elements
      let siblings = imageContainer.filter((img) => img != this);
      siblings.forEach((img) => {
        if (img.classList.contains("active")) {
          img.classList.remove("active");
        }
      });

      // Make animation effect for text with set time out
      const paragraph = Array.from(this.children[0].innerHTML);
      let delay = 100;

      paragraph.forEach((letter, i) => {
        this.children[0].innerHTML = "";

        let timer = setTimeout(() => {
          this.children[0].innerHTML += letter;
          console.log(i);
          i += 1;
        }, delay * i);
        if (this.classList.contains("active")) {
          setTimeout(timer);
        }
      });
    });
  });
}, 0);
