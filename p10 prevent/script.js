// preventDefault
//  = mencegah terjadinya event bawaan dari sebuah DOM

const bClose = document.querySelectorAll('.close');
bClose.forEach(function(btn){
    btn.addEventListener('click', function (e) { 
        e.target.parentElement.style.display = 'none';
        // agar tidak terjadi reload pada tag ahref
        e.preventDefault();
     })
})