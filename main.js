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



let bottone = document.getElementById('addMemberButton');
bottone.addEventListener ('click',creaDatiMembri);


let teamContainer = document.querySelector('.team-container');

  for (let i =1; i <team.length; i++){
    teamContainer.innerHTML+= `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${team[i].image}"
        alt="${team[i].name}"
        />
      </div>
      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>
    </div>`
  };


  // Creo funzione per creare dati dei membri

  function creaDatiMembri(){
    let nuovoMembro = {};
    nuovoMembro.name = document.getElementById('name').value;
    nuovoMembro.role = document.getElementById('role').value;
    nuovoMembro.image = document.getElementById('image').value;
    team.push(nuovoMembro);
    creaNuovaCard(nuovoMembro.name,nuovoMembro.role,nuovoMembro.image)
    console.log(team)
  }

  // Creo funzione per creare nuove card

  function creaNuovaCard(name, role, image){
  let nuovaCard = `<div class="team-card">
                    <div class="card-image">
                      <img
                        src="${image}"
                        alt="${name}"
                      />
                    </div>
                    <div class="card-text">
                      <h3>${name}</h3>
                      <p>${role}</p>
                    </div>
                  </div>`;
  document.querySelector('.team-container').innerHTML += nuovaCard;
  }