
flecha.style.display = 'none';

function flechaFun()
{
    flecha.style.display = 'block';
 
}

function pasarascena()
{
    document.getElementById('fons').src="imatges/8y9/acena2.png"
    porket.style.display = 'none';
    admiracio.style.display = 'none';
    text.style.display = 'none';
    porkets.style.display = 'block';
    setInterval(flechaFun,2000);
}

porket.style.display = 'block';
admiracio.style.display = 'block';
text.style.display = 'block'
porkets.style.display = 'none';
