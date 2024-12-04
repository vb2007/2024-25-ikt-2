const navToggler = document.querySelector('.nav--toggler');
const navCollapse = document.querySelector('.nav--collapse');
let isOpen = false;

navToggler.addEventListener('click', function() {
    const contentHeight = navCollapse.scrollHeight;
    
    if (!isOpen) {
        navCollapse.style.height = contentHeight + 'px';
        navCollapse.classList.add('show');
    } else {
        navCollapse.style.height = '0px';
        navCollapse.classList.remove('show');
    }
    
    isOpen = !isOpen;
});