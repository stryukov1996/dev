<?
if (isset($_COOKIE['login']) AND $_COOKIE['login'] != '') {
    echo 'Добро пожаловать '.$_COOKIE['login'];
} else {
    echo 'Авторизуйтесь';
}