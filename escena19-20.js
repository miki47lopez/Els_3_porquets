
foc.style.display = 'none';
flecha.style.display = 'none';

function pasarascenaLlop()
{
    setInterval(pasarascena,3150);
 
}

function pasarascena()
{
   Llop.style.display = 'none';
 document.getElementById('fons').src="20/Ascena.jpg";
    foc.style.display = 'block';
    flecha.style.display = 'block';

    
}



