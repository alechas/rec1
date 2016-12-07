<?php

		include_once('Clases/Auto.php');
		include_once('Clases/AccesoDatos.php');
	// var_dump($_POST);
 	if(isset($_POST['idparaborrar']))
 	{
 		//echo "id para borrar";
 		$resultado = Celular::Borrar($_POST['modelo']);
 	}


	echo "<table class='table table-hover table-responsive'>
			<thead>
				<tr>
					<th>            </th>				
					<th>            </th>				
					<th>  Modelo   </th>				
					<th>  Marca   </th>
					<th>  Fecha     </th>
					<th>  SO	</th>
					<th>  Sim	</th>
					<th>  Liberado	</th>
				</tr> 
			</thead>
			<script type='text/javascript' src='FuncionesJava.js'></script>";   	

	$autos = Celular::TraerTodosLosCelulares();
	//var_dump($autos);


	foreach ($autos as $au){
		//var_dump($au);
		$mod = $au->modelo;
		$conboton = "<td><button class= 'button-3d' animated = 'glowing' name=$au->modelo onclick=Borrar('";
		$conB = "')>Borrar</button></td>";

		$conbotonb = "<td><button class= 'button-3d' animated = 'glowing' name=$au->modelo onclick=Modificar('";
		$conBb = "')>Modificar</button></td>";
	
  		//die();
	//echo	"<tr>";

		//$pat=trim($au->modelo," ");
		echo  $conboton."$mod".$conB; 
		echo  $conbotonb."$mod".$conBb; 
		
	echo			"<td>  $au->modelo   </td>
					<td>  $au->marca</td>				
					<td>  $au->fecha   </td>
					<td>  $au->so   </td>
					<td>  $au->sim   </td>";

	if($au->liberado == 'x')
		echo "<td>  Si    </td>";
	else
		echo "<td>  No</td>";

	echo	"	</tr> ";
	}

	echo"</table>";	

?>