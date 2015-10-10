/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

describe('The View namespace' , function(){
	
	describe('The displayAuthorities function' , function(){
		
		it('Builds a select' , function(){
			
			var mockElement = document.createElement("select") ;
			mockElement.id = "authorities_list" ;
			document.body.appendChild(mockElement) ;
			
			var authoritiesMock = {
					100 : "Test",
					101 : "Test2",
					102 : "Test3"
			};
			
			View.displayAuthorities(authoritiesMock) ;
			
			expect(mockElement.childNodes.length).toBe(3) ;
			
			document.body.removeChild(mockElement) ;
			
		});
		
		it('Throws an error if it can\'t update the element' , function(){
			
			spyOn(document , 'write') ;
			
			var authoritiesMock = {
					100 : "Test",
					101 : "Test2",
					102 : "Test3"
			};
			
			View.displayAuthorities(authoritiesMock) ;
			
			expect(document.write).toHaveBeenCalledWith("The HTML has become corrupt, please check your build.") ;
			
		});
		
	});
	
	describe('The authoritiesError function' , function(){
		
		it('Prints a helpful error message' , function(){
		
			spyOn(document , 'write') ;
			
			View.authoritiesError() ;
					
			expect(document.write).toHaveBeenCalledWith("An error has occurred fetching the authorities list, "
                                                      + "please refresh the page to continue.") ;
		
		});
		
	});
	
	describe('The displayEstablishments function' , function(){
		
		var establishmentsMock = {
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
		
		it('Changes the percentages in the page' , function(){
			
			var container = document.createElement('div') ;
			for(var key in establishmentsMock){
				
				var element = document.createElement('div') ; 
				element.id = "rating_value_" + key ;
				container.appendChild(element) ;
			}
			document.body.appendChild(container) ;
			
			View.displayEstablishments(establishmentsMock) ;
			
			expect(document.getElementById('rating_value_3').innerHTML).toBe("20%") ;
			expect(document.getElementById('rating_value_4').innerHTML).toBe("60%") ;
			expect(document.getElementById('rating_value_Pass and Eat Safe').innerHTML).toBe("0%") ;
			
			document.body.removeChild(container) ;
			
		});
		
		it('Prints a helpful error message' , function(){
			
			spyOn(document , 'write') ;
			
			View.displayEstablishments(establishmentsMock) ;
			
			expect(document.write).toHaveBeenCalledWith("The HTML has become corrupt, please check your build.") ;				
			
		});
		
	});
	
	describe('The establishmentsError function' , function(){
		
		it('Prints a helpful error message' , function(){
			
			spyOn(document , 'write') ;
			
			View.establishmentsError() ;
					
			expect(document.write).toHaveBeenCalledWith("An error has occurred fetching the establishment ratings, "
                                                      + "please refresh the page to continue.") ;
		
		});
		
	});
	
});