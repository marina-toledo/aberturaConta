$(document).ready(function() {

  /////////////////////////////////////////////////
// index.html
/////////////////////////////////////////////////
  
  // logar na tela inicial
  $('#frmLogin').submit( 
    function () {
        var $body = $('body');
       
        var usuario = $('#usuario').val();
        var senha = $('#senha').val();
        var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='
                          + usuario + ', '+ senha;
        
        $body.append('<img class="bgimg" src="'+ streetviewURL +'">');

        return false;
    }
   );

   //    // logar
   //  $('#entrar').click( 
   //    function () {
        
   //        if(true){ // mudar para validar em backend o login
   //          $.get("abrir-conta.html");// ----> resolver com back end
   //        }else{ // fail
   //          var msgErroLogin = $('#msgErroLogin');
   //          msgErroLogin.text("Usuário ou senha inválido");
   //          msgErroLogin.addClass("msgErro");
   //        }
   //        return false;
   //    }
   // );


    // recuperar senha
    $('#enviarSenha').click( 
      function () {
        var msgEnviouSenha = $('#msgEnviouSenha');
          if(true){ // mudar para validar sucesso
            msgEnviouSenha.text("Uma senha temporária foi enviada ao seu e-mail.");
            msgEnviouSenha.addClass("msgSucesso");
          }else{ // fail
            msgEnviouSenha.text("Erro");
            msgEnviouSenha.addClass("msgErro");
          }
          return false;
      }
   );

/////////////////////////////////////////////////
// cadastro.html
/////////////////////////////////////////////////

    // cadastro
    $('#frmCadastro').submit( 
      function () {
        var msgCadastro = $('#msgCadastro');
          if(true){ // mudar para validar sucesso
            msgCadastro.text("Uma senha temporária foi enviada ao seu e-mail.");
            msgCadastro.addClass("msgSucesso");
          }else{ // fail
            msgCadastro.text("Erro");
            msgCadastro.addClass("msgErro");
          }
          return false;
      }
   );

/////////////////////////////////////////////////
// abrir-conta.html
/////////////////////////////////////////////////

var progress = 0;
var frms = ['#frmAbrirConta_1', '#frmAbrirConta_2', '#frmAbrirConta_3', '#frmAbrirConta_4'];

  function some(nomeFormulario){
    var formulario = $(nomeFormulario);
    formulario.removeClass("aparece");
    formulario.addClass("some");
  } 

  function aparece(nomeForm){
    var form = $(nomeForm);
    form.removeClass("some");
    form.addClass("aparece");
  } 

// avancar
    $('#avancar').click( 
      function () {
        //tira o formulario atual
        var atual = frms[progress];
        some( atual );

        progress++;

        //coloca proximo formulario
        var novo = frms[progress];
        aparece( novo );

        //primeiro formulario nao volta para lugar nenhum
        if(progress==1){
          aparece('#voltar');
        }

        //ultimo formulário some avançar e aparece finalizar
        if(progress==3){
          some('#avancar');
          aparece('#finalizar');
        }
      }
   );

    // voltar
    $('#voltar').click( 
      function () {
        //tira o formulario atual
        var atual = frms[progress];
        some( atual );

        progress--;

        //coloca formulario antigo
        var antigo = frms[progress];
        aparece( antigo );

        // primeiro formulario nao volta para lugar nenhum
        if(progress==0){
          some('#voltar');
        }

        //ultimo formulário some avançar e aparece finalizar
        if(progress==2){
          aparece('#avancar');
          some('#finalizar');
        }
      }
   );

    // commitar no banco as mudanças
    $('#salvar').click( 
      function () {
        alert('Commitar no Banco de dados');
      }
   );

    // commitar no banco as mudanças
    $('#finalizar').click( 
      function () {
        alert('Commitar no Banco de dados também');
      }
   );


});
