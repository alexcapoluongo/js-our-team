const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image:'barbara-ramos-graphic-designer.jpg',
    },
  ];

// MILESTONE 1 & 2:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// avvio un ciclo for che scorre tutti gli array
for (let i = 0; i < team.length; i++ ) {
  // -assegnare una variabile per ogni oggetto
  const element = team[i];
  // avvio un ciclo for-in per scorrere le keys all'interno degli oggetti
  for (let key in element) {
    const keyElement = element[key];
    // stampare le stesse informazioni su DOM sottoforma di stringhe
    //bisogna concatenare con += altrimenti ti stampa sempre l'ultimo e non avviene la concatenazione tra gli elementi 
    document.getElementById('milestone2').innerHTML += `<br>${keyElement}`;
  }  
  
  // BONUS 1:
  // trasformare la stringa foto in una immagine effettiva
  let imageName = element.image;
  let image = document.getElementById('img-container');
  image.innerHTML = `<img src = "img/${imageName}">`;
}


// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
