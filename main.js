// creare un array che contenga le mail
const  mailList = ['massimorossi@gmail.com','teresabianchi@gmail.com','gianpierpaolo30@hotmail.it','gianni68@gmail.com','filippo.giani@outlook.com',' paolo56@gmail.com'];
console.log(mailList.length)
//chiedi all'utente di inserire la sua mail
let mailUtente = (parseInt(prompt("Inserisci la tua mail")));

//verifica che la mail sia presente nella mia lista;
for(let i = 0; i < mailList; i++){
    //se la mail è in lista dai il benvenuto;
    let textmessage;
    console.log(textmessage)
    if ( mailUtente === mailList){
        textmessage = "Benvenuto";
    }else{ // altrimenti nega l'accesso;
       textmessage = "Accesso negato, la tua mail non è presente nel sistema";
    }

}
    

// chiedere all'utente di inserire la sua

// validare o meno la mail 