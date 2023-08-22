// const promessa = new Promise((resolve, reject) => {
//  let condicao = true;
//     if (condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Luiz', idade: 20});
//         resolve ('Funcionou');
//     })
//  } else {
//         reject ('Essa buceta nao funcionou');
//     }

// });

// promessa.then (resolucao => {console.log (resolucao)});

// const promessa1 = new Promise((resolve, reject) => {
//     resolve('Etapa 1');
//   });
  
//   promessa.then(resolucao => {
//     console.log(resolucao); // 'Etapa 1';
//     return 'Etapa 2';
//   }).then(resolucao => {
//     console.log(resolucao) // 'Etapa 2';
//     return 'Etapa 3';
//   }).then(r => r + 4)
//   .then(r => {
//     console.log(r); // Etapa 34
//   });
  

const login = new Promise ((resolve) => {
    setTimeout(() => {
        resolve ('Usuário logado')
    }, 1000)
});


const dados = new Promise ((resolve) => {
    setTimeout(() => {
        resolve ('Dados Carregados')
    }, 1500)
});

const carregouTudo = Promise.all([login, dados])


carregouTudo.then((resolucao) => {
    console.log (resolucao);
})