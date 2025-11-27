import './styles/styles.scss';  
import 'bootstrap';
import logo1 from '../content/logo_2.png';
import logo2 from '../content/Bootstrap_logo.svg.png';
import React from "react";
import { createRoot } from "react-dom/client";


document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('#carouselExampleFade img');
    if (imgs[0]) imgs[0].src = logo1;
    if (imgs[1]) imgs[1].src = logo2;
});

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Hello from React DOM</h1>
    </div>
);
