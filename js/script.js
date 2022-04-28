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
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// avvio un ciclo for che scorre tutti gli array
for (let i = 0; i < team.length; i++ ) {
  // -assegnare una variabile per ogni oggetto
  const element = team[i];
  // avvio un ciclo for-in per scorrere le keys all'interno degli oggetti
  for (let key in element) {
    const keyElement = element[key];
    console.log(keyElement);
    // stampare le stesse informazioni su DOM sottoforma di stringhe 
    document.getElementById('milestone2').innerHTML += `<br>${keyElement}`;
  }     
}




// document.getElementById('milestone2').innerHTML = keyElement;

// // PROVA
// let array = ['alex', 'ciao', 'persona'];
// for (let i = 0; i < array.length; i++) {
//   document.getElementById('milestone2').innerHTML = array[0] + array[1] + array[2];
// }
