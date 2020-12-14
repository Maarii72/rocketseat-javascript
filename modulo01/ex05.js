var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function candidato(array){
    for (var value of array) {
        console.log('O', value.nome, 'possui as habilidades: ', value.habilidades.join(', '));
    }
}
candidato(usuarios);

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
   