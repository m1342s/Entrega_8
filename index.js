const form = document.getElementById("form-id");
const inputNome = document.getElementById("nome");
const inputTel = document.getElementById("tel");

let linhas=''

let nomes=[]
let tel=[]

form.addEventListener("submit", function (e) {
  e.preventDefault();
   addNomeTel()
   atualizaTabela()
});

function addNomeTel() {
  const inputNome = document.getElementById("nome");
  const inputTel = document.getElementById("tel");

  nomes.push(inputNome.value)
  tel.push(inputTel.value)


  let linha='<tr>'
  linha+=`<td>${inputNome.value}</td>`
  linha+=`<td>${inputTel.value}</td>`
  linha+='</tr>'
  linhas+=linha

  inputNome.value = ''
  inputTel.value = ''
}

function atualizaTabela() {
    const tbody=document.querySelector('tbody')
    tbody.innerHTML=linhas
}