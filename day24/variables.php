<?php
/*   echo 'Hello world!';

  $fo = 'lik';
  unset($fo);
  echo $fo;

  var_dump("Hello world");

  var_dump([3,3,5,2,]); */


/* $first_name = 'Petr';
$surname = 'Bisof';

echo "First name: ${first_name} <br>
Surname: ${surname}"; */


/* 2
$year_of_birth = 1986;
$height = 186;

echo "YB: ${year_of_birth} <br>
Surname: ${height}"; */


/* 3
define('SERVER_SOFTWARE', 'Apache');
 
echo ("Mt software is " . SERVER_SOFTWARE); */

/* 4
function greet (){
    echo('Hello world!');
};

greet(); */

/* 4
 function greet ($whom){
    echo("Hello {$whom}!");
};

greet("Prague"); */

/* 5
function greet ($whom)$
    return "Hello {$whom}!";
};

echo(greet("Prague")); */

/* function truncateString (&$string, $size){
    return mb_substr($string, 0, $size);
};

$sentence = "Hello there mhhohohooh";

echo(truncateString($sentence, 10));

echo($sentence); */

/*LOOPS*/

/*1
$time_served = 0;

while ($time_served < 10)
{
    $time_served ++;
    echo("The prisoner has served {$time_served}.");
}; */

/*2
$time_served = 0;

do {
    echo("The prisoner has served {$time_served}.");
    $time_served++;
}
while ($time_served < 10);
 */



/*4
for($i=0; $i<5; $i++){

    echo("The prisoner has {$i} to serve.");

} */


/*5
 for($i=10; $i>0; $i--){

    echo("sentence1 <br>");


       if($i>5){
           echo("The prisoner has {$i} to serve.werfksenfkn");
         };
        }; */

/* Arrays */

$cars_i_want =[];
var_dump($cars_i_want);

$cars_i_want=['Aston Martin','Bugatti','Ferrari','Lamborghini','Maserati','Mercedes','Porsche','Skoda'];

var_dump($cars_i_want);

echo("For myself I would buy {$cars_i_want[1]}");


$cars_i_want[4]='Smart';

echo("For myself I would buy {$cars_i_want[4]}");

foreach ($cars_i_want as $car){
    echo("<ul><li>{$car}</li></ul>");
};

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo("You can have a Porsche <strong> for </strong> just {$car_prices['Porsche 911']}.");


/* The price of Skoda Octavia is 270000 CZK.<br>
The price of Volkswagen Golf is 170000 CZK.<br>
etc. */

foreach ($car_prices as $car => $price){
    echo("<br>{$car} costs {$price}");
};

echo '<h2>continue & break</h2>';

for ($i = 10; $i > 0; $i--) {
    echo "The prisoner has {$i} more years to serve.<br>";

    if ($i > 5) {
        continue;
    }

    echo 'Going to a parole hearing...<br>';

    if ($i == 2) {
        echo 'Paroled!<br>';
        break;
    }


    
}


for ($year = 2019; $year <= 2022; $year++) {

    for ($days_to_christmas = 76; $days_to_christmas > 0; $days_to_christmas--) {
        
        echo "There are still {$days_to_christmas} days to christmas.<br>";


        if ($days_to_christmas == 70) {
            continue;
              echo('sf');
        }

        echo "There are still {$days_to_christmas} days to chricccccccccccccccccccccccccstmas.<br>";

        if ($days_to_christmas == 60) {
            break;
            echo('sf');
        }
      
        if ($days_to_christmas == 72 && $year == 2020) {
            break 2;
        }
    }
}

?>