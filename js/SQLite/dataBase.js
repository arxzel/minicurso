db=null;

function conexion(){
	/*
		Se créa la DB en caso de que no exista, si ya existe será abierta y se almacenará en db
		db=window.openDatabase("NombreDeLaDataBase","VersionDeLaDataBase", "PasswordDataBase","TamañoDataBase");
	*/

    //db=window.openDatabase("miDataBase","1.0","123456",5000);
}



function desconexion(){
	//Cerramos la DB haciendo null su variable contenedora
	db=null;
}



/*
	Función que invoca y crea la DB
*/

function populateDB(){
	
	/*
		creamos o abrimos la DB
	*/
	conexion();

	/*
		db.Transaction(functionEx, falseOrError, trueOrSuccess);
		--otra forma de hacerlo: 
		db.transaction(function(tx){contenido...;}, function(err){contenido...;}, function(){contenido...;});
	*/
	 	
    //db.transaction(createDB, errorCDB, successCDB);
}

	function createDB (tx){
		//tx.executeSql("CREATE TABLE IF NOT EXISTS datos(id_datos INT PRIMARY KEY, datos_nombre VARCHAR(50) NOT NULL);");

	}
	function errorCDB (err){
		alert("Ha ocurrido un error en "+err+" al crear la DB");
	}
	function successCDB (){

	}







/*
	Función para insertar registros en la DB
*/
function insertar(){
	conexion();
	db.transaction(insertDB, errInsert, succInsert);
}

	function insertDB(tx){

	}
	function errInsert(err){
		alert("Ha ocurrido un error en "+err+" al insertar los registros");
	}
	function succInsert(){
		//var codigo ="<h3>Registro Guardado con éxito </h3>";
		//$('#resultados').html(codigo);
	}



/*
	Función para consultar Registros de la DB
*/
function consultar(){
	conexion();
	db.transaction(consuReg, errCons, succConsu);
}

	function consuReg(tx){
		/*
			tx.executeSql("query",[],FuncionExito,FuncionFracaso);
		*/
		//tx.executeSql("SELECT * from datos",[],function(){alert('Exito');},function(err){alert('error al consultar');});

	}
	function errCons(err){
		alert("Ha ocurrido un error en "+err+" al consultar los registros");
	}
	function succConsu(){

	}



/*
	Función para modificar un registro de la DB
*/
function modificar(){
	conexion();
	db.transaction(modifiReg, errModif, succModif);
}

	function modifiReg(tx){

	}
	function errModif(err){
		alert("Ha ocurrido un error en "+err+" al modificar el registro");
	}
	function succModif(){

	}



/*
	Función para eliminar un registro de la DB
*/
function eliminar(){
	conexion();
	db.transaction(deletReg, errDel, succDel);
}

	function deletReg(tx){

	}
	function errDel(err){
		alert("Ha ocurrido un error en "+err+" al eliminar el registro");
	}
	function succDel(){

	}





































	/*Recursos Extras*/

				//<input type='button' value='modificar' name='modificar' onclick='modificar('+response.rows.item(i).id_datos+');'></input>;
				//<input type='button' value='eliminar' name='eliminar' onclick='eliminar('+response.rows.item(i).id_datos+');'></input>;