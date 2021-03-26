// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should return a correct string of values", () => {
      const input = "a";
      const actual = polybius(input, encode = true);
      const expected = '11';
      
      expect(actual).to.eql(expected);
    });
  });

  describe("polybius", () => {
    it("should return correct letters when numbers are entered and encode = false", () => {
      const input = "112152 11 5525";
      const actual = polybius(input, encode = false);
      const expected = 'abk a zw';
      
      expect(actual).to.eql(expected);
    });
  });

  describe("polybius", () => {
    it("should false if the input is an odd number", () => {
      const input = "1";
      const actual = polybius(input, encode = false);
      const expected = false;
      
      expect(actual).to.eql(expected);
    });
  });