//CREO UN CICLO DA 1 A 100
//IMPOSTO UNA STRUTTURA DI CONTROLLO IF CON DOPPIA CONIDZIONE (se TRUE stampo "FIZZBUXZZ+i")
//IMPOSTO UN ELSE IF CON SINGOLA CONDIZIONE (se TRUE stampo "BUZZ+i")
//IMPOSTO ULTERIORE ELSE IF CON SINGOLA CONDIZIONE (se TRUE stampo "FIZZ+i")
//IMPOSTO ELSE FINALE (SE )NESSUNA DELLE CONDIZIONI PRECEDENTI E' TRUE - STAMPO solo "i")
for (let i = 1; i <= 100; i++) {
  if (((i) % 3 === 0) && ((i) % 5 === 0)) {
    console.log((i)+' FIZZBUZZ');
  } else if ((i) % 5 === 0) {
    console.log((i)+' BUZZ');
  } else if ((i) % 3 === 0) {
    console.log((i)+' FIZZ');
  } else console.log(i);
}
