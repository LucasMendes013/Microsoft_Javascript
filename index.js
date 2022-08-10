const number = 1
function verifica(){
  var input = document.getElementById('numero').value
  try{
    if(input == '') throw ': Informe um valor'
    if(isNaN(input)) throw ': Informe um número'
    input = Number(input)
    if(input < 10) throw ': O número é menor que 10'
    if(input > 20) throw ': O número é maior que 10'

    document.getElementById('msg').innerHTML = 'Tudo correto, você digitou ' + input
  } catch(erro){
    document.getElementById('msg').innerHTML = 'Erro' +erro
  } finally {
    document.getElementById('numero').value = ''
  }
}

