const text = document.getElementById('text');
const Group1 = document.getElementById('Group1');
const Layer1 = document.getElementById('Layer1');
const Layer2 = document.getElementById('Layer2');
const Layer3 = document.getElementById('Layer3');

const textsec = document.querySelector(".sec-text");

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    Group1.style.top = value * 0.6 + 'px';
    Layer1.style.top = value * 0.6 + 'px';
    Layer1.style.left = value * -0.1 + 'px';
    Layer2.style.left = value * 0.5 + 'px';
    Layer3.style.left = value * 1.0 + 'px';

});


// /////////////////////////////////////////////////
const textLoad = () => {
    setTimeout(() => {
        textsec.textContent = "blogDav";
    }, 0);
    setTimeout(() => {
        textsec.textContent = "Freelancer";
    }, 5000);
    setTimeout(() => {
        textsec.textContent = "Edittor";
    }, 10000);
}
textLoad();
setInterval(textLoad, 15000);