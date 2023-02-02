let num = document.getElementById('numero')
let lista = document.getElementById('numeros-cadastrados')
let valores = []
onload(num.focus())

function adicionar(){
  if(num.length == 0 || num.value < 1 || num.value > 100){
    //valida se o usuário digitou algum valor no input e se 
    //esse valor está entre 1 e 100.
    alert('[ERRO] campo vazio ou dados inválidos.')
    num.value=''
    num.focus()
  }
  else if (valores.indexOf(num.value) !== -1){
    //verifica se o valor informado já existe
    alert('Número já cadastrado!')
    num.value=''
    num.focus()
  }else if (num.value.match(/\.\d{3,}/)) {
    //verifica se o valor informado possui mais de 2 casas decimais
    alert('Use apenas 2 casas decimais.')
    num.focus()
  }
  else{
    let createOption = document.createElement('option') //cria novo option no select com o valor informado.
    createOption.text=`Número ${num.value} cadastrado`
    valores.push(num.value) //adiciona esse valor à variável: valores
    lista.appendChild(createOption)
    num.focus()
    num.value=''
  }
}
function somaValores(valores) {
  //percorre todos os valores do array e soma-os.
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
      total += +valores[i];
  }
  return total;
}
function finalizar(){
  if (valores.length < 2){
    //verifica se o usuário informou no mínimo 2 valores.
    alert('Cadastre 2 números ou mais antes de finalizar.')
    num.focus()
  }
  else{
    let maior = Math.max.apply(null, valores) //armazena nessa variável o maior valor do array.
    let menor = Math.min.apply(null, valores) //armazena nessa variável o menor valor do array.
    let total = somaValores(valores); //essa variável recebe o valor retornado pela função.
    let texts = [
      `Total de ${valores.length} números cadastrados.`, 
      `O maior número cadastrado foi ${maior}.`, 
      `O menor número cadastrado foi ${menor}.`, 
      `A soma dos números cadastrados é: ${(total).toFixed(2)}`, 
      `A média dos números cadastrados é: ${(total / valores.length).toFixed(2)}`
    ];
    for (let i = 0; i < 5; i++) {
      //cada iteração apresentará em tela 1 item do array texts, do primeiro até o último. 
      //esse loop tem o mesmo numero de iterações em relação a quantidade de parágrafos necessários: 5.
      let para = document.createElement("p");
      let node = document.createTextNode(texts[i]);
      para.appendChild(node);
      res.appendChild(para);
    }
  }
}
function limpar(){
  location.reload()
}

