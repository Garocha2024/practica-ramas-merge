function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }

  function borrarUltimoCaracter () {

    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = valorPatanlla.Substring(0, valorPantalla.length -1);
    document.getElementById('pantalla').value = resultado
    
  }
