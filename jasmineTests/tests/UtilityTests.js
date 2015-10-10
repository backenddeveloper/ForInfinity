/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

describe('The Utility namespace' , function(){

	describe('The retrieveAuthorities function',function(){
		
		it('Calls a new request with the correct parameters' , function(){
			
			var mock = {} ;
			mock.request = function(a , b , c){
				
				expect(a instanceof XMLHttpRequest).toBe(true) ;
				expect(b).toBe("/Authorities") ;
				expect(typeof c === 'function').toBe(true) ;
				mock.called = true ;
				
			} ;
			
			Utility.retrieveAuthorities(mock.request) ;
			
			expect(mock.called).toBe(true) ;
			
		});
		
	});
	
	describe('The processAuthorities function' , function(){
		
		it('Correctly builds the authorities list' , function(){
			
			var mock = {
					'authorities' : [
						{
							LocalAuthorityId : 100,
							Name : 'Test'
						},
						{
							LocalAuthorityId : 101,
							Name : 'Test2'
						}
					]
			};
			var processedMock = {
					100 : "Test",
					101 : "Test2"
			};
			
			spyOn(View , 'displayAuthorities');
			
			Utility.processAuthorities(mock) ;
			
			expect(View.displayAuthorities).toHaveBeenCalledWith(processedMock) ;
		
		});
		
		it('Handles erroneous input' , function(){
			
			var mock = "broken string" ;
			
			spyOn(View , 'authoritiesError');
			
			Utility.processAuthorities(mock) ;
			
			expect(View.authoritiesError).toHaveBeenCalled() ;
			
		});
		
	});
	
	describe('The retrieveEstablishments function',function(){
		
		it('Calls a new request with the correct parameters' , function(){
			
			var mock = {} ;
			mock.request = function(a , b , c){
				
				expect(a instanceof XMLHttpRequest).toBe(true) ;
				expect(b).toBe('/Establishments?localAuthorityId=111') ;
				expect(typeof c === 'function').toBe(true) ;
				mock.called = true ;
				
			} ;
			
			Utility.retrieveEstablishments(mock.request , 111) ;
			
			expect(mock.called).toBe(true) ;
			
		});
		
	});
	
	describe('The processEstablishments function' , function(){
		
		it('Processes establishments correctly' , function(){
			
			var mock = {
				"establishments" : [
				    {"RatingValue" : 3},
				    {"RatingValue" : 4},
				    {"RatingValue" : 4},
				    {"RatingValue" : 4},
				    {"RatingValue" : "Exempt"}
				]
			} ;
			
			var ratings = {
					1 : 0,
					2 : 0,
					3 : 20,
					4 : 60,
					5 : 0,
					'Exempt' : 20,
					'Pass' : 0,
					'Pass and Eat Safe' : 0,
					'Improvement Required' : 0,
					'Awaiting Inspection' : 0
				};			

			spyOn(View , 'displayEstablishments') ;
			
			Utility.processEstablishments(mock) ;

			expect(View.displayEstablishments).toHaveBeenCalledWith(ratings) ;
			
		}) ;
		
		it('Handles erroneous input' , function(){
			
			var mock = "broken string" ;
			
			spyOn(View , 'establishmentsError');
			
			Utility.processEstablishments(mock) ;
			
			expect(View.establishmentsError).toHaveBeenCalled() ;
			
		});
		
	});

});