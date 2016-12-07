<?php

require_once"AccesoDatos.php";

class Usuario
{
	public $nombre;
	public $mail;
	public $pass;
	public $tipo;

	// protected static $userMod;

	// public static function initUM($value) { //echo "valor".$value; 
	// 										self::$userMod = $value; }

	// public static function getUM() { return self::$userMod; }


	// public static function InsertarUsuario($user,$pass,$tipo)
	// {
	// 	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 	//$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (:user,pass,tipo)values(:user,:pass,:tipo)");
	// 	$consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO `usuarios`(`user`, `pass`, `tipo`) VALUES (:user,:pass,:tipo)");

	// 	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarUsuario (:user,:pass,:tipo)");
	// 	$consulta->bindValue(':user',$user, PDO::PARAM_STR);
	// 	$consulta->bindValue(':pass', $pass, PDO::PARAM_STR);
	// 	$consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
	// 	$consulta->execute();		
	// 	return $objetoAccesoDato->RetornarUltimoIdInsertado();
					
	// }

	//   public static function ModificarUsuario($user,$pass,$tipo)
	//  {
	// 			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 			//$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE 'autos' set estado=:estado where patente=:patente");
	// 			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `usuarios` SET `pass`=:pass, `tipo`=:tipo  where `user`=:user");
	// 			$consulta->bindValue(':user',$user, PDO::PARAM_INT);
	// 			$consulta->bindValue(':pass',$pass, PDO::PARAM_INT);
	// 			$consulta->bindValue(':tipo',$tipo, PDO::PARAM_INT);
	// 			$consulta->execute();
	// 			//return $objetoAccesoDato->RetornarUltimoIdInsertado();
	//  }

	//   public static function BorrarUsuario($user)
	//  {
	// 			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 			$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM `usuarios` WHERE user =:user");
	// 			$consulta->bindValue(':user', $user, PDO::PARAM_INT);
	// 			$consulta->execute();		
	// 			//return $objetoAccesoDato->RetornarUltimoIdInsertado();
	//  }


	public static function TraerUnUsuario($mail,$pass) 
	{	

		$persona = new Usuario();
		
		$a = fopen("usuarios.txt", "r");
		
		while(!feof($a)){
			$arr = explode("-", fgets($a));

			if(count($arr) > 1){
				if($arr[1] == $mail && $arr[2] == $pass){
					$usuario->mail($arr[1]);
					$usuario->SetDni($arr[2]);
					break;
				}
			}
		}
		fclose($a);
		
		return $usuario;		
	}

// 		public static function TraerTodosLosUsuarios()
// 	{
// 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
// 		//$consulta=$objetoAccesoDato->RetornarConsulta("select patente, marca,color,estado from autos");
// 		//$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM `autos`");
// 		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM `usuarios`");
// 		$consulta->execute();
// 		//var_dump($consulta->fetchall(PDO::FETCH_CLASS,"Auto"));
// 		return $consulta->fetchall(PDO::FETCH_CLASS,"usuario");
// 	}


 	 }

?>