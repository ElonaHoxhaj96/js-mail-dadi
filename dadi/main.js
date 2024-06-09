// facciamo il gioco dei dadi, dobbiamo far lanciare un dado al giocatore/utente e un dado al computer, quello che ha il numero maggiore vince.

//Definiamo il giocatore 
let player =  Math.floor(Math.random()*7);
console.log(player)

//Definiamo il computer 
computerPlayer = Math.floor(Math.random()*7);
console.log(computerPlayer);
//nominiamo la variabile del risultato
const risultato = document.getElementById('result');

//creiamo le condizioni del gioco
if(player > computerPlayer){
    risultato.innerHTML += ('Hai vintooo!!')
}else{
    risultato.innerHTML += ('Hai perso!!')
}
console.log(risultato);

document.getElementById("giocatore").innerHTML= "il tuo numero è "+ player;
document.getElementById("computer").innerHTML= "il numero del computer è "+ computerPlayer;
