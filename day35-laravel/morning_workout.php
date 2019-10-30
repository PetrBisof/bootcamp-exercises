<?php 
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(5);
 
    echoArray($data);
 
    //    ... here comes your sorting code
     for ($i = 0; $i < 5; $i++){
        $tmp = $data[0];
        if ($tmp > $data[$i]){
            $data[$i-1] = $data[$i];
            $data[$i] = $tmp;
            $tmp = $data[$i];
        }
    } 
 
    echoArray($data);
    var_dump($data);
?>


