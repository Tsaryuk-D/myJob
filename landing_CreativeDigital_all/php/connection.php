<?php

$bdHost = 'localhost';
$bdLogin = 'nkmz';
$bdPass = 'nkmz';
$bdName = 'landing';

$connect = mysqli_connect($bdHost, $bdLogin, $bdPass, $bdName);
if (!$connect) {
    echo mysqli_connect_error();
    die;
}
