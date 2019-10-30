<?php
include 'list_of_games.php';
include 'Games.php';


/* require_once('celebrity.php'); */

$list_of_games = [];

foreach ($results as $value){
    $games_list = new Games;
    $games_list -> fromArray($value);
    array_push($list_of_games, $games_list);
 }

/* var_dump($list_of_games); */

 header('Content-type: application/json');

echo json_encode($list_of_games);

?>