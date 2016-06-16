<?php
if($_POST){
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
    mail("info@bamos183.de", "Neue Nachricht von " .$email, $message);
}
?>
