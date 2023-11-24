(()=> {

    window.addEventListener('load', () => {

        console.log('reblock langmenu foot loaded');

        let dark_mode_opened = document.getElementById('lang-menu');
        let dark_mode_target = dark_mode_opened.querySelector('.menu');
        let dark_mode_action = Array.prototype.slice.call( dark_mode_target.querySelectorAll('.item') );
    
        dark_mode_opened.addEventListener('click', (event) => {
            dark_mode_target.classList.toggle('d-hide');
        });
    
        dark_mode_action.map((event)=> {
            event.addEventListener( 'click', (event) => {
                let value = event.currentTarget.dataset.themeset;
                document.documentElement.dataset.mode = value;
                localStorage.setItem('darkmode', value );
            });
        })
    });

})()