var anosLuz = 10;
var conversao = 9.46 * 1015;
var nome = 'Astronauta';

var distanciaEmMetros = anosLuz * conversao;
distanciaEmMetros = distanciaEmMetros.toFixed(2);

alert('olá, ' + nome + '! ' + anosLuz + ' anos luz são equivalentes a ' + distanciaEmMetros + ' metros');