<?php

require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

if(isset($_GET['orderby']) && $_GET['orderby']=='name')
{
    $query = 'SELECT * 
    FROM `games` 
    ORDER BY `name`
    '; 
}

else if(isset($_GET['orderby']) && $_GET['orderby']=='name' && isset($_GET['way']) && $_GET['way']=='asc')
{
    $query = 'SELECT * 
    FROM `games` 
    ORDER BY `name`
    '; 
}

else if(isset($_GET['orderby']) && $_GET['orderby']=='name' && isset($_GET['way']) && $_GET['way']=='desc')
{
    $query = 'SELECT * 
    FROM `games` 
    ORDER BY `name`
    DESC
    '; 
}
/* else if(isset($_GET['orderby']) && $_GET['orderby']=='name')
{
    $query = 'SELECT * 
    FROM `games` 
    ORDER BY `name`
    '; 
}  */
else 
{  
    $query = 'SELECT * 
    FROM `games` 
    ';
}

$results = select($query, [], 'Games');


/* 
var_dump($_GET);
 */

/* require_once 'DB.php';
require_once 'DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

$query = 'SELECT * 
        FROM `games` 
        ';
$results = select($query, [], 'Games'); */



?>