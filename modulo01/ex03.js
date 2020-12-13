//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    // array.indexOf(elementoDePesquisa, [pontoInicial = 0])
    if (skills.indexOf("Javascript") >= 0) {
         console.log(`Possui a habilidade: `, true);
        
      } else {
        console.log(`Não possui a habilidade: `, false);
      }
   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false
 
   