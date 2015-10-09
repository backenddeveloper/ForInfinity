/*
 * @Author: Graham Turner.
 * @Application: A single page application to display food ratings by authority.
 * @License: This and all related code is released for public use under the GNU/GPLv2
 * This code is NOT suitable for production use. 
 * 
 */

describe('The calculator class',function(){
	
	it('Is correct when all ratings are a 5',function(){
		
		var calculator = new Calculator() ;
		
		calculator.addRating(5) ;
		calculator.addRating(5) ;
		calculator.addRating(5) ;
		
		expect(calculator.getPercentages()[5]).toBe(100) ;
		expect(calculator.getPercentages()[4]).toBe(0) ;
		expect(calculator.getPercentages()[3]).toBe(0) ;
		expect(calculator.getPercentages()[2]).toBe(0) ;
		expect(calculator.getPercentages()[1]).toBe(0) ;
		expect(calculator.getPercentages()["Exempt"]).toBe(0) ;
		
	});
	
	it('Is correct when all ratings are Exempt',function(){
		
		var calculator = new Calculator() ;
		
		calculator.addRating("Exempt") ;
		calculator.addRating("Exempt") ;
		calculator.addRating("Exempt") ;
		
		expect(calculator.getPercentages()[5]).toBe(0) ;
		expect(calculator.getPercentages()[4]).toBe(0) ;
		expect(calculator.getPercentages()[3]).toBe(0) ;
		expect(calculator.getPercentages()[2]).toBe(0) ;
		expect(calculator.getPercentages()[1]).toBe(0) ;
		expect(calculator.getPercentages()['Exempt']).toBe(100) ;
		
	});
	
	it('Is correct with an equal mix of ratings',function(){
		
		var calculator = new Calculator() ;
		
		calculator.addRating(5) ;
		calculator.addRating(4) ;
		calculator.addRating(3) ;
		calculator.addRating(2) ;
		calculator.addRating(1) ;
		calculator.addRating("Exempt") ;
		
		expect(calculator.getPercentages()[5]).toBe(17) ;
		expect(calculator.getPercentages()[4]).toBe(17) ;
		expect(calculator.getPercentages()[3]).toBe(17) ;
		expect(calculator.getPercentages()[2]).toBe(17) ;
		expect(calculator.getPercentages()[1]).toBe(17) ;
		expect(calculator.getPercentages()['Exempt']).toBe(17) ;
		
	});
	
	it('It handles erroneous input gracefully',function(){
		
		var calculator = new Calculator() ;
		
		calculator.addRating(3) ;
		calculator.addRating(6) ;
		calculator.addRating(0) ;
		calculator.addRating(-1) ;
		calculator.addRating(1.1) ;
		calculator.addRating(null) ;
		calculator.addRating(undefined) ;
		calculator.addRating("Random string") ;
		
		expect(calculator.getPercentages()[5]).toBe(0) ;
		expect(calculator.getPercentages()[4]).toBe(0) ;
		expect(calculator.getPercentages()[3]).toBe(100) ;
		expect(calculator.getPercentages()[2]).toBe(0) ;
		expect(calculator.getPercentages()[1]).toBe(0) ;
		expect(calculator.getPercentages()["Exempt"]).toBe(0) ;
		
	});
	
	it('It handles Scotland gracefully',function(){
		
		var calculator = new Calculator() ;
		
		calculator.addRating("Exempt") ;
		calculator.addRating("Pass") ;
		calculator.addRating("Pass and Eat Safe") ;
		calculator.addRating("Improvement Required") ;
		calculator.addRating("Awaiting Inspection") ;
		calculator.addRating(null) ;
		calculator.addRating(undefined) ;
		calculator.addRating("Random string") ;

		expect(calculator.getPercentages()["Exempt"]).toBe(20) ;
		expect(calculator.getPercentages()["Pass"]).toBe(20) ;
		expect(calculator.getPercentages()["Pass and Eat Safe"]).toBe(20) ;
		expect(calculator.getPercentages()["Improvement Required"]).toBe(20) ;
		expect(calculator.getPercentages()["Awaiting Inspection"]).toBe(20) ;		
		
	});	
	
});