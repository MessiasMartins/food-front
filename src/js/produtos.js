//$(document).ready(function () {

    const prefix = "http://127.0.0.1:8000/"

    function preencheTabela(result){

        result.forEach((row) => {

            $('#tabela-produto tbody').append(`<tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.price}</td>
            <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Excluir</button>
            </td>
            </tr>`)
        })
    }
//})

function carregarTabela(){
    const url = $('#configServidor').val()+"product";
    const dados = apiAjax(url, [], 'GET', $('#configToken').val());

    if(dados){
        preencheTabela(dados)
    }

    console.log(dados);

//    $.ajax({
//        url: prefix + "api/product",
//       beforeSend: function(){
//            $('#spin').show()
//        },
//        success: function(result){
//            preencheTabela(result)
//        },
//        error: (error) => {

//       },
//        complete: function(result){
//            $('#spin').hide()
//        }
//    });
}