// Calculadora simple - Práctica Git Nivel 3

function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    mostrarResultado(num1 + num2);
}

function restar() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    mostrarResultado(num1 - num2);
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    mostrarResultado(num1 * num2);
}

function mostrarResultado(valor) {
    document.getElementById('resultado').textContent = `Resultado: ${valor}`;
}