//Chai library is use for expectation and 'expect' keyword is use to
//comapre the result of our implementation and the result we expect to get
var expect = require("chai").expect;
var converter = require("../../src/converter")

describe("Color Code Converter", function() {
	describe("RGB to Hex conversion", function() {
    	it("converts the basic colors", function() {
    		var redHex = converter.rgbToHex(255, 0, 0);
    		var greenHex = converter.rgbToHex(0, 255, 0);
      		var blueHex  = converter.rgbToHex(0, 0, 255);

      		expect(redHex).to.equal("ff0000");
      		expect(greenHex).to.equal("00ff00");
      		expect(blueHex).to.equal("0000ff");
  		});
	});

  	describe("Hex to RGB conversion", function() {
		it("converts the basic colors", function() {
    		var red   = converter.hexToRgb("ff0000");
      		var green = converter.hexToRgb("00ff00");
      		var blue  = converter.hexToRgb("0000ff");

      		//.to.deep.equal it's called a MATCHER and it matches the result of a feature with an expected value
      		expect(red).to.deep.equal([255, 0, 0]);
      		expect(green).to.deep.equal([0, 255, 0]);
      		expect(blue).to.deep.equal([0, 0, 255]);
    	});
  	});
});