const img = document.getElementById('img');
const buttons = document.getElementById('botoes')

const redButton = document.getElementById('vermelho')
const yellowButton = document.getElementById('amarelo')
const greenButton = document.getElementById('verde')
const trafficLight = document.getElementById('automatico')

const turnRed = () =>{
    img.src='/ProjetoSemaforo/imagens/semaforoVermelho.jpg'
}
const turnYellow = () =>{
    img.src='/ProjetoSemaforo/imagens/semaforoAmarelo.jpg'
}
const turnGreen = () =>{
    img.src='/ProjetoSemaforo/imagens/semaforoVerde.jpg'
}

redButton.addEventListener('click', turnRed)
yellowButton.addEventListener('click', turnYellow)
greenButton.addEventListener('click', turnGreen)