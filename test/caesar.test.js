// Write your tests here!
const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return the input shifted by the given value", () => {
      const input = "HELLO";
      const shift = 1;
      const actual = caesar(input, shift, encode = true);
      const expected = "ifmmp";
      
      expect(actual).to.eql(expected);
    });
  });

  describe("caesar", () => {
    it("should return the input shifted back by the given value", () => {
      const input = "HELLO";
      const shift = -2;
      const actual = caesar(input, shift, encode = true);
      const expected = "fcjjm";
      
      expect(actual).to.eql(expected);
    });
  });

  describe("caesar", () => {
    it("should return false if no shift amount is given", () => {
      const input = "HELLO";
      const shift = '';
      const actual = caesar(input, shift, encode = true);
      const expected = false;
      
      expect(actual).to.eql(expected);
    });
  });

  describe("caesar", () => {
    it("should return with spaces included", () => {
      const input = "Hello my friend";
      const shift = 5;
      const actual = caesar(input, shift, encode = true);
      const expected = "mjqqt rd kwnjsi";
      
      expect(actual).to.eql(expected);
    });
  });

  describe("caesar", () => {
    it("should ignore capital letters", () => {
      const input = "HellO mY friend";
      const shift = 5;
      const actual = caesar(input, shift, encode = true);
      const expected = "mjqqt rd kwnjsi";
      
      expect(actual).to.eql(expected);
    });
  });