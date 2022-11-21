<?php

require_once '../../config.php';

$token = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);
$login = filter_input(INPUT_POST, 'login', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);

if (!empty($token) || !empty($login) || !empty($email) || !empty($name)) {
    $_SESSION['token'] = $token;
    $_SESSION['login'] = $login;
    $_SESSION['email'] = $email;
    $_SESSION['name'] = $name;

    echo json_encode(['status' => 'success']);
}else{
    $result['status'] = "Error";
    echo json_encode($result);
}