$(document).ready(function () {

    var progress = 0;
    var frms = ['#frmAbrirConta_1', '#frmAbrirConta_2', '#frmAbrirConta_3', '#frmAbrirConta_4'];

    function some(nomeFormulario) {
        var formulario = $(nomeFormulario);
        formulario.removeClass("aparece");
        formulario.addClass("some");
    }

    function aparece(nomeForm) {
        var form = $(nomeForm);
        form.removeClass("some");
        form.addClass("aparece");
    }

// avancar
    $('#avancar').click(
            function () {
                //tira o formulario atual
                var atual = frms[progress];
                some(atual);

                progress++;

                //coloca proximo formulario
                var novo = frms[progress];
                aparece(novo);

                //primeiro formulario nao volta para lugar nenhum
                if (progress === 1) {
                    aparece('#voltar');
                }

                //ultimo formulário some avançar e aparece finalizar
                if (progress === 3) {
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
                some(atual);

                progress--;

                //coloca formulario antigo
                var antigo = frms[progress];
                aparece(antigo);

                // primeiro formulario nao volta para lugar nenhum
                if (progress === 0) {
                    some('#voltar');
                }

                //ultimo formulário some avançar e aparece finalizar
                if (progress === 2) {
                    aparece('#avancar');
                    some('#finalizar');
                }
            }
    );

    // commitar no banco as mudanças
    $('#salvar').click(
            function () {
                var dados;
                dados = $("#email").val();
                dados += $("#cep").val();
                dados += $("#ident").val();
                dados += $("#rendimento").val();
                alert('Commitar no Banco de dados :' + dados);
                // chamar ajax 
                $("#msgSalvo").text("dados salvos em "+new Date().toUTCString());
            }
    );

    // commitar no banco as mudanças
    $('#finalizar').click(
            function () {
                alert('Commitar no Banco de dados também');
                // chamar ajax analogo ao botao entrar
            }
    );


});
