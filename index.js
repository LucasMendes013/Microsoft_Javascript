const number = 1
function verifica(){
  var input = document.getElementById('numero').value
  try{  //Execute todas as vezes
    if(input == '') throw ': Informe um valor' //Throw é como um 'faça', que cabe dentro do try
    if(isNaN(input)) throw ': Informe um número'
    input = Number(input)
    if(input < 10) throw ': O número é menor que 10'
    if(input > 20) throw ': O número é maior que 10'

    document.getElementById('msg').innerHTML = 'Tudo correto, você digitou ' + input
  } catch(erro){ //Caso o acima não tenha algum erro
    document.getElementById('msg').innerHTML = 'Erro' +erro
  } finally { //Mesmo que já tenha sido executado e aparecido o erro, isso ocorrerá
    document.getElementById('numero').value = ''
  }
}

