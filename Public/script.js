
const introDesc = document.querySelector('.IntroDesc');
setTimeout(() => {
    introDesc.style.display = 'block';
    const text = introDesc.textContent;
    introDesc.textContent = '';

    let i = 0;
    const interval = setInterval(() => {
        introDesc.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
        }
    }, 20);
}, 4000);
const bar = document.querySelector('.bar');
const mobNav = document.querySelector('.mob-nav');
const horbtn = document.querySelector('.horbtn');
const xbtn = document.querySelector('.xbtn');

bar.addEventListener('click', () => {
    mobNav.classList.toggle('show');
    mobNav.classList.toggle('animateslidein');
    xbtn.classList.toggle('hide');
    horbtn.classList.toggle('hide');
});

