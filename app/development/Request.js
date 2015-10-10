/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

"use strict" ;

; class Request {
	
	constructor(AJAXObject , URI , callback){
		
		AJAXObject.onreadystatechange = function(){
			if(AJAXObject.readyState === 4){
				if(AJAXObject.status === 200){
					callback(JSON.parse(AJAXObject.responseText)) ;
				} else {
					Request.failed();
				}
			}
		};
		
		var URL= "http://api.ratings.food.gov.uk" + URI ;
		AJAXObject.open('get', URL ,false) ;
		AJAXObject.setRequestHeader('accept','application/json') ;
		AJAXObject.setRequestHeader('x-api-version',2) ;
		AJAXObject.send() ;
		
	}
	
	static failed(){
		
		document.write("Your browser has become seperated from the API, "
                     + "or another error has occurred with the request, "
                     + "please refresh the page to continue.") ;
		
	}

}