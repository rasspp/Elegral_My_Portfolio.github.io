const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

slides.forEach(function (slide) {
   let indexGambar = 1;
   // buat variabel penampung slides.length, karna kalo tidak ditampung nanti jadi 1 grgr ditimpa manipulasi html dibawah
   const slidesLength = 4;
   slide.innerHTML = `<img src="./assets/image/img/${4}.jpg" alt="Gambar ${indexGambar}" />`;

   slide.addEventListener("click", function (e) {
      slide.innerHTML = `<img src="./assets/image/img/${indexGambar}.jpg" alt="Gambar ${indexGambar}" />`;

      indexGambar++;
      if (indexGambar < 1) {
         indexGambar = slidesLength;
      } else if (indexGambar > slidesLength) {
         indexGambar = 1;
      }
      console.log(indexGambar);
      console.log(slide.innerHTML);
   });
});

/* 









































let slideIndex = 1;
showSlide(slideIndex);

const nextSlide = (n) => {
   showSlide((slideIndex = n));
};

const showSlide = (n) => {
   let i;

   if (n > slides.length) {
      slideIndex = 1;
   }

   if (n < 1) {
      slideIndex = slideIndex.length;
   }

   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides);
   }

   slides[slideIndex - 1].style.display = "block";
};
console.log(showSlide);
 */
