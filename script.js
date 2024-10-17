function calcular() {
    const input = document.getElementById('inputValues').value;
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));

    const media = calcularMedia(numbers);
    const moda = calcularModa(numbers);
    const mediana = calcularMediana(numbers);

    document.getElementById('media').textContent = media;
    document.getElementById('moda').textContent = moda;
    document.getElementById('mediana').textContent = mediana;
}

function calcularMedia(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return (total / numbers.length).toFixed(2);
}

function calcularModa(numbers) {
    const frequency = {};
    let maxFreq = 0;
    let moda = [];

    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (const num in frequency) {
        if (frequency[num] === maxFreq) {
            moda.push(num);
        }
    }

    return moda.length === 0 || maxFreq === 1 ? "Não há nenhuma moda" : (moda.length > 1 ? `Multimodal: ${moda.join(', ')}` : `Moda: ${moda[0]}`);
}

function calcularMediana(numbers) {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return ((numbers[mid - 1] + numbers[mid]) / 2).toFixed(2);
    } else {
        return numbers[mid].toFixed(2);
    }
}
