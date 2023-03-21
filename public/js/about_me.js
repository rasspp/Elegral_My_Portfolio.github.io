const buttons = document.querySelectorAll(".button");
const content = document.querySelector(".content-selected");

const isiContent = ["saya ridho akbar", "kominfo", "artatix,damatiza", "4", "5"];

// melooping dengan forEach
buttons.forEach(function (btn) {
   // event klik button
   btn.addEventListener("click", function (e) {
      // untuk tidak banyak menulis ulang jadi dibikin for
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].classList.remove("active");

         // memberi hasil yang berbeda ketika tombol yang di klik berbeda
         if (btn == buttons[i]) {
            content.innerHTML = isiContent[i];
         }
      }

      btn.classList.add("active");
   });
});
