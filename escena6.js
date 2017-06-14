
flecha.style.display = 'none';

function flechaFun()
{
    flecha.style.display = 'block';
 
}

function pasarascena()
{
    document.getElementById('fons').src="imatges/6y7/acena2.png"
    porket.style.display = 'block';
    admiracio.style.display = 'none';
    text.style.display = 'none';
    setInterval(flechaFun,2000);
}

porket.style.display = 'none';
admiracio.style.display = 'block';
text.style.display = 'block'
