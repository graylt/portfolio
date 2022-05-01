// -----Info: Resume-----

function myResume() {
    let x =document.getElementById('myStuff');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
}
}

// Fixed main navigation
// const body = document.body;
// const header = document.querySelector('header');
// const scrollUp = 'scroll-up';
// const scrollDown = 'scroll-down';

// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll === 0) {
//         header.classList.remove(scroll.Up);
//         return;
//     }

//     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
       // down
    //     header.classList.remove(scrollUp);
    //     header.classList.add(scrollDown);
    // } else if (
    //     currentScroll < lastScroll && 
    //     header.classList.contains(scrollDown)
    // ) {
       // up 
//         header.classList.remove(scrollDown);
//         header.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll
// });

// -----view more-----

// $('.p1').on('mouseOver');

// $(document).ready(function(){
//     $('.p1').hover(function(){
//         $(this).text('- view more -');
//     },
//         function() {
//         $(this).replace('.p1')
//         }
//  )
// });

$(function() {
    $('.p1').hover(
        function() {
            $(this).addClass('hovered');
        }, 
        function(){
            $(this).removeClass('hovered');
        }
    );
});

// ---------slideshow

// function plusSlides(n) {
//     clearIntercval(myTimer);
//     if (n < 0) {
//         showSlides(slideIndex -=1);
//     }else {
//         showSlides(slideIndex += 1);
//     }
//     if (n === -1) {
//         myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//     } else {
//         myTimer = setInterval (function() {plusSlides(n + 1)}, 4000)
//     }
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName('mySlides');
//     if (n > slides.length) {slideIndex =1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0;  i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[slideIndex-1].style.display = 'block';
// }

// window.addEventListener('load', function() {
//     showSlides(slideIndex);
//     myTimer = setInterval(function() {plusSlides[1]}, 4000)
// })


// $('#slideshow > div:gt(0)').hide();

// setInterval(function() {
//     $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// }, 3000)

// let slides = documentSelectorAll('#slides .slide');
// let currentSlide =0;
// let slideinterval = setInterval(nextSlide, 2000);

// function nextSlide() {
//     slides[currentSlide].className ='slide'
//     currentSlide = (currentSlide + 1)%slides.length;
//     slides[currentSlide].className = 'slide showing'
// }

// $(() => {
//     let currentImgIndex = 0;
//     const numOfImages = $('.slide-images').children().length - 1
//     $('.next').on('click', () => {
//         $('.slide-images').children().eq(currentImgIndex).css('display', 'none')

//         if (currentImgIndex < numOfImages) {
//             currentImgIndex++
//         } else {
//             currentImgIndex = 0
//         }
//         currentImgIndex++
//         $('.slide-images').children().eq(currentImgIndex).css('display', 'block')
//     })

//     $('.previous').on('click', () => {
//         $('.slide-images').children().eq(currentImgIndex).css('display', 'none')
        
//         if(currentImgIndex > 0) {
//             currentImgIndex --
//           } else {
//             currentImgIndex = numOfImages
//           }
      
//        $('.slide-images').children().eq(currentImgIndex).css('display', 'block')
        
// });
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {

// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName('slides');
//     for (i = 0; i < slides.length; i++)
//     slides[i].style.display = 'none';
// }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = 'block';
//     setTimeout(showSlides, 2000);

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// var slideIndex = [1,1];
// var slideId = ["p1", "p2"]
// showDivs(1, 0);
// showDivs(1, 1);

// function plusDivs(n, no) {
//   showDivs(slideIndex[no] += n, no);
// }

// function showDivs(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }
$(() => {
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("p-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
})

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("p-1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}