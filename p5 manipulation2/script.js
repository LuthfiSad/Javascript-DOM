// Manipulation Node
const sectionA = document.getElementById('a');
const ul = document.querySelector('ul');
const li = document.querySelector('li:nth-child(2)');
const link = sectionA.getElementsByTagName('a')[0];
const p2 = sectionA.getElementsByClassName('p2')[0];
console.log(p2);


// document.createElement() -> Buat Element Baru
const pBaru = document.createElement('p');
const PTimpah = document.createElement('p');
const liBaru = document.createElement('li');
// document.createTextNode() -> Buat isi / Text
const textPBaru = document.createTextNode('Paragraf Baru');
const textPTimpah = document.createTextNode('Mengganti / Menimpah Paragraf');
const textLiBaru = document.createTextNode('Item Baru');
// node.appendChild() -> masukan di akhir dari sebuah parrent
pBaru.appendChild(textPBaru);
liBaru.appendChild(textLiBaru);
PTimpah.appendChild(textPTimpah);
sectionA.appendChild(pBaru);
// node.insertBefore() -> measukan ke sebuah parent sebelum n
ul.insertBefore(liBaru, li)
// parentNode.removeChild() -> menghapus child / element di dalam parent nya
sectionA.removeChild(link);
// parentNode.replaceChild() -> mengganti / menimpah child / element di dalam parent nya
sectionA.replaceChild(PTimpah, p2)


// tanda yang sudah di ubah
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
PTimpah.style.backgroundColor = 'lightgreen';
