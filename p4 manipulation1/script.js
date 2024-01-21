// Manipulation Element

// innerHTML 
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Kocag gemink</em>';
const  sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Halo geys</p></div>'



// style.property
judul.style.color = 'red';
// judul.style.backgroundColor = 'salmon';



// Attribute
// setAttribute() -> menambah attribute dan isinya
judul.setAttribute('class', 'biru-muda kocag')
// getAttribute() -> cek isi dari attribute
console.log(judul.getAttribute('id'));
// removeAttribute() -> menghapus attribute dan isinya
const a = sectionA.getElementsByTagName('a')[0];
a.removeAttribute('href');


// classList 
const p2 = sectionA.querySelector('.p2');
// classList.add() -> menambah class
p2.classList.add('biru-muda', 'kocag');
// classList.remove() -. hapus class
p2.classList.remove('kocag');
// classList.toggle() -> jika tidak ada akan di tambah, jika ada akan di hapus classnya
const btn = p2.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    p2.classList.toggle('biru-muda');
})
// classList.item() cek nama class ke - n
console.log(p2.classList.item(0));
// classList.contains() -> cek ada class(true), atau tidak ada(false)
console.log(p2.classList.contains('kuplak'));
// classList.replace() -> mengganti / menimpah nama class
judul.classList.replace('kocag', 'gemink')

