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

var shortcutEnabled = false;

document.querySelector(".power").addEventListener("click", function () {
   shortcutEnabled = !shortcutEnabled;

   if (shortcutEnabled) {
      document.body.classList.add("shortcut-enabled");
   } else {
      document.body.classList.remove("shortcut-enabled");
   }
});

// document.addEventListener("keydown", function (event) {
//    if (shortcut && event.key === "1") {
//       prompt("tombol di tekan");
//    }
// });

// semua tag a dibuat array agar bisa melooping nya
const href = ["#home", "#about-me", "#skills", "#portfolio", "#contact-me"];

// menjalankan peristiwa klik dengan keyboard
document.addEventListener("keydown", function (event) {
   for (let i = 1; i <= href.length; i++) {
      // Digit1 = key 1, Digit2 = key2, dst...
      if (/* shortcutEnabled && */ event.code === `Digit${i}`) {
         document.querySelector(`a[href='${href[i - 1]}']`).click();
      }
   }
});
