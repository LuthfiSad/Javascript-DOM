// eventbubbling
// agar jika ada tambahan button lagi bisa di gunakan buttonnya

const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        // agar tidak terjadi reload pada tag ahref
        e.preventDefault();
        // // untuk menghentikan event pada parent nya seperti .card
        // e.stopPropagation();
    }
})



// // kurang efektif
// const bClose = document.querySelectorAll('.close');
// bClose.forEach(function(btn){
//     btn.addEventListener('click', function (e) { 
//         e.target.parentElement.style.display = 'none';
//         // agar tidak terjadi reload pada tag ahref
//         e.preventDefault();
//         // untuk menghentikan event pada parent nya seperti .card
//         e.stopPropagation();
//      })
// })

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) { 
//     card.addEventListener('click', function (e) { 
//         alert('ok')
//      })
//  })