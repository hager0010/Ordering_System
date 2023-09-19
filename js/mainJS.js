/*************************
popUp function FOR LOGIN
*************************/

function open_popupL(){
	
	var modal = document.getElementById("order-model-L");

	modal.style.display = "block" ;
}

function close_popupL() {
	var modal = document.getElementById("order-model-L");
    
		modal.style.display = "none" ;

}

/*************************
popUp function FOR REGISTER
*************************/

	
function open_popupR(){
	
	var modal = document.getElementById("order-model-R");

	modal.style.display = "block" ;
}

function close_popupR() {
	var modal = document.getElementById("order-model-R");
    
		modal.style.display = "none" ;

}




/*************************
popUp function FOR MAKE ORDER
*************************/
function open_popuporder(){
	
	var modal = document.getElementById("order-model-O");

	modal.style.display = "block" ;
}

function close_popuporder() {
	var modal = document.getElementById("order-model-O");
    var mydiv2 = document.getElementById("Yorder");

		modal.style.display = "none" ;
		mydiv2.style.display = "none" ;


}

function clickme(){
  var hide = document.getElementById("Yorder");
 
    hide.style.display = "block";
}


function clikhere(){
   var mydiv = document.getElementById("order-model-O");
   var mydiv2 = document.getElementById("Yorder");

   mydiv.style.display = "none";
   mydiv2.style.display = "none";

  alert("The order request has been completed successfully");

}

/****************************smaller-menu to mobile*******************************/
function openButton(){
	var openbutton = document.getElementById("three-lines");
	var menu = document.getElementById("links");
	var closebutton = document.getElementById("two-lines");


	menu.style.display = "block" ;
	openbutton.style.display = "none";
	closebutton.style.display = "block";
		
}


function closeButton(){

	var openbutton = document.getElementById("three-lines");
	var menu = document.getElementById("links");
	var closebutton = document.getElementById("two-lines");
	
	
	menu.style.display = "none" ;
	closebutton.style.display = "none";
	openbutton.style.display = "block";
	

}

/*******************When user click on any line the menu closed after open after open his section******/
function whenact(){
    var openbutton = document.getElementById("three-lines");
	var menu = document.getElementById("links");
	var closebutton = document.getElementById("two-lines");
	var topmenu = document.getElementById("top-nav");
	
	
	menu.style.display = "none" ;
	closebutton.style.display = "none";
	
	openbutton.style.display = "block";
	

}
/*******************************************************************/
function submited(){
	alert("Registration completed successfully");
}
