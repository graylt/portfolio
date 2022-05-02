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





