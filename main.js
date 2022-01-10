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


//Creo click al bottone

let bottone = document.getElementById('addMemberButton');
bottone.addEventListener ('click',datiTeam);


//Creo funzione con i dati del Team

function datiTeam(){
  for (let i =0; i <team.length; i++){
    let membriCorrenti = team[i];
    aggiuntaNuoveCard(membriCorrenti);
  }
};


//Creo funzione per aggiungere nuove card al team

function aggiuntaNuoveCard (name,role,image){
  let nuovaCard = `<div class="team-card">
                    <div class="card-image">
                      <img
                        src="img/${image}"
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
