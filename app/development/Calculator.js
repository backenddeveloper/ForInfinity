/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

"use strict" ;

; class Calculator {
	
	constructor(){
		
		this.ratings = {
			1 : 0,
			2 : 0,
			3 : 0,
			4 : 0,
			5 : 0,
			'Exempt' : 0,
			'Pass' : 0,
			'Pass and Eat Safe' : 0,
			'Improvement Required' : 0,
			'Awaiting Inspection' : 0
		};
		
		this.numberOfRatingsProcessed = 0 ;
	
	}

	addRating(rating){
		
		if(rating in this.ratings){
			
			this.ratings[rating]++ ;
			this.numberOfRatingsProcessed++ ;
			
		}
		
	};
	
	getPercentages(){
		
		var percentagesObject = {} ;
		
		for(var ratingTotal in this.ratings){
			
			percentagesObject[ratingTotal] = Math.round(this.ratings[ratingTotal] * 100  / this.numberOfRatingsProcessed) ;
			
		}
	
		return percentagesObject ;

	};
	
};