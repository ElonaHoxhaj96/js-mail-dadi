// creare un array che contenga le mail
const  mailList = ['massimorossi@gmail.com','teresabianchi@gmail.com','gianpierpaolo30@hotmail.it','gianni68@gmail.com','filippo.giani@outlook.com','paolo56@gmail.com'];
//chiedi all'utente di inserire la sua mail
let mailUtente = (prompt("Inserisci la tua mail"))
console.log(mailList);

//verifica che la mail sia presente nella mia lista;
for(let i = 0; i < mailList.length; i++){
    mailUtente = mailList[i];
        //se la mail è in lista dai il benvenuto;
    let textmessage;
    if (mailUtente === 0){
        textmessage = mailUtente + "Benvenuto";
        console.log(textmessage)
        
    }else{ // altrimenti nega l'accesso;
       textmessage = "Accesso negato, la tua mail non è presente nel sistema";
       console.log(textmessage)
    }
   

}
