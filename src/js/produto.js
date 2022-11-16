$('#btn-submit').click(function(){
    const form = $('#form-produto')
    const prefix = "http://127.0.0.1:8000/"

    $.ajax({
        url: prefix + "api/product",
        method: 'POST',
        data: form.serialize(),
        beforeSend: function(){
            $('#spin').show()
        },
        success: function(result){
            preencheTabela(result)
        },
        error: (error) => {

        },
        complete: function(result){
            $('#spin').hide()
        }
    });
});

$('#form-produto').submit(function(e){
    e.preventDefault()
    const form = document.getElementById('form-produto')
    const prefix = "http://127.0.0.1:8000/"

    let formData = new FormData(form)

    $.ajax({
        url: prefix + "api/product",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function(){
            $('#spin').show()
        },
        success: function(result){
            preencheTabela(result)
        },
        error: (error) => {

        },
        complete: function(result){
            $('#spin').hide()
        }
    });
    return false
})