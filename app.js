// -----Info: Resume-----

function myResume() {
    let x =document.getElementById('myStuff');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
}
}

// -----Index hover interaction-----

// view more

//original idea was to get text 'view more' when hovering over a project but had trouble configuring mouseout
//I ended up using the function below

// option a
// $('.p1').on('mouseOver');

//option b
// $(document).ready(function(){
//     $('.p1').hover(function(){
//         $(this).text('- view more -');
//     },
//         function() {
//         $(this).replace('.p1')
//         }
//  )
// });

// thumbnail hover

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

// ------slideshow-----

// auto-play
$(() => {
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('p-1');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = 'block';  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

let mySecondIndex = 0;
carousel2();

function carousel2() {
    let j;
    let y = document.getElementsByClassName('p-2');
    for (j = 0; j < y.length; j++) {
        y[j].style.display = 'none';
    }
    mySecondIndex++;
    if (mySecondIndex > y.length) {mySecondIndex = 1}
    y[mySecondIndex-1].style.display = 'block';
    setTimeout(carousel2, 2000);
    }
});

// manual select

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName('p-1');
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex-1].style.display = 'block';

}

// multiple slideshows
// let slideIndx = [1,1];
// const slideId = ['p-1', 'p-2']
// showDivs(1, 0);
// showDivs(1, 1);

// function plusDivs(n, no) {
//   showDivs(slideIndx[no] += n, no);
// }

// function showDivs(n, no) {
//   let i;
//   const x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndx[no] = 1}
//   if (n < 1) {slideIndx[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndx[no]-1].style.display = "block";  
// }





