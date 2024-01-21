function getPilihanComputer() { 
    var comp = Math.random()

    if (comp < 0.34) return 'gajah'; 
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}
function getHasil(comp, player) { 
    if (player == comp) return 'SERI!';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!'
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!'
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!'
}


// Agar Gambar computer animasi acak
function putar() {  
    const imgC = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return
        } 
        imgC.setAttribute('src', 'img/'+gambar[i++]+'.png');
        if (i === gambar.length) i=0; 
     }, 100) 
}


// Trick Simple
const pPlayer = document.querySelectorAll('.area-player img');
let win = 1;
let lose = 1;
pPlayer.forEach(function(p){
    p.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = p.className;

        putar();

        // menunggu function putarnya selesai
        setTimeout(function() {
            // Ganti Gambar Computer
            const imgC = document.querySelector('.img-komputer');
            imgC.setAttribute('src', 'img/'+pilihanComputer+'.png');
            // Hasil
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            // untuk Skor
            const skorComp = document.querySelector('.skorComp');
			const skorPlayer = document.querySelector('.skorPlayer');
			if(hasil == 'MENANG!'){
				skorPlayer.innerHTML = win++;
			}
			if(hasil == 'KALAH!'){
				skorComp.innerHTML = lose++;	
			}
        }, 1000);
        
    })
})


// // Trick Panjang
// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');
// const pSemut = document.querySelector('.semut');
// const info = document.querySelector('.info');
// pGajah.addEventListener('click', function () { 
    // const pilihanComputer = getPilihanComputer();
    // const pilihanPlayer = pGajah.className;
    // // Ganti Gambar Computer
    // const imgC = document.querySelector('.img-komputer');
    // imgC.setAttribute('src', 'img/'+pilihanComputer+'.png');
    // // Hasil
    // const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // info.innerHTML = hasil;
// })

// pOrang.addEventListener('click', function () { 
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     // Ganti Gambar Computer
//     const imgC = document.querySelector('.img-komputer');
//     imgC.setAttribute('src', 'img/'+pilihanComputer+'.png');
//     // Hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     info.innerHTML = hasil;
// })

// pSemut.addEventListener('click', function () { 
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     // Ganti Gambar Computer
//     const imgC = document.querySelector('.img-komputer');
//     imgC.setAttribute('src', 'img/'+pilihanComputer+'.png');
//     // Hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     info.innerHTML = hasil;
// })