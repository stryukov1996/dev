<?
//Чтение из файла
// $f = fopen('test.txt', 'r'); // $f - дескриптор файла
// while (!feof($f)) {
//     echo fgets($f).'<br>';
// }
// fclose($f);

// Ajax Unit
// $a = $_POST['num1'];
// $b = $_POST['num2'];
// echo $a + $b;
// $a = $_GET['a'];
// echo $a;

// Логирование + в файле login.php
// $login = $_POST['login'];
// $pass = $_POST['pass'];
// $login = trim($login);
// $pass = trim($pass);
// if ($login == '' OR $pass == '') {
//     setcookie('login', '', time()-3600);
//     echo 0;
// } elseif ($login == 'ivan' OR $pass == '123') {
//     setcookie('login', 'ivan', time()+3600);
//     echo 1;
// } else {
//     setcookie('login', '', time()-3600);
// }