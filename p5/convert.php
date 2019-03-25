<?php 
include_once("functions.php");

if(isset($_POST['convert'])) {
  $from_currency = trim($_POST['from_currency']);
  $to_currency = trim($_POST['to_currency']);
  $amount = trim($_POST['amount']);	
  // input validation
  if (is_numeric($amount))
    $amount += 0;
  else{ // input is not a number
    $data = array('error' => 2);
    echo json_encode( $data );	
    exit;
  }
  if ($amount < 0){ // input number is negative
    $data = array('error' => 3);
    echo json_encode( $data );	
    exit;
  }

  if($from_currency == $to_currency) {
      $data = array('error' => 1);
      echo json_encode( $data );	
      exit;
  }
  $converted_currency=currencyConverter($from_currency, $to_currency, $amount);
  // Print outout
  echo $converted_currency;
}
?>