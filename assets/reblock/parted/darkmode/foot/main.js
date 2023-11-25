(()=> {

    window.addEventListener('load', () => {

        let opened = document.getElementById('dark-mode');
        let triger = opened.querySelector('.action');
        let target = opened.querySelector('.menu');
        let action = Array.prototype.slice.call( target.querySelectorAll('.item') );
        let getdat = new Date().getHours();
    
        triger.addEventListener('click', () => {
            target.dataset.darkmenu = localStorage.getItem('darkmode');
        });

        action.map((event)=> {
            event.addEventListener( 'click', (event) => {
                
                // set current session darkmode
                let value = event.currentTarget.dataset.themeset;
                let times = getdat >= 6 && getdat < 18;

                localStorage.setItem('darkmode', value );
                target.dataset.darkmenu = value;
               
                if ( value == 'auto' && times == false ) {
                    document.documentElement.dataset.mode = 'dark';
                }
                else {
                    document.documentElement.dataset.mode = value;
                }
            });
        });

        // loader debug
        console.log('reblock - darkmode - foot loaded');
    });
})();