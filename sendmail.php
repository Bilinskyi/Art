<? 
if ($_POST["send"]) { 
  include_once "smsc_api.php"; 
  $phone = $_POST["phone"];

  $r = send_sms(+79780198881, "$phone");

    // $r = array(<id>, <количество sms>, <стоимость>, <баланс>) или array(<id>, -<код ошибки>) 

  if ($r[1] > 0) 
    header('Location:index.html#senks');
  else 
    echo "Произошла ошибка № ", -$r[1]; 
} 
?>