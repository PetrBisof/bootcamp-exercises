<?php

include 'data.php';


require_once('celebrity.php');

$celebrities = [];

foreach ($data as $value){
    $new_celebrities = new Celebrity;
    $new_celebrities -> fromArray($value);
    array_push($celebrities, $new_celebrities);
 

}

header('Content-type: application/json');

echo json_encode($celebrities);

?>