// function AutosEstacionados()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "AutosEstacionados"},
//         async: true
//         })
//     	.then( 
//     		function(respuesta) 
//     		{ 	//alert(respuesta + ".php");
//                     $("#container").load(respuesta + ".php"); 
//     		}, 
//   		function(respuesta) { alert( "No tiene permisos para ver lo facturado" ); }
// 		);

// }

function Celulares()
{
  var pagina = "nexo.php";

    // $.ajax({
    //     type: 'POST',
    //     url: pagina,
    //     dataType: "text",
    //     data: {queHago: "TodosCelulares"},
    //     async: true
    //     })
    //     .then( 
    //         function(respuesta) 
    //         {   alert(respuesta);
    //             // $("#container").load(respuesta + ".php"); 
    //         }, 
    //     function(respuesta) { //alert( "No tiene permisos para ver lo facturado" ); 
    // }
    //     );
    $("#container").load("frmAutosEstacionados.php"); 
}

function Modificar(modelo)
{

    // $("#container").load("frmIngresarAuto.php");
    // //$("#modelo").val(modelo);
    // document.getElementById("modelo").innerHTML = modelo;

}

function BorrarCelular()
{
      var pagina = "nexo.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "BorrarCelular" , modelo: modelo},
        async: true
        })
        .then( 
            function(respuesta) 
            {   //alert(respuesta + ".php");
                //alert(respuesta);
                $("#container").load("frmAutosEstacionados.php"); 
            }, 
        function(respuesta) { alert( respuesta ); }
        );
}


function ModificarCelular()
{

  var pagina = "nexo.php";
  var marca = $("#marca").val();
  var modelo = $("#modelo").val();
  var fecha = $("#fecha").val();
  var so = $("#so").val();
  var sim = $("#sim").val();
  var liberado = $("#liberado").val();

  // alert(fecha);
  // alert(so);
  // alert(sim);
  // alert(liberado);

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "ModificarCelular" , marca: marca, modelo:modelo, fecha: fecha, so: so, sim: sim, liberado: liberado},
        async: true
        })
        .then(
            function(respuesta) 
            {   //alert(respuesta);
                //$("#container").load(respuesta + ".php");
                $("#container").load("frmCelulares.php"); 
                //$("#container").load("frmIngresarAuto.php"); 
            }, 
        function(respuesta) { alert( respuesta ); }
        );

 }

// function Usuarios()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "Usuarios"},
//         async: true
//         })
//     	.then( 
//     		function(respuesta) 
//     		{ 	//alert(respuesta + ".php");
//     			$("#container").load(respuesta + ".php"); 
//     		}, 
//   		function(respuesta) { alert( respuesta ); }
// 		);

// }

function LogIn()
{

  var pagina = "nexo.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "Login"},
        async: true
        })
    	.then( 
    		function(respuesta) 
    		{ 	//alert(respuesta + ".php");
    			$("#container").load("frmLogIn.php"); 
    		}, 
  		function(respuesta) { alert( respuesta ); }
		);

}

// function LogOut()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "LogOut"},
//         async: true
//         })
//     	.then( 
//     		function(respuesta) 
//     		{ 	alert("Bye!");
//     			$("#container").load("frmLogIn.php"); 
//     		}, 
//   		function(respuesta) { alert( respuesta ); }
// 		);

// }

function IngresarCelular()
{
  // var pagina = "nexo.php";

  //   $.ajax({
  //       type: 'POST',
  //       url: pagina,
  //       dataType: "text",
  //       data: {queHago: "IngresarCelular"},
  //       async: true
  //       })
  //   	.then( 
  //   		function(respuesta) 
  //   		{ 	//alert(respuesta + ".php");
  //   			$("#container").load(respuesta + ".php"); 
  //   		}, 
  // 		function(respuesta) { alert( respuesta ); }
		// );
    $("#container").load("frmIngresarAuto.php");
 }

function Borrar(modelo)
{
  var pagina = "nexo.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "BorrarCelular" , modelo: modelo},
        async: true
        })
        .then( 
            function(respuesta) 
            {   //alert(respuesta + ".php");
                //alert(respuesta);
                $("#container").load("frmAutosEstacionados.php"); 
            }, 
        function(respuesta) { alert( respuesta ); }
        );

}


// function DespacharAuto()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "DespacharAuto"},
//         async: true
//         })
//     	.then( 
//     		function(respuesta) 
//     		{ 	alert(respuesta + ".php");
//     			//$("#container").load(respuesta + ".php"); 
//     		}, 
//   		function(respuesta) { alert( respuesta ); }
// 		);

// }
function AgregarCelular()
{
  var pagina = "nexo.php";
  var marca = $("#marca").val();
  var modelo = $("#modelo").val();
  var fecha = $("#fecha").val();
  var so = $("#so").val();
  var sim = $("#sim").val();
  var liberado = $("#liberado").val();

  // alert(fecha);
  // alert(so);
  // alert(sim);
  // alert(liberado);

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "CargarCelular" , marca: marca, modelo:modelo, fecha: fecha, so: so, sim: sim, liberado: liberado},
        async: true
        })
        .then(
            function(respuesta) 
            {   //alert(respuesta);
                //$("#container").load(respuesta + ".php");
                $("#container").load("frmAutosEstacionados.php"); 
                //$("#container").load("frmIngresarAuto.php"); 
            }, 
        function(respuesta) { alert( respuesta ); }
        );
}

// function DescargarFacturación( facturas )
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "DownloadFacturas" , facturas : facturas },
//         async: true
//         })
//         .then(
//             function(respuesta) 
//             {   
//                 //alert(respuesta);
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );

// }

function Ingresar()
{
  var pagina = "nexo.php";
  var user = $("#mail").val();
  var pass = $("#pass").val();

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "Ingresar" , user: user, pass:pass },
        async: true
        })
    	.then( 
    		function(respuesta) 
    		{ 	//alert("Bienvenido!!");
    			alert(respuesta);
                //(respuesta + ".php").load; 
    		}, 
  		function(respuesta) { alert( "Error de logueo" ); }
		);
}

// function IngresarAd()
// {
//   var pagina = "nexo.php";
//   var user = $("#user").val();
//   var pass = $("#pass").val();

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "IngresarAd" , user: user, pass:pass },
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta + ".php");
//                 //$("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );
// }


// function IngresarUs()
// {
//   var pagina = "nexo.php";
//   var user = $("#user").val();
//   var pass = $("#pass").val();

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "IngresarUs" , user: user, pass:pass },
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta + ".php");
//                 //$("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );
// }

// function ListarUsuarios()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "ListarUsuarios"  },
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );    
// }

// function BorrarUsuario(user)
// {//alert("borrar usuario");
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "BorrarUsuario" , user:user },
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );    

// }

// function CambiarContraseña(user)
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "ModificarUsuario" ,user:user },
//         async: true
//         })
//         .then(
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );    

// }

// function AgregarUsuarioSQL()
// {
//   var pagina = "nexo.php";
//   var user = $("#user").val();
//   var pass = $("#pass").val();
//   var tipo = $("#tipo").val();

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "AgregarUsuarioSQL" , user:user , pass:pass , tipo:tipo},
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load("frmUsuarios.php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );    

// }

// function ModificarUsuarioSQL(user)
// {

//   var pagina = "nexo.php";
//   var pass = $("#pass").val();
//   var tipo = $("#tipo").val();

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "ModificarUsuarioSQL" , user:user , pass:pass , tipo:tipo},
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load("frmUsuarios.php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );    

// }

// function AgregarUsuario()
// {
//   var pagina = "nexo.php";

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "AgregarUsuario"  },
//         async: true
//         })
//         .then( 
//             function(respuesta) 
//             {   //alert(respuesta);
//                 $("#container").load(respuesta + ".php"); 
//             }, 
//         function(respuesta) { alert( respuesta ); }
//         );        
// }

// function myFunction() {
//     //var x = document.getElementById("patente").value;
//     //document.getElementById("marca").value = x;
   
//   var pagina = "nexo.php";
//   var patente = $("#patente").val();

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "ChequearPatenteMarca" , patente:patente },
//         async: true
//         })
//       .then( 
//         function(respuesta) 
//         {   //alert(
//             document.getElementById("marca").value = respuesta;
            
//         }, 
//         function(respuesta) {  }
//     );

//     $.ajax({
//         type: 'POST',
//         url: pagina,
//         dataType: "text",
//         data: {queHago: "ChequearPatenteColor" , patente:patente },
//         async: true
//         })
//       .then( 
//         function(respuesta) 
//         {   //alert(
//             document.getElementById("color").value = respuesta;
            
//         }, 
//         function(respuesta) {  }
//     );

// }