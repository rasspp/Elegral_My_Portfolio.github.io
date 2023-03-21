const buttons = document.querySelectorAll(".button");
const content = document.querySelector(".content-selected");

buttons.forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      for (let i = 0; i < 5; i++) {
         buttons[i].classList.remove("active");
      }
      if (btn == buttons[0]) {
         content.innerHTML = "Saya Ridho Akbar di Palembang, Indonesia";
      } else if (btn == buttons[1]) {
         content.innerHTML = "2";
      } else if (btn == buttons[2]) {
         content.innerHTML = "3";
      } else if (btn == buttons[3]) {
         content.innerHTML = "4";
      } else if (btn == buttons[4]) {
         content.innerHTML = "5";
      }

      btn.classList.add("active");
   });
});
