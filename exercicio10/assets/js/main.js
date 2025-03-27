const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

// ps.forEach(p => {
//     p.style.backgroundColor = backgroundColorBody;
//     p.style.color = 'white';
// });

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

