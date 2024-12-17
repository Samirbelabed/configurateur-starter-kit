const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
let selectedTissu = 'Violet';
let selectedPoche = 'Rouge';
let customText = 'Votre texte ici';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;

window.addEventListener("load", () => {
    console.log("everything's ready !");


    let displayT = document.getElementById("displayTissu");

    let displayP = document.getElementById("displayPoche");

    let Tiss = document.getElementById("tissu");
    let Poch = document.getElementById("optionPoche");


   
   
    let optTx = document.getElementById('textColorOptions');








    let optT = document.getElementById('optionTissuImage');



    optionsTissu.forEach(tissus => {

        

        let TissC = document.createElement('div');
        TissC.classList.add("ColorRound", "tissuRound");
        TissC.style.backgroundColor = `${tissus.code}`;
        Tiss.appendChild(TissC);

        TissC.addEventListener('click', () => {

          

            document.querySelectorAll('.tissuRound').forEach((Ctissu) => {

            Ctissu.classList.remove("selectedColor");

            
         
            
            });

            TissC.classList.add("selectedColor");
            optT.src = `url(${tissus.image})`;


});


     

    
    
    
    
    
    
    console.log(tissus);

    });

    let optP = document.getElementById('optionPocheImage');

    optionsPoche.forEach(poches => {


        let PochC = document.createElement('div');
        PochC.classList.add("ColorRound", "pocheRound");
        PochC.style.backgroundColor = `${poches.code}`;
        Poch.appendChild(PochC);

        PochC.addEventListener('click', () => {




            PochC.classList.add("selectedColor");


            document.querySelectorAll('.pocheRound').forEach((Cpoche) => {

                Cpoche.classList.remove("selectedColor");
                
                });
    
                PochC.classList.add("selectedColor");
                optP.src = `url(${poches.image})`;




        });




        console.log(poches);

    });






    couleurText.forEach(textes => {
     

        let TexteC = document.createElement('div');
        TexteC.classList.add("ColorRound", "texteRound");
        TexteC.style.backgroundColor = `${textes.code}`;
        optTx.appendChild(TexteC);

        TexteC.addEventListener('click', () => {




            document.querySelectorAll('.texteRound').forEach((Ctexte) => {

                Ctexte.classList.remove("selectedColor");
                
                });
    
                TexteC.classList.add("selectedColor");





        });




        console.log(textes);

    });










});
