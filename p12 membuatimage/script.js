const container = document.querySelector('.container');
container.addEventListener('click', function (e) { 
    if(e.target.className == 'thumb'){
        const jumbo = document.querySelector('.jumbo');
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(function (thumb) { 
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            //     e.target.classList.add('active')
            // } 
            // else {
            //     e.target.classList.add('active')
            // }

            // simple lagi
            thumb.classList = 'thumb';
         })
         e.target.classList.add('active');
    }
 })