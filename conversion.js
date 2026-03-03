const TAXA_EURO = 655.957;
const cfaInput = document.getElementById("cfaInput");
const euroOutput = document.getElementById("euroOutput");
const btnSwitch = document.getElementById("btnSwitch");

cfaInput.addEventListener("input", () => {
  const valorCfa = parseFloat(cfaInput.value);

  if (!isNaN(valorCfa) && valorCfa > 0) {
    const resultadoEuro = valorCfa / TAXA_EURO;

    euroOutput.value = resultadoEuro.toFixed(2);
  } else {
    euroOutput.value = "";
  }
});

euroOutput.addEventListener("input", () => {
  const valorEuro = parseFloat(euroOutput.value);

  if (!isNaN(valorEuro) && valorEuro > 0) {
    const resultadoCfa = valorEuro * TAXA_EURO;

    cfaInput.value = resultadoCfa.toFixed(0);
  } else {
    cfaInput.value = "";
  }
});

btnSwitch.addEventListener("click", () => {
  // 1. Verificamos quem está bloqueado atualmente
  const isCfaReadOnly = cfaInput.readOnly;

  if (isCfaReadOnly) {
    // Se o CFA estava bloqueado, agora fica livre
    cfaInput.readOnly = false;
    euroOutput.readOnly = true;

    // Dica visual: mudar o placeholder ou foco
    cfaInput.focus();
  } else {
    // Se o Euro estava bloqueado, agora fica livre
    cfaInput.readOnly = true;
    euroOutput.readOnly = false;

    euroOutput.focus();
  }

  // 2. Animação das setas (para dar o feedback visual)
  btnSwitch.style.transition = "transform 0.5s";
  // Acumula 180 graus a cada clique para girar sempre
  const currentRotation = btnSwitch.style.transform.replace(/[^0-9]/g, "") || 0;
  const newRotation = parseInt(currentRotation) + 180;
  btnSwitch.style.transform = `rotate(${newRotation}deg)`;
});
