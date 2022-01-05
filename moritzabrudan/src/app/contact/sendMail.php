<?php

if (isset($_POST['email']) && $_POST['email'] != '') {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['Message'];

    $emailTo = "m.abrudan@t-online.de";
    $headers = "From: ".$emailFrom;
    $txt= "Ich habe eine neue Mail von ".$name.".\n\n".$message;


    mail($emailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>