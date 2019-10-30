<?php

/* echo('lik mich');

$inches = 12;

function inchesToCentimeters($inches) {
return $inches * 2.54;
};


echo( inchesToCentimeters($inches));

$celsius = 100;

function celsiusToFahrenheit($celsius) {
    return (9/5)*$celsius + 32;
}
*/

/* $temperature = 36.9;


function isHealthy(&$temperature, $cOrF) {
    if($cOrF == 'f'){
        ($temperature - 32) * 0.5556;
    }

    if ( $temperature < 37 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

 var_dump(isHealthy($temperature, 'f')); */

/*  $number = 40;

 $evenOrOdd = ($number % 2 == 0 ? 'even' : 'odd');

 echo($evenOrOdd); */

/* $weekday = 'Monday';

function sayWeekday($day) {
return "today is" . $day .".";
}

echo(sayWeekday($weekday)); */

/* $year_of_birth = 1986;

function sayBirthday($year_of_birth) {
    $birthday =  date('Y') - $year_of_birth;
    echo("this is year" . date('Y') . "and you will celebrate yours" . $birthday . ".");
    }

    sayBirthday($year_of_birth); */

/*     function assesHeight($height) {
    if ($height > 160){
        return 'tall';
    } 
    else {
        return 'small';
    }
        }

echo(assesHeight(159)); */

/* function getLanguageUsage($input){
 $languageToLoweCase = strtolower($input);
switch ($languageToLoweCase)
{
case 'php':
case 'python':
case 'ruby':
echo 'serverside';
break;

case 'javascript':
echo 'clientside';
break;

default:
echo 'i dont know';
}
}

echo(getLanguageUsage('Ruby')); */

/* Write a function getLanguageUsage that will accept one argument:

a string with a lowercase name of a programming language
Inside the function use the switch control structure on the argument to do one of the following things:

return the string 'serverside' if the value is 'php', 'python' or 'ruby'
return the string 'clientside' if the value is 'javascript'
return the string 'i don\'t know' for anything else
Call the function using some of these values: 'php', 'python', 'ruby', 'javascript', 'node'. */

class fotbalista
{
    public $first_name = null;
    public $second_name =null;
    public $teams = [];

    function set_first_name($name) {
        $this->first_name = $name;
      }

      function set_second_name($name) {
        $this->second_name = $name;
      }

      function set_teams($name) {
        $this->teams = $name;
      }

    }

$jarosik = new fotbalista();

$jarosik->set_first_name('Pavel');

$jarosik->set_second_name('kOHUT');

$jarosik->set_teams(['Madrid', 'Barca']);

var_dump($jarosik);


?>