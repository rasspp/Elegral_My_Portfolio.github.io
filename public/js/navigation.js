const list = document.querySelectorAll(".list");

// membuat peristiwa klik
function activeLink() {
   list.forEach((item) => {
      item.classList.remove("active");
   });
   this.classList.add("active");
}

// menjalankan peristiwa klik dengan fungsi klik
list.forEach((item) => {
   item.addEventListener("click", activeLink);
});

// menjalankan peristiwa klik dengan keyboard
const shortcut = () => {
   document.addEventListener("keydown", function (event) {
      // semua tag a dibuat array agar bisa melooping nya
      const href = ["#home", "#about-me", "#skills", "#portfolio", "#contact-me"];

      for (let i = 1; i <= href.length; i++) {
         // Digit1 = key 1, Digit2 = key2, dst...
         if (event.code === `Digit${i}`) {
            document.querySelector(`a[href='${href[i - 1]}']`).click();
         }
      }
   });
};

shortcut();
