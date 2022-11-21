function apiAjax(url, data = {}, method = 'POST', token, refresh = false) {
    let response = new Array();
    if (refresh) {
        const responseRevalidarToken = revalidarToken(token);
        if (responseRevalidarToken.code) {
            response = responseRevalidarToken
            toastr.error(`Erro ao revalidar Token`);
            return response;
        }
    }
    $.ajax({
        type: method,
        async: false,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': "application/json",
            'Authorization': "Bearer " + token,
        },
        data: data,
        url: url,
        success: function (resposta) {
            response = resposta;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown, error) {
            response = {
                status: textStatus,
                msg: XMLHttpRequest.responseJSON,
                code: XMLHttpRequest.status,
            };
            if (XMLHttpRequest.status === 401) {
                window.location.href = './php/logout.php'
            } else if (XMLHttpRequest.status === 10101) {
                window.location.href = './php/logout.php';
            } else if (XMLHttpRequest.status === 403) {
                if (response.msg.error != 'Usuário e/ou senha inválido') {
                    window.location.href = 'index.php?pag=403';
                }
            } else if (XMLHttpRequest.status === 404) {
                if (response.msg.error) {
                    if (!response.msg.code == '30514') {
                        toastr.error(response.msg.error);
                    }
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Atenção!',
                        text: 'Acesso negado!',
                        showConfirmButton: false,
                        timer: 2500
                    }).then((result) => {
                        if (result.dismiss) {
                            /* window.location.href = 'index.php?pag=404'; */
                        }
                    })
                }
            }
        }
    })
    return response;
}

function revalidarToken(token) {
    let hostApi = $('#configServidor').val();
    let response = new Array();
    let url = location.protocol + '//' + hostApi + `/api/acesso/refresh`;
    $.ajax({
        type: 'POST',
        async: false,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': "application/json",
            'Authorization': "Bearer " + token,
        },
        url: url,
        success: function (resposta) {
            response = resposta;
            document.cookie = document.cookie.trim();
            document.cookie = 'token=' + resposta.token;
            let token = document.cookie.split(';').find(indice => {
                return indice.trim().startsWith('token=')
            })
            if(!token){
                token = document.cookie.split(';').find(indice => {
                    return indice.startsWith(' token=')
                })
            }
            token = token.split('=');
            $('#configToken').val(token[1])
        },
        error: function (XMLHttpRequest, textStatus, errorThrown, error) {
            window.location.href = './php/logout.php'
        }
    })
    return response;
}

function getLogin(){
    const valores = localStorage.getItem('food-front')
    return JSON.parse(valores)
}