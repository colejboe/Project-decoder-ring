const { expect } = require("chai");
const substitution = require("../src/substitution");


describe("substitution", () => {
    it("should only work if the input alphabet is exactly 26 characters, otherwise return false", () => {
      const input = "heya";
      const alphabet = "KDPQOHEAWXNJZVURSLMGYTFB&.GHT"
      const actual = substitution(input, alphabet, encode = true);
      const expected = false;
      
      expect(actual).to.eql(expected);
    });
  });

  describe("substitution", () => {
    it("should return with spaces included", () => {
      const input = "AA BB";
      const alphabet = "KDPQOHEAWXNJZVURSLMGYTFBCI"
      const actual = substitution(input, alphabet, encode = true);
      const expected = "kk dd";
      
      expect(actual).to.eql(expected);
    });
  });

  describe("substitution", () => {
    it("should return false if characters are not unique", () => {
      const input = "AA BB";
      const alphabet = "KDPQOHEAWXNJZVURSLMGYTFBIII"
      const actual = substitution(input, alphabet, encode = true);
      const expected = false;
      
      expect(actual).to.eql(expected);
    });
  });