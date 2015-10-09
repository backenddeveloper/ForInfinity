/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

describe('The request class',function(){
	
	var AJAXMockTemplate =
	{
		'open' : function(){},
		'send' : function(){},
		'onreadystatechange' : null,
		'setRequestHeader' : function(){},
		responseText : "{}" 
	};
	
	it('Opens an AJAX request with the correct arguments',function(){
		
		var AJAXMock = Object.create(AJAXMockTemplate) ;
		
		spyOn(AJAXMock,'open') ;
		spyOn(AJAXMock,'send') ;
		spyOn(AJAXMock,'setRequestHeader') ;
		
		new Request(AJAXMock , "A mock request string" , function(){});
		
		expect(AJAXMock.open).toHaveBeenCalledWith('get','http://api.ratings.food.gov.uk/A mock request string',false) ;
		expect(AJAXMock.setRequestHeader).toHaveBeenCalledWith('x-api-version',2) ;
		expect(AJAXMock.setRequestHeader).toHaveBeenCalledWith('accept','application/json') ;
		expect(AJAXMock.send).toHaveBeenCalled() ;
		expect(AJAXMock.onreadystatechange).not.toBeNull() ;
		
	});
	
	it('Launches the fail function correctly on error',function(){
		
		var AJAXMock = Object.create(AJAXMockTemplate) ;
		
		spyOn(Request,'failed') ;
		
		new Request(AJAXMock , '' , function(){});
		
		AJAXMock.readyState = 4 ;
		AJAXMock.status = 404 ;
		AJAXMock.onreadystatechange() ;

		expect(Request.failed).toHaveBeenCalled() ;
		
	});
	
	it('Launches the callback correctly on success',function(){
		
		var AJAXMock = Object.create(AJAXMockTemplate) ;
		
		window.callback = function(input){} ;
		
		spyOn(window , 'callback') ;
		
		new Request(AJAXMock , '' , window.callback);
		
		AJAXMock.readyState = 4 ;
		AJAXMock.status = 200 ;
		AJAXMock.onreadystatechange() ;

		expect(callback).toHaveBeenCalledWith({}) ;	
		
	});
	
});