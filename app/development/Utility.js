/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

"use strict" ;

; var Utility = Utility || {} ; //The utility namespace.

Utility.retrieveAuthorities = function(_request){
	
	new _request(new XMLHttpRequest() , '/Authorities' , Utility.processAuthorities) ;
	
};
	
Utility.processAuthorities = function(reply){
	
	try {
		
		reply = JSON.parse(reply) ;
		
		var authoritiesList = {} ;
		
		for(var index = 0 ;  index < reply.authorities.length ; index++){
			
			var authority = reply.authorities[index] ;

			authoritiesList[authority.LocalAuthorityId] = authority.Name ;
			
		}

		View.displayAuthorities(authoritiesList) ;
		
	} catch (err){

		View.authoritiesError() ;
		
	}
	
};

Utility.retrieveEstablishments = function(_request , id){

	new _request(new XMLHttpRequest() , '/Establishments?localAuthorityId=' + id , Utility.processEstablishments) ;

};

Utility.processEstablishments = function(reply){
	
	try {
	
		var calculator = new Calculator() ;
		
		reply = JSON.parse(reply) ;
		
		for(var index = 0 ;  index < reply.establishments.length ; index++){

			
			calculator.addRating(reply.establishments[index].RatingValue) ;
			
		}
		
		View.displayEstablishments(calculator.getPercentages()) ;
		
	} catch(err){
		
		View.establishmentsError() ;
		
	}
	
};