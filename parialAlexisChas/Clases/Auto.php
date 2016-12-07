<?php

require_once"AccesoDatos.php";
require_once"Factura.php";

 class Celular
{
	public $marca;
	public $modelo;
	public $fecha;
	public $so;
	public $sim;
	public $liberado;



 //  	public function GetPatente()
	// {
	// 	return $this->patente;
	// }

 //  	public function GetMarca()
	// {
	// 	return $this->marca;
	// }

 //  	public function GetColor()
	// {
	// 	return $this->color;
	// }

 //  	public function GetEstado()
	// {
	// 	return $this->estado;
	// }

	// public function __construct($marca,$modelo,$fecha,$sim,$liberado,$so)
	// {
	// 	$this->modelo = $marca;
	// 	$this->marca =  $modelo;
	// 	$this->fecha = $fecha;
	// 	$this->so = $so;
	// 	$this->sim = $sim;
	// 	$this->liberado = $liberado;
	// }
public function __construct()
	{

	}
	// public static function BorrarAuto($patente)
	//  {

	// 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	// 		$consulta =$objetoAccesoDato->RetornarConsulta("
	// 			delete 
	//			from autos 				
	// 			WHERE patente=:patente");	
	// 			$consulta->bindValue(':patente',$patente, PDO::PARAM_INT);		
	// 			$consulta->execute();
	// 			//return $consulta->rowCount();

	//  }
 
		
  	public function ToString()
	{
	  	return $this->marca."-".$this->modelo."-".$this->fecha."-".$this->so."-".$this->sim."-".$this->liberado;
	}

	public static function Borrar($modelo)
	{	
		$arrCelulares = array();
		
		$a = fopen("celulares.txt", "r");
		
		while(!feof($a)){
		
			$arr = explode("-", fgets($a));

			if(count($arr) > 1){
				if((int)$arr[0] == $modelo){
					continue;
				
				$celular = new Celular();
				$celular->modelo = $arr[0];
				$celular->marca =$arr[1];
				$celular->fecha = $arr[2];
				$celular->so = $arr[3];
				$celular->sim = $arr[4];
				$celular->liberado = $arr[5];
				
				array_push($arrCelulares, $celular);
				}
			}
		}
		fclose($a);
		
		$a = fopen("celulares.txt", "w");
		fclose($a);
		
		foreach($arrCelulares AS $p){
			$p->Insertar();
		}
		
	}
	 public function InsertarCelular($marca,$modelo,$fecha,$so,$sim,$liberado)
	 //public function InsertarCelular()
	 {
		$a = fopen("celulares.txt", "a");
		$linea = $marca."-".$modelo."-".$fecha."-".$so."-".$sim."-".$liberado;
		fwrite($a, $linea . "\r\n");
		
		fclose($a);
	 }

	 //  public static function DespacharAuto($patente)
	 // {			
		// 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		// 		//$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE 'autos' set estado=:estado where patente=:patente");
		// 		$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `autos` SET `estado`=:estado where patente=:patente");

		// 		$consulta->bindValue(':estado','E', PDO::PARAM_INT);
		// 		$consulta->bindValue(':patente',$patente, PDO::PARAM_INT);
		// 		$consulta->execute();		
		// 		//return $objetoAccesoDato->RetornarUltimoIdInsertado();
		// 		Factura::Facturar($patente);
	 // }

	  public static function ModificarAuto($modelo)
	 {
		$arrCelulares = array();
		
		$a = fopen("celulares.txt", "r");
		
		while(!feof($a)){
		
			$arr = explode("-", fgets($a));

			if(count($arr) > 1){
				if((int)$arr[0] == $p->modelo){
					$persona = $p;
				}
				else{

					$celular = new Celular();
					$celular->modelo = $arr[0];
					$celular->marca =$arr[1];
					$celular->fecha = $arr[2];
					$celular->so = $arr[3];
					$celular->sim = $arr[4];
					$celular->liberado = $arr[5];
				}
				array_push($arrCelulares, $celular);
			}
		}
		fclose($a);
		
		$a = fopen("celulares.txt", "w");
		fclose($a);
		
		foreach($arrCelulares AS $p){
			$p->Insertar();
		}		
	 }

	public static function TraerTodosLosCelulares()
	{
		$arrCelulares = array();
		
		$a = fopen("celulares.txt", "r");
		
		while(!feof($a)){
			$arr = explode("-", fgets($a));
			if(count($arr) > 1){
									
					$celular = new Celular();
					$celular->modelo = $arr[0];
					$celular->marca =$arr[1];
					$celular->fecha = $arr[2];
					$celular->so = $arr[3];
					$celular->sim = $arr[4];
					$celular->liberado = $arr[5];
				
				array_push($arrCelulares, $celular);
			}
		}
		fclose($a);
		
		return $arrCelulares;
	}

	public static function TraerUnCelular($modelo)
	{

		$celular = new Celular();
		
		$a = fopen("celular.txt", "r");
		
		while(!feof($a)){
			$arr = explode("-", fgets($a));

			if(count($arr) > 1){
				if((int)$arr[0] == $modelo){
					$celular->modelo = $arr[0];
					$celular->marca =$arr[1];
					$celular->fecha = $arr[2];
					$celular->so = $arr[3];
					$celular->sim = $arr[4];
					$celular->liberado = $arr[5];
				
					break;
				}
			}
		}
		fclose($a);
		
		return $celular;	
	}


}
?>