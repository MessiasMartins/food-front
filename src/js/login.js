$('#btn-login').click(function(){
    const form_login = $('#form-login')

    const email = $('#email').val()
    const pass = $('#password').val()

    const data = {
        email: email,
        password: pass
    }

    const url = "http://127.0.0.1:8000/api/login"

    const result = apiAjax(url, data, 'POST')

    console.log(result)
})