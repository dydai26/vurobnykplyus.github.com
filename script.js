

// АНІМАЦІЯ СКРОЛ

var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
 (entries) => {
     for (const entry of entries) {
         if (entry.isIntersecting || entry.intersectionRatio > 0) {
             const targetElement = entry.target;
             targetElement.classList.add("animate");
             observer.unobserve(targetElement);
         }
     }
 },
 {
     threshold: 0.15,
 }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
 observer.observe(scrollAnimElements[i]);
}


// модульне вікно1
function openModal(imgSrc) {
 var modal = document.getElementById('myModal');
 var modalImg = document.getElementById('modal-img2');
 modal.style.display = 'flex';
 modalImg.src = imgSrc;
}

// Закриття модального вікна
function closeModal() {
var modal = document.getElementById('myModal');
modal.style.display = 'none';
} 


// модульне вікно2
function openModal2(imgSrc) {
    var modal = document.getElementById('myModal2');
    var modalImg = document.getElementById('modal-img2');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
   }
   
   // Закриття модального вікна
   function closeModal2() {
   var modal = document.getElementById('myModal2');
   modal.style.display = 'none';
   } 

// модульне вікно3
function openModal3(imgSrc) {
    var modal = document.getElementById('myModal3');
    var modalImg = document.getElementById('modal-img2');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
   }
   
   // Закриття модального вікна
   function closeModal3() {
   var modal = document.getElementById('myModal3');
   modal.style.display = 'none';
   }    
// модульне вікно4
function openModal4(imgSrc) {
    var modal = document.getElementById('myModal4');
    var modalImg = document.getElementById('modal-img2');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
   }
   
   // Закриття модального вікна
   function closeModal4() {
   var modal = document.getElementById('myModal4');
   modal.style.display = 'none';
   }    

// модульне вікно5
function openModal5(imgSrc) {
    var modal = document.getElementById('myModal5');
    var modalImg = document.getElementById('modal-img2');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
   }
   
   // Закриття модального вікна
   function closeModal5() {
   var modal = document.getElementById('myModal5');
   modal.style.display = 'none';
   }       
// модульне вікно6
function openModal6(imgSrc) {
var modal = document.getElementById('myModal6');
var modalImg = document.getElementById('modal-img2');
modal.style.display = 'flex';
modalImg.src = imgSrc;
}
   
   // Закриття модального вікна
function closeModal6() {
var modal = document.getElementById('myModal6');
modal.style.display = 'none';
}       
// модульне вікно7
function openModal7(imgSrc) {
var modal = document.getElementById('myModal7');
var modalImg = document.getElementById('modal-img2');
modal.style.display = 'flex';
modalImg.src = imgSrc;
}
   
   // Закриття модального вікна
function closeModal7(imgSrc) {
var modal = document.getElementById('myModal7');
modal.style.display = 'none';
}       





// Другий хедер
document.addEventListener("scroll", function() {
    var mainHeader = document.getElementById("header");
    var stickyHeader = document.getElementById("sticky-header");

    // Визначаємо висоту основного хедера
    var mainHeaderHeight = mainHeader.clientHeight;

    // Визначаємо положення скрола
    var scrollPosition = window.scrollY;

    // Отримуємо ширину екрану
    var screenWidth = window.innerWidth;

    // Перевіряємо ширину екрану і позицію скролу, щоб вирішити, чи треба показувати закріплений хедер
    if (screenWidth > 900 && scrollPosition > mainHeaderHeight + 530) {
        stickyHeader.style.display = "block";
        stickyHeader.classList.remove("hidden");
    } else {
        stickyHeader.style.display = "none";
        stickyHeader.classList.add("hidden");
    }
});






