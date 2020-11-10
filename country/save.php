<?php

$countries = $_POST;
$file = fopen("countries.csv", "w+");
foreach ($countries as $key => $value) {
    var_dump($key);
    fwrite($file, $key);  
}
fclose($file);