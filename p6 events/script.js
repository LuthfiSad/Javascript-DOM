// // Event Handler

// // onclick
// const p3 = document.querySelector('.p3');
// function ubahWarna1(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.setAttribute('onclick', 'ubahWarna1()')

// const p2 = document.querySelector('.p2');
// function ubahWarna2(){
//     p2.style.backgroundColor = 'salmon';
// }
// p2.onclick = ubahWarna2;

// const p1 = document.querySelector('.p1');
// function ubahWarna3(){
//     p1.style.backgroundColor = 'lightgreen';
// }

// // addEventListener
// const sectionB = document.querySelector('section#b');
// const p = sectionB.querySelector('p');
// p.addEventListener('click', function () {
//     const ul = sectionB.querySelector('ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item Baru');
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// })



// Perbedaan events handlerdan addeventlistener
const p3 = document.querySelector('.p3');

// // event hundler -> tidak bisa menggunakan dua kali event
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

// addeventlistener -> bisa menggunakan dua event secara bersamaan
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white';
})
p3.addEventListener('click', function(){
    p3.style.color = 'red';
})
p3.addEventListener('dblclick', function(){
    p3.style.color = 'black';
})


// List Event
// https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
