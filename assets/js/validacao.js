function ValidarLogin() {
    if ($("#email").val().trim() == '') {
        alert('Preencher o campo EMAIL');
        $('#email').focus;
        return false;
    }

    if ($('senha').val().trim() == '') {
        alert('Preencher o campo SENHA');
        $('#senha').focus;
        return false;
    }
}

function ValidarCadastro() {
    if ($("#nome").val().trim() == '') {
        alert('Preencher campo NOME');
        $('#nome').focus;
        return false;
    }

    if ($("#email").val().trim() == '') {
        alert('Preencher campo EMAIL');
        $('#email').focus;
        return false;
    }

    if ($("#senha").val().trim() == '') {
        alert('Preencher campo SENHA');
        $('#senha').focus;
        return false;
    }

    if ($("#senha").val().trim().length < 6) {
        alert('A senha deverá conter no mínimo 6 caracteres');
        $('#repSenha').focus;
        return false;
    }
    
    if ($("#senha").val().trim() != $("$repSenha").val().trim()) {
        alert('As senhas devem ser iguais');
        $('#repSenha').focus;
        return false;
    }
}

function ValidarMeusDados() {
    var nome = document.getElementById("nome").value;
    var email = $("#email").val();

    if (nome.trim() == '') {
        alert("Preencher o campo NOME");
        $("#nome").focus();
        return false;
    }
    if (email.trim() == '') {
        alert("Preencher o campo EMAIL");
        $("#email").focus();
        return false;
    }
}

function ValidarCategoria() {
    if ($("#nomecategoria").val().trim() == '') {
        alert("Preencher o campo NOME DA CATEGORIA");
        $("#nomecategoria").focus();
        return false;
    }
}

function ValidarEmpresa() {
    if ($("#nomeempresa").val().trim() == '') {
        alert("Preencher o campo NOME DA EMPRESA");
        $("#nomeempresa").focus();
        return false;
    }
}

function ValidarConta() {
    if ($("#banco").val().trim() == '') {
        alert("Preencher o campo NOME DA BANCO");
        $("#banco").focus();
        return false;
    }

    if ($("#agencia").val().trim() == '') {
        alert("Preencher o campo AGENCIA");
        $("#agencia").focus();
        return false;
    }

    if ($("#numero").val().trim() == '') {
        alert("Preencher o campo NUMERO DA CONTA");
        $("#numero").focus();
        return false;
    }

    if ($("#saldo").val().trim() == '') {
        alert("Preencher o campo SALDO DA CONTA");
        $("#saldo").focus();
        return false;
    }
}

function RealizarMovimento() {
    if ($("#tipo").val() == '') {
        alert('Selecione o TIPO');
        $("#tipo").focus();
        return false;
    }

    if ($("#data").val().trim() == '') {
        alert('Preencher o campo DATA');
        $("#data").focus();
        return false;
    }

    if ($("#valor").val().trim == '') {
        alert('Preencher o campo VALOR');
        $("#valor").focus();
        return false;
    }

    if ($("#categoria").val() == '') {
        alert('Selecione a CATEGORIA');
        $("#categoria").focus();
        return false;
    }

    if ($("#empresa").val() == '') {
        alert('Selecione a EMPRESA');
        $("#empresa").focus();
        return false;
    }

    if ($("#conta").val() == '') {
        alert('Selecione a CONTA');
        $("#conta").focus();
        return false;
    }
}

function ValidarConsultaPeriodo() {
    if ($("#tipoMov").val == '') {
        alert('Selecione um Tipo de Movimento');
        $('#tipoMov').focus;
        return false;
    }

    if ($("#dtInicio").val() == '') {
        alert('Preencher o campo DATA INÍCIO');
        $('#dtInicio').focus;
        return false;
    }

    if ($("#dtFinal").val() == '') {
        alert('Preencher o campo DATA FINAL');
        $('#dtFinal').focus;
        return false;
    }
}