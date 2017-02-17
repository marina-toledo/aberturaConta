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
    limparCampos = function () {
        $('#msgEnviouSenha').text('');
        $('#email').val('');
    };

    emailEhValido = function (email) {
        // TODO : http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /\S+@\S+\.\S+/; //anystring@anystring.anystring
        return re.test(email);
        return true;
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

            if(msg == 'true'){
                msgEnviouSenha.text("Uma senha temporária foi enviada ao seu e-mail.");
                msgEnviouSenha.removeClass("msgErro");
                msgEnviouSenha.addClass("msgSucesso");''
            }else{
                msgEnviouSenha.text("Erro ao enviar email. Tente novamente.");
                msgEnviouSenha.removeClass("msgSucesso");
                msgEnviouSenha.addClass("msgErro");
            }
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

});
