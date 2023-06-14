<?php 
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require  __DIR__.'/PHPMailer/src/Exception.php';
  require  __DIR__.'/PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);
  //ADD EMAIL ADDRESS
  $mail->setFrom('fxhfftubq@babai.in.ua', 'Egorov Andrey');
  $mail->addAddress('babai62403@gmail.com');

  $mail->Subject = 'Message from ContactForm Website';

  $body = 'Read the message from the feedback form';

  if(trim(!empty($_POST['name']))) {
    $body.= '<p>Имя: '.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['email']))) {
    $body.= '<p>E-mail: '.$_POST['email'].'</p>';
  }

  if(trim(!empty($_POST['body']))) {
    $body.= '<p>'.$_POST['body'].'</p>';
  }

  $mail->Body = $body;

  if($mail->send()) {
    $res = 'Message sent successfully!';
  }

  else {
    $res = 'Error. Message not sent:(';
  }

  $sendResult = ['message' => $res];

  header('Content-type: application/json');
  echo json_encode($sendResult);

?>