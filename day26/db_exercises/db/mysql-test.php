<?php
require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

connect('localhost', 'world', 'root', 'rootroot');

/* $query = 'SELECT * 
        FROM `country` 
        WHERE `population` > 20000000';

$results = select($query, [], 'Country');

$populations = array_map(function($country))

var_dump($results);
 */

/* $query = "SELECT * 
FROM `country` 
WHERE `Code` = 'CZE'";

$results = select_one($query, [], 'Country');
 */
/* $populations = array_map(function($country)) */

/* var_dump($results); */

$region = new Region;
$region->name = 'Central Africa';
$region->insert();

echo 'A new region was inserted with id ' . $region ->id;

$query = "
    SELECT *
    FROM `region`
    WHERE `name` = ?
    ";

    $central_africa =select_one($query, ['Central Africa'], 'Region');

    var_dump($central_africa); 
