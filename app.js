

function validarCedula() {
    
    const parrafo = document.getElementById("texto-validacion");
    const inputCedula = document.querySelector('#cedula'); 
    if (!inputCedula) {
        console.error("No se encontró el input de cédula.");
        return;
    }

    const cedula = inputCedula.value;

    if (!cedula || cedula.length !== 11) {
        parrafo.textContent = "Cédula incorrecta, debe tener 11 números";
        return;
    }

    let sumapar = 0;
    let sumainp = 0;
    let digitoValidador = parseInt(cedula[10]);

    for (let i = 1; i < cedula.length - 1; i += 2) {
        let multi = parseInt(cedula[i]) * 2;
        sumapar += (multi > 9) ? (multi - 9) : multi;
    }

    for (let i = 0; i < cedula.length - 1; i += 2) {
        sumainp += parseInt(cedula[i]);
    }

    let totalS = (sumapar + sumainp) % 10;

    if (totalS === 0 || (10 - totalS) === digitoValidador) {
        parrafo.textContent = `La cédula es correcta. Dígito validador es:${digitoValidador}`;
    } else {
        parrafo.textContent = "Cédula Incorrecta";
    }
}