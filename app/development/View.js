/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

"use strict" ;

; var View = View || {} ; //The view namespace.

View.displayAuthorities = function(authoritiesList){
	
	try {
		var selectElement = document.getElementById('authorities_list') ;
		
		for(var authority in authoritiesList){
			
			var option = document.createElement('option') ;
			option.value = authority ;
			option.innerHTML = authoritiesList[authority] ;
			selectElement.appendChild(option) ;
			
		}
	} catch (err){
		
		document.write("The HTML has become corrupt, please check your build.");
		
	}
	
} ;

View.authoritiesError = function(){
	
	document.write("An error has occurred fetching the authorities list, please refresh the page to continue.");
	
} ;

View.displayEstablishments = function(percentagesList){
	
	try{
	
		for(var key in percentagesList){
			
			document.getElementById("rating_value_" + key).innerHTML = percentagesList[key] + "%" ;
			
		}
		
	} catch (err){

		document.write("The HTML has become corrupt, please check your build.");
		
	}	
	
} ;

View.establishmentsError = function(){
	
	document.write("An error has occurred fetching the establishment ratings, please refresh the page to continue.") ;
	
} ;