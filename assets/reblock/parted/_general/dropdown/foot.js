(()=> {

    window.addEventListener('load', () => {

        let alldrop = Array.prototype.slice.call( document.querySelectorAll('.dropdown') );

        alldrop.forEach( drop => {

            // remmove hide from parent class
            drop.classList.remove('d-hide');

            let triger = drop.querySelector('.action');
            let target = drop.querySelector('.menu');
            let action = Array.prototype.slice.call( drop.querySelectorAll('.item') );

            triger.addEventListener('click', () => {
                if ( target.classList.contains('d-hide' ) ) {
                    target.classList.remove('d-hide');
                }
                triger.dataset.dropdown = "open";
             });


            drop.addEventListener('mouseleave', () => {
                triger.dataset.dropdown = "close";
            });


            action.map((event)=> {
                event.addEventListener( 'click', (event) => {
                    triger.dataset.dropdown = "close";
                });
            });
        });

        // loader debug
        console.log('dropdown foot loaded');
    });
})();