<?php 
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer();
  $mail->CharSet = "UTF-8";
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('info@site.com', 'Egorov Andrey');
  $mail->addAddress('babai62403@gmail.com');

  $mail->Subject = 'Письмо с формы обратной связи';

  $body = 'Прочтите письмо с сайта (Обратная связь)';

  if(trim(!empty($_POST['name']))) {
    $body.= '<p>Имя: '.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['email']))) {
    $body.= '<p>E-mail: '.$_POST['email'].'</p>';
  }

  if(trim(!empty($_POST['message']))) {
    $body.= '<p>'.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if($mail->send()) {
    $res = 'Соообщение успешно отправлено!';
  }

  else {
    $res = 'Ошибка при отправке формы:(';
  }

  $sendResult = ['message' => $res];

  header('Content-type: application/json');
  echo json_encode($sendResult);

?>
