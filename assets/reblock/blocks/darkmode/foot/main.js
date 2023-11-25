(()=> {

    window.addEventListener('load', () => {

        console.log('reblock foot loaded');

        let dark_mode_opened = document.getElementById('dark-mode');
        let dark_mode_target = dark_mode_opened.querySelector('.menu');
        let dark_mode_action = Array.prototype.slice.call( dark_mode_target.querySelectorAll('.item') );
    
        dark_mode_opened.addEventListener('mouseenter', () => {
            if ( dark_mode_target.classList.contains('d-hide' ) ) {
                dark_mode_target.classList.remove('d-hide');
            }
            dark_mode_target.dataset.dropdown = "open";
        });

        dark_mode_opened.addEventListener('mouseleave', () => {
            dark_mode_target.dataset.dropdown = "close";
        });
    
        dark_mode_action.map((event)=> {
            event.addEventListener( 'click', (event) => {
                let value = event.currentTarget.dataset.themeset;
                dark_mode_target.dataset.dropdown = "close";
                localStorage.setItem('darkmode', value );
                document.documentElement.dataset.mode = value;
            });
        })
    });
})();