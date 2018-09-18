$(document).ready(function(){
    $('#formulario').validate({
        rules:{
            inputNome:{
                required:true,
                maxlength: 100
            },
            inputBairro:{
                required:true,
                maxlength: 100
            },
            inputTelefone:{
                required:true,
               maxlength: 15
            },
            inputCPF:{
                required:true,
                maxlength: 15
            },
            inputEstado:{
                required:true,
                maxlength: 50
            },
            inputNumero:{
                required:true,
                maxlength: 5
            },
            inputComplemento:{
                required:true,
                maxlength: 4
            },
            inputCEP:{
                required:true,
                maxlength: 10
            },
            inputCidade:{
                required:true,
                maxlength: 100
            }

        },
        messages:{
            inputNome:{
                required:"campo é obrigatorio",
                maxlength: "Campo maximo 100 caracteres"
            },
            inputBairro:{
                required:"campo é obrigatorio",
                maxlength: "Campo maximo 100 caracteres"
            },
            inputTelefone:{
                required:"campo é obrigatorio",
               maxlength: "Telefone ex (11)99999-9999"
            },
            inputCPF:{
                required:"campo é obrigatorio",
                maxlength: "999.999.999-99"
            },
            inputEstado:{
                required:"campo é obrigatorio",
                maxlength: "ex: SP"
            },
            inputNumero:{
                required:"campo é obrigatorio",
                maxlength: "ex: 08"
            },
            inputComplemento:{
                required:"campo é obrigatorio",
                maxlength: "ex: B"
            },
            inputCEP:{
                required:"campo é obrigatorio",
                maxlength: "ex: 09403-488"
            },
            inputCidade:{
                required:"campo é obrigatorio",
                maxlength: "ex: São Paulo"
            }
        }
    });
});

$('#inputCPF').mask("000.000.000-00");
$('#inputTelefone').mask("(00) 00000-0000");
$('#inputNumero').mask("0000");
$('#inputCEP').mask("00000-000");