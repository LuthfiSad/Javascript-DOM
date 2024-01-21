const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    // Tambahan Sendiri
    document.body.removeAttribute('style');
    if (document.body.classList.contains('greenyellow') === true){
        btn.innerHTML = 'Ubah Warna Kesukaan';
    } else {
        btn.innerHTML = 'Ubah Ke Warna Dasar / Putih';
    }
    // 
    document.body.classList.toggle('greenyellow');
})

const randomColor = document.createElement('button');
const textRandomColor = document.createTextNode('Ubah Warna Random');
randomColor.appendChild(textRandomColor);
randomColor.setAttribute('type', 'button')

btn.after(randomColor);

randomColor.addEventListener('click', function() {
    // pembulatan Math = round, floor, ceil
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // Tambahan Sendiri
    document.body.removeAttribute('class');
    btn.innerHTML = 'Ubah Warna Kesukaan';
})

const r = document.querySelector('input[name=red]');
const g = document.querySelector('input[name=green]');
const b = document.querySelector('input[name=blue]');

r.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb('+r.value+', '+g.value+', '+0+')';
    // Tambahan Sendiri
    document.body.removeAttribute('class');
    btn.innerHTML = 'Ubah Warna Kesukaan';
})
g.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb('+r.value+', '+g.value+', '+b.value+')'
    // Tambahan Sendiri
    document.body.removeAttribute('class');
    btn.innerHTML = 'Ubah Warna Kesukaan';
})
b.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb('+r.value+', '+g.value+', '+b.value+')';
    // Tambahan Sendiri
    document.body.removeAttribute('class');
    btn.innerHTML = 'Ubah Warna Kesukaan';
})

document.addEventListener('mousemove', function(e){
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    const xyPos = Math.floor((xPos + yPos) / 2);
    document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', '+xyPos+')';
})