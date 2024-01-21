const nama = document.querySelector('.nama');
// Method DOM Traversal

// parentNode
console.log(nama.parentNode);
// parentElement
console.log(nama.parentElement.parentElement);
// nextSibling
console.log(nama.nextSibling); // consolenya text karena sesudahnya itu ada enter
// nextElementSibling
console.log(nama.nextElementSibling);
// previousSibling
console.log(nama.previousSibling);
// previousElementSibling
console.log(nama.previousElementSibling);

// Menggunakan DOM Traversal perulangan forEach
const bClose = document.querySelectorAll('.close');

bClose.forEach(function(btn){
    btn.addEventListener('click', function (e) { 
        e.target.parentElement.style.display = 'none';
     })
})






//  Menggunakan DOM Traversal, perulangan For
// const bClose = document.querySelectorAll('.close');
// // // Cara yang salah
// // const card = document.querySelectorAll('.card');


// for(let i = 0; i < bClose.length; i++){
//     bClose[i].addEventListener('click', function (e) { 
//         e.target.parentElement.style.display = 'none';

//         // Tidak Simple
//         bClose[i].parentElement.style.display = 'none';

//         // // Cara yang salah
//         // card[i].style.display = 'none'
//      })
// }

