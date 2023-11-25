(() => {

    let get_dark_mode = localStorage.getItem('darkmode');
    let get_hour_nows = new Date().getHours();
    let get_days_nows = get_hour_nows >= 6 && get_hour_nows < 18;

    if ( get_dark_mode === 'dark'  ) {
        document.documentElement.dataset.mode = 'dark';
    }
    else if ( get_dark_mode === 'light'  ) {
        document.documentElement.dataset.mode = 'light';
    }
    else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || get_days_nows == false ) {
        document.documentElement.dataset.mode = 'dark';
    }
    else {
        document.documentElement.dataset.mode = 'light';
    }

})();

