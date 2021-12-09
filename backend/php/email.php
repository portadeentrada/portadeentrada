<?php
$Nome		= $_POST["name"];	
$Email		= $_POST["email"];	
$Mensagem	= $_POST["fieldtxt"];	

$Vai 		= "Nome: $Nome\n\nE-mail: $Email\n\nMensagem: $Mensagem\n";

require_once("PHPMailer/class.phpmailer.php");

define('GUSER', 'contatoportadentrada@gmail.com');	
define('GPWD', 'portadeentrada2021');		

function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();	
	$mail->SMTPDebug = 1;	
	$mail->SMTPAuth = true;		
	$mail->SMTPSecure = 'tls';	
	$mail->Host = 'smtp.gmail.com';	
	$mail->Port = 587; 
	$mail->Username = GUSER;
	$mail->Password = GPWD;
	$mail->SetFrom($de, $de_nome);
	$mail->Subject = $assunto;
	$mail->Body = $corpo;
	$mail->AddAddress($para);
	if(!$mail->Send()) {
		$error = 'Erro no Envio!'.$mail->ErrorInfo; 
		return false;
	} else {
		$error = header("Location: http://portadentrada.000webhostapp.com/front-end/pags/sucesso.html"); 
		return true;
	} 
}

 if (smtpmailer('contatoportadentrada@gmail.com', 'contatoportadentrada@gmail.com', 'Nome do Enviador', 'Assunto', $Vai)) {

}
if (!empty($error)) echo $error;
?>