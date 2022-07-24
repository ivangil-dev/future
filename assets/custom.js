const documento_listo = (callback) => {
	if (document.readyState != 'loading') {callback();}
	else {document.addEventListener('DOMContentLoaded', callback);}
};

// Scroll to TOP

const back_to_top = document.querySelector('.upToScroll');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop > 100) {
            back_to_top.classList.add('show')
        } else {
            back_to_top.classList.remove('show');
        }
    });
    back_to_top.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

documento_listo(() => {  
    
    
});