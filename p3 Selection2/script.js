// Lanjutan DOM Selection Part 1
// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.color='blue';


// document.querySelectorAll() -> NodeList
const p = document.querySelectorAll('p');
// p.innerHTML = 'Kocag';
p.forEach(p => p.innerHTML = 'Ini Diubah Oleh Javascript');




// Mengubah Node Root / Mempersempit Scope Pencarian nya
const sectionB = document.getElementById('b');
const p1 = sectionB.querySelector('p');
p1.style.fontFamily = 'Courier New, Courier, monospace';