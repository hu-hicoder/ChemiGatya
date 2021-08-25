let H = localStorage.getItem('h');
let O = localStorage.getItem('o');
let Cl = localStorage.getItem('cl');
let F = localStorage.getItem('f');
let W = localStorage.getItem('w');

let noimg = document.getElementById("noimg");
noimg.src = "noimage.png";

        if (H === 'true') {
            let imgH = document.getElementById("imgH");
            imgH.src = "photo/H2.png";
        }
        else{
            let imgH = document.getElementById("imgH");
            imgH.src = "noimage.png";
        }
        if (He === 'true') {
            let imgO = document.getElementById("imgHe");
            imgHe.src = "photo/He.png";
        }
        else{
            let imgHe = document.getElementById("imgHe");
            imgHe.src = "noimage.png";
        }
        if (O === 'true') {
            let imgO = document.getElementById("imgO");
            imgO.src = "photo/O2.png";
        }
        else{
            let imgO = document.getElementById("imgO");
            imgO.src = "noimage.png";
        }
        if (Cl === 'true') {
            let imgCl = document.getElementById("imgCl");
            imgCl.src = "photo/Cl2.png";
        }
        else{
            let imgCl = document.getElementById("imgCl");
            imgCl.src = "noimage.png";
        }
        if (F === 'true') {
            let imgF = document.getElementById("imgF");
            imgF.src = "photo/F2.png";
        }
        else{
            let imgF = document.getElementById("imgF");
            imgF.src = "noimage.png";
        }
        if (W === 'true') {
            let imgW = document.getElementById("imgW");
            imgW.src = "photo/W.png";
        }
        else{
            let imgW = document.getElementById("imgW");
            imgW.src = "noimage.png";
        }
    
