<html>
<head>
<title>Estacionamiento</title>
</head>
<body>
		<script type="text/javascript" src="java.js"></script>

        <input type="text" name= "marca" id = "marca"  placeholder= "   Ingrse Marca        " maxlength = "6">
        <br>
        <input type="text" name= "modelo" id = "modelo"  placeholder= "   Ingrse Modelo        " maxlength = "10">
        <br>
        <input type="date" name="fecha">
        <br>
		<select name="so">
  			<option value="volvo">Android</option>
  			<option value="saab">IOS</option>
  			<option value="mercedes">Windows</option>
		</select>
        <br>
		<input type="radio" name="sim" value="uno"> Un SIM<br>
  		<input type="radio" name="sim" value="dos"> Dos SIM
  		<br>
  		<input type="checkbox" name="liberado" value="x"> Liberado
        <br>
        <input class= "button-3d" animated = "glowing" type="button" onclick="AgregarCelular()" name= "agregarAuto" id = "agregarAuto" value = "   Agregar    ">
        <input class= "button-3d" animated = "glowing" type="button" onclick="ModificarCelular()" name= "agregarAuto2" id = "agregarAuto" value = "   Modificar    ">
        <input class= "button-3d" animated = "glowing" type="button" onclick="Borrar()" name= "agregarAuto3" id = "agregarAuto" value = "   Borrar    ">



</body>
</html>