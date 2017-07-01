$(document).ready(function () {

    $('#frmCadastro').submit(
            function () {
                var msgCadastro = $('#msgCadastro');

                var email = $('#email');
                if( $('#email').val().length > 0 && emailEhValido(email) ){
                    $('#cpf').val("E-mail válido.");
                }else{
                    $('#cpf').val("E-mail inválido.");
                }

                var jqxhr = $.ajax({
                    url: "submitCadastro",
                    data: {nomeCompleto: $('#nomeCompleto').val(),
                        cpf: $('#cpf').val(),
                        rg: $('#rg').val(),
                        email: $('#email').val(),
                        telefone: $('#telefone').val()}
                })
                        .done(function (msg) {
                            if (msg == "true") {
                                msgCadastro.text("Uma senha temporária foi enviada ao seu e-mail.");
                                msgCadastro.addClass("msgSucesso");
                            } else {
                                msgCadastro.text("Erro de cadastro.");
                                msgCadastro.addClass("msgErro");
                            }

                        })

//                        .fail(function (msg) {
//                            msgCadastro.text("Erro de cadastro.");
//                            msgCadastro.addClass("msgErro");
//                        })

                        .always(function (msg) {
                            function redireciona() {
                                location.href = "/";
                            }

                            setTimeout(redireciona, 3000);
                        })
                        ;

                return false;
            }
    );

});
