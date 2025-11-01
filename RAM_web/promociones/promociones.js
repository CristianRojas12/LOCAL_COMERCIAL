function calcularPromo1() {
    const precio1 = parseFloat(document.getElementById('promo1-prod1').value) || 0;
    const precio2 = parseFloat(document.getElementById('promo1-prod2').value) || 0;

    if (precio1 <= 0 || precio2 <= 0) {
        alert("Por favor, ingresá valores válidos para ambos productos.");
        return;
    }

    const totalSinDescuento = precio1 + precio2;
    const descuento = Math.min(precio1, precio2) * 0.5;
    const totalFinal = totalSinDescuento - descuento;

    const resultadoDiv = document.getElementById('resultado-promo1');
    resultadoDiv.innerHTML = `
        <p>Total sin descuento: $${totalSinDescuento.toFixed(2)}</p>
        <p>Descuento aplicado: $${descuento.toFixed(2)}</p>
        <h4>Total final: $${totalFinal.toFixed(2)}</h4>
    `;
}

function calcularPromo2() {
    const precios = [
        parseFloat(document.getElementById('promo2-prod1').value) || 0,
        parseFloat(document.getElementById('promo2-prod2').value) || 0,
        parseFloat(document.getElementById('promo2-prod3').value) || 0
    ];

    if (precios.some(p => p <= 0)) {
        alert("Por favor, ingresá valores válidos para los tres productos.");
        return;
    }

    precios.sort((a, b) => a - b); // Ordenar de menor a mayor
    const descuento = precios[0]; // El producto de menor valor es gratis
    const totalSinDescuento = precios.reduce((acc, curr) => acc + curr, 0);
    const totalFinal = totalSinDescuento - descuento;

    const resultadoDiv = document.getElementById('resultado-promo2');
    resultadoDiv.innerHTML = `
        <p>Total sin descuento: $${totalSinDescuento.toFixed(2)}</p>
        <p>Descuento aplicado (producto gratis): $${descuento.toFixed(2)}</p>
        <h4>Total final: $${totalFinal.toFixed(2)}</h4>
    `;
}

function calcularPromo3() {
    const totalCompra = parseFloat(document.getElementById('promo3-total').value) || 0;

    if (totalCompra <= 0) {
        alert("Por favor, ingresá un total de compra válido.");
        return;
    }

    let descuento = 0;
    if (totalCompra > 30000) {
        descuento = totalCompra * 0.10;
    }

    const totalFinal = totalCompra - descuento;

    const resultadoDiv = document.getElementById('resultado-promo3');
    if (descuento > 0) {
        resultadoDiv.innerHTML = `
            <p>Total sin descuento: $${totalCompra.toFixed(2)}</p>
            <p>Descuento del 10%: $${descuento.toFixed(2)}</p>
            <h4>Total final: $${totalFinal.toFixed(2)}</h4>
        `;
    } else {
        resultadoDiv.innerHTML = `
            <p>Tu compra de $${totalCompra.toFixed(2)} no supera los $30.000 para aplicar el descuento.</p>
            <h4>Total a pagar: $${totalFinal.toFixed(2)}</h4>
        `;
    }
}
