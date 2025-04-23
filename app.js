function calcular() {
    const tecido = parseFloat(document.getElementById('tecido').value) || 0;
    const linha = parseFloat(document.getElementById('linha').value) || 0;
    const maoDeObra = parseFloat(document.getElementById('maoDeObra').value) || 0;
    const energia = parseFloat(document.getElementById('energia').value) || 0;
    const tempo = parseFloat(document.getElementById('tempo').value) || 0;

    const custoTotal = tecido + linha + maoDeObra + energia + tempo;
    const lucro = custoTotal * 0.3;
    const precoFinal = custoTotal + lucro;

    document.getElementById('resultado').innerHTML =
        `<strong>Custo total:</strong> R$ ${custoTotal.toFixed(2)}<br/>
         <strong>Lucro (30%):</strong> R$ ${lucro.toFixed(2)}<br/>
         <strong>Preço de venda:</strong> R$ ${precoFinal.toFixed(2)}`;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}