/*
	mueveRana: Mueve la rana (si es posible) cuando el usuario la pincha.
*/
function mueveRana(el)
{
	var id_el = parseInt(el.id, 10);
	if (document.getElementById(el.id).src.includes("L.png")) 
	{
//		alert("It is a Left Frog")
		
		//Can I move straight forward?
		if(document.getElementById(id_el+1).src.includes("B.png")) 
		{
//			alert("Moving the frog forward!")
			frog_swap(id_el,id_el+1)
		} else {
			if(document.getElementById(id_el+2).src.includes("B.png")) 
			{
//				alert("Moving the frog forward!")
				frog_swap(id_el,id_el+2)
			}		
		}
		
	} else { 
		if (document.getElementById(el.id).src.includes("R.png")) 
		{	
			if(document.getElementById(id_el-1).src.includes("B.png")) 
			{
//				alert("Moving the frog forward!")
				frog_swap(id_el,id_el-1)
			} else {
			if(document.getElementById(id_el-2).src.includes("B.png")) 
			{
//				alert("Moving the frog forward!")
				frog_swap(id_el,id_el-2)
			}		
		}
			
		} else {
			alert("You can not move the blank space!")
		}	
		

		
	}
	checkWin();
	checkBlock();
}

/*
	frog_swap: función que cambia las posiciones de dos elementos de la tabla visualmente.
*/
function frog_swap(i,j)
{
	var copy_src = document.getElementById(i).src;
	document.getElementById(i).src = document.getElementById(j).src;
	document.getElementById(j).src = copy_src;
}


/*
	refreshPage: reinicia el partido.
*/
function refreshPage(){
    window.location.reload();
}


/*
	checkWin: comproba si el partido ha terminado con victoria para el usuario utilizando
	la tabla de HTML.
*/
function checkWin(){
	var derecha = false;
	var izquierda = false;
	if(document.getElementById(2).src.includes("R.png"))
		if(document.getElementById(1).src.includes("R.png"))
			if(document.getElementById(0).src.includes("R.png"))
				derecha = true;
	if(document.getElementById(4).src.includes("L.png"))
		if(document.getElementById(5).src.includes("L.png"))
			if(document.getElementById(6).src.includes("L.png"))
				izquierda = true;
	if(derecha)
		if(izquierda)	
			setTimeout(()=>{
				alert("Has ganado!");
			},1)		

}

/*
	checkBlock: comproba si alguna rana se encuentra bloqueada, 
	por lo que no hay porque seguir el partido.
*/
function checkBlock(){
	if(	document.getElementById(0).src.includes("L.png") &&
		document.getElementById(1).src.includes("R.png") && 
		document.getElementById(2).src.includes("R.png")){
		
		setTimeout(()=>{
			alert("Juego bloqueado!");
		},1)	
	}

	if(	document.getElementById(4).src.includes("L.png") &&
		document.getElementById(5).src.includes("L.png") && 
		document.getElementById(6).src.includes("R.png")){
		setTimeout(()=>{
			alert("Juego bloqueado!");
		},1)	

	}
	
	for(var i=0;i<=3;i++){
		if(	
			document.getElementById(i).src.includes("L.png") &&
			document.getElementById(i+1).src.includes("L.png") &&
			document.getElementById(i+2).src.includes("R.png") && 
			document.getElementById(i+3).src.includes("R.png")){
			setTimeout(()=>{ //Esto una chapuza para forzar pintar el HTML antes!
				alert("Juego bloqueado!");
			},1)	
		}
	}
}

/*
	rana_aleatoria: aleatoriza la posición de las ranas.
*/
function rana_aleatoria(){
	for (var i=0;i<=6;i++){
		j=Math.floor(Math.random() * 7);
		while ((j < 0)||(j >= 7)){
			j=Math.floor(Math.random() * 7);
		}
		frog_swap(i,j);
	}
	checkWin();
	checkBlock();	
}


/*
	algoritmo_hardcoded: resuelve el partido siempre que las ranas empiezen
	desde las posiciones: L L L B R R R
*/
function algoritmo_hardcoded(){
	setTimeout(()=>{ frog_swap(3,2); },1000);
	setTimeout(()=>{ frog_swap(2,4); },2000);	
	setTimeout(()=>{ frog_swap(4,5); },3000);	
	setTimeout(()=>{ frog_swap(5,3); },4000);	
	setTimeout(()=>{ frog_swap(3,1); },5000);	
	setTimeout(()=>{ frog_swap(1,0); },6000);	
	setTimeout(()=>{ frog_swap(0,2); },7000);	
	setTimeout(()=>{ frog_swap(2,4); },8000);	
	setTimeout(()=>{ frog_swap(4,6); },9000);	
	setTimeout(()=>{ frog_swap(6,5); },10000);	
	setTimeout(()=>{ frog_swap(5,3); },11000);	
	setTimeout(()=>{ frog_swap(3,1); },12000);
	setTimeout(()=>{ frog_swap(1,2); },13000);
	setTimeout(()=>{ frog_swap(2,4); },14000);
	setTimeout(()=>{ frog_swap(4,3); },15000);
	setTimeout(()=>{ checkWin(); },16000);	
		
}



/*
	array_swap: función que cambia las posiciones de dos elementos en el array
	(no cambia en tabla visualmente).
*/
function array_swap(posiciones,i,j)
{
	var copy_aux = posiciones[i];
	posiciones[i] = posiciones[j];
	posiciones[j] = copy_aux;
	return(posiciones);
}

/*
	array_checkWin: comproba si el partido ha terminado con victoria para el usuario 
	utilizando el array de JavaScript (no tabla de HTML).	
*/
function array_checkWin(posiciones){
	var derecha = false;
	var izquierda = false;
	if(posiciones[0] == "R")
		if(posiciones[1] == "R")
			if(posiciones[2] == "R")
				derecha = true;
	if(posiciones[4] == "L")
		if(posiciones[5] == "L")
			if(posiciones[6] == "L")
				izquierda = true;
	if(derecha)
		if(izquierda)	
			return(true);
	return(false);			
}