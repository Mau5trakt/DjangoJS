async function fetchData(url, headers){

try {
    const response = await fetch(url, headers);

if (!response.ok) {
    throw new Error('El fecth no funcionó');
}

const data = await response.json();

return data;

} catch(error) {
    console.error('El error fue:', error);
}
}


document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd1a4df7e14mshd65d22e86e26c62p1e49afjsnac2ecef9f8b8',
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
}

boton = document.querySelector('#btn');
boton.addEventListener('click', async () => {
    const data = await fetchData(url, options);
    console.log(data);
    const quantityInput = document.querySelector('#exchange');
    const quantity = parseFloat(quantityInput.value);

    const result = quantity/data.rates.NIO;
    const contenedor = document.querySelector('.dinamic');
    contenedor.innerHTML = '';
    const billete = document.createElement('h2');
    billete.textContent = result;
    contenedor.appendChild(billete);
});

});
