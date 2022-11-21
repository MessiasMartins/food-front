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

    if (result.status === "success"){
        const config = {
            name: result.user.name,
            login: result.user.login,
            email: result.user.email,
            token: result.authorisation.token,
        }

        localStorage.setItem('food-front', JSON.stringify(config))

        const urlPHP = "http://localhost/food-front/src/php/login.php"

        const resultPHP = JSON.parse(apiAjax(urlPHP, config, 'POST'))

        if (resultPHP.status === 'success'){
            window.location.href = "./index.php";
        }else{
            ////////////////error
        }
    }else{
        //////////erro
    }
})