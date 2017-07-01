$(document).ready(function () {

//    ------------------------------
//    Logar na tela inicial
//    ------------------------------
    $('#frmLogin').submit(
            function () {
                $.ajax({
                    url: "entrar",
                    data: {
                        usuario: $('#usuario').val(),
                        senha: $('#senha').val()
                    }
                })
                .done(function (msg) {
                    var msgErroLogin = $('#msgErroLogin');
                    msgErroLogin.text("Usuário ou senha inválido");
                    msgErroLogin.addClass("msgErro");
                })
                ;

                return false;
            }
    );


//    ------------------------------
//    Recuperar senha
//    ------------------------------
    limparCamposModalSenha = function () {
        $('#msgEnviouSenha').text('');
        $('#email').val('');
    };

    enviaSenhaPorEmail = function () {
        $.ajax({
            url: "enviaSenhaPorEmail",
            data: {
                email: $('#email').val()
            }
        })
        .done(function (msg) {
            var msgEnviouSenha = $('#msgEnviouSenha');
            msgEnviouSenha.text("Uma senha temporária foi enviada ao seu e-mail.");
            msgEnviouSenha.removeClass("msgErro");
            msgEnviouSenha.addClass("msgSucesso");
        })
        .fail(function() {
            var msgEnviouSenha = $('#msgEnviouSenha');
            msgEnviouSenha.text("Erro ao enviar email. Tente novamente.");
            msgEnviouSenha.removeClass("msgSucesso");
            msgEnviouSenha.addClass("msgErro");
          })
        ;

        return false;
    };

    $('#enviarSenha').click(
            function () {
                var email = $("#email").val();

                if ( emailEhValido(email) ) {
                    enviaSenhaPorEmail();

                } else {
                    var msgEnviouSenha = $('#msgEnviouSenha');
                    msgEnviouSenha.text("Digite um e-mail valido");
                    msgEnviouSenha.removeClass("msgSucesso");
                    msgEnviouSenha.addClass("msgErro");
                }
                return false;
            }
    );

    $("#email").keyup(
        function() {
          var msgEnviouSenha = $('#msgEnviouSenha');

          if ( emailEhValido($("#email").val()) ) {
              msgEnviouSenha.text("Email válido");
              msgEnviouSenha.removeClass("msgErro");
              msgEnviouSenha.addClass("msgSucesso");
          } else {
              msgEnviouSenha.text("Email inválido");
              msgEnviouSenha.removeClass("msgSucesso");
              msgEnviouSenha.addClass("msgErro");
          }
        }
    );

});
