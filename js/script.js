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
    // document.getElementById('milestone2').innerHTML += `<br>${keyElement}`;
  }  
  
  // BONUS 1:
  // trasformare la stringa foto in una immagine effettiva
  // BONUS 2:
  // organizzare i singoli membri in card/schede
  
  createCard(element.image, element.name, element.role);
  function createCard(image, name, role) {

    let container = document.getElementById('team-container');
    container.innerHTML += `<div class="team-card">
                              <div class="card-image">
                                <img src="img/${image}"/>
                              </div>
                              <div class="card-text">
                                <h3>${name}</h3>
                                <p>${role}</p>
                              </div>
                            </div>`;
  }
}


// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

//assegnare a bottone add una var
const addMember = document.getElementById('addMemberButton');

//creare una funzione eventlistener
addMember.addEventListener('click',
  function() {
    //prelevare i dati inseriti dall'input
    let nameUser = document.getElementById('name').value;
    let roleUser = document.getElementById('role').value;
    let imageUser = document.getElementById('image').value;

    createCard(nameUser, roleUser, imageUser);

  })

