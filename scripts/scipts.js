const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');

menu.addEventListener('click', () => {
    toggleMenu();
})


icon.addEventListener('click', () => {
    toggleMenu();
})


function toggleMenu (){
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}



const btn = document.querySelector('.btn-download');
btn.addEventListener('click', () =>{
    window.open('assets/CV.pdf', '_blank')
} )

scrollAnimation();



function scrollAnimation () {

    const observer = new IntersectionObserver ((entries) =>{
        entries.forEach((entry) =>{
             console.log(entry)
             if(entry.isIntersecting){
                if (entry.target.classList.contains('section-1')) {
                    entry.target.classList.add('show-section-1');
                } else if (entry.target.classList.contains('section-2')) {
                    entry.target.classList.add('show-section-2');
                } else if (entry.target.classList.contains('section-3')) {
                    entry.target.classList.add('show-section-3');
                }else if (entry.target.classList.contains('section-4')) {
                    entry.target.classList.add('show-section-4');
                }else if (entry.target.classList.contains('section-5')) {
                    entry.target.classList.add('show-section-5');
                }
             }else{
                if (entry.target.classList.contains('section-1')) {
                    entry.target.classList.remove('show-section-1');
                } else if (entry.target.classList.contains('section-2')) {
                    entry.target.classList.remove('show-section-2');
                } else if (entry.target.classList.contains('section-3')) {
                    entry.target.classList.remove('show-section-3');
                } else if (entry.target.classList.contains('section-4')) {
                    entry.target.classList.remove('show-section-4');
                }else if (entry.target.classList.contains('section-5')) {
                    entry.target.classList.remove('show-section-5');
                }
             }
        });
    });

    const observerWithThreshold = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section-4');
            } else {
                entry.target.classList.remove('show-section-4');
            }
        });
    }, {
        threshold: 0.9 // Adjust the threshold as needed
    });
    
    const section4Elements = document.querySelectorAll('.section-4');
    section4Elements.forEach((el) => observerWithThreshold.observe(el));
    

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));   

}













const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('click', () =>{
    location.href = '#contact'
})

particlesJS.load('particles-js', 'path/to/particles.json', function() {
    console.log('Particles.js config loaded');
});