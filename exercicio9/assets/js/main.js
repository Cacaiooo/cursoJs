const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

const container = document.getElementById("container");

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].tag, elementos[i].texto);

    const elementoTag = elementos[i].tag;
    const elementoTexto = elementos[i].texto;
    const setElement = document.createElement(elementoTag);
    const setTexto = document.createTextNode(elementoTexto);

    setElement.appendChild(setTexto);
    container.appendChild(setElement);
}