//Gerar Senhas Aleatórias

//Obter os elementos

const sliderElement = document.querySelector('.password-generator__slider');
const buttonElement = document.querySelector('.password-generator__button');
const sizePassword = document.querySelector('.password-generator__size');
const password = document.querySelector('.password-generator__output');
const containerPassword = document.querySelector('.password-generator__result');
const welcomeElement = document.querySelector('.password-generator__welcome');
const datatimeElement = document.querySelector('.password-generator__datatime');

const possibilidades = {
    Letras_mi: "abcdefghijklmnopqrstuvwxyz",
    Letras_ma: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Numeros: "0123456789",
    Especiais: "!@#$%&*"
};


let novaSenha = '';

let historicoSenhas= [];


//Função que exibe a data e hora

const get_Saudacao = () => {
    const hora = new Date().getHours();
    if (hora =>5 && hora<12) return 'Bom Dia';
    if (hora =>12 && hora<18) return 'Boa Tarde ';
    return 'Boa Noite';
}


//Função que formata a data e a hora

const formatarDataHora = () =>{
    const agora = new Date();
    const diasSemana= ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
    
    const dia = agora.getDate().toString().padStart(2,0);
    const mes = (agora.getMonth()+1).toString().padStart(2,0);
    const ano = agora.getFullYear();
    
    const diaSemana = diasSemana[agora.getDay()];
    
    const hora = agora.getHours().toString().padStart(2,0);
    const minutos = agora.getMinutes().toString().padStart(2,0);
    const segundos = agora.getSeconds().toString().padStart(2,0);

    return `${diaSemana} ${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const atualizaHeader = () => {
    welcomeElement.textContent = `${getSaudacao()}!`;
    datatimeElement.textContent = formatarDataHora();

};
setInterval(atualizaHeader, 1000);

atualizaHeader();

sizePassword.textContent = sliderElement.value;
sliderElement.addEventListener('input', (e) => {sizePassword.textContent = e.target.value;});