<?php
  function currencyConverter($from_Currency,$to_Currency,$amount) {
    $urlPart = urlencode($from_Currency . "_" . $to_Currency);
    // use API from https://free.currencyconverterapi.com/
    $get = file_get_contents("https://free.currencyconverterapi.com/api/v6/convert?apiKey=05658396ca16cd651999&q=$urlPart&compact=y");
    $get = json_decode($get, true); // turn into associative array to access key using string
    $rate = $get[$from_Currency . "_" . $to_Currency]['val']; // access exchange rate
	$converted_amount = number_format($amount*$rate, 2); // round to two decimal places, and with comma for every thousandth
	$data = array( 'rate' => $rate, 'converted_amount' =>$converted_amount, 'from_Currency' => strtoupper($from_Currency), 'to_Currency' => strtoupper($to_Currency));
	return json_encode( $data );	
  }
?> 