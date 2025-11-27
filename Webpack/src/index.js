import './styles/styles.scss';  
import 'bootstrap';
import logo1 from '../content/logo_2.png';
import logo2 from '../content/Bootstrap_logo.svg.png';

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('#carouselExampleFade img');
    if (imgs[0]) imgs[0].src = logo1;
    if (imgs[1]) imgs[1].src = logo2;
});