const validator = require("./validation");

describe("Testing validation middleware", () => {
  describe("dateValidation method", () => {
    test("given a correct date, should return a resolved promise", () => {
      // Arrange
      var correctDate = "2019-03-22";

      // Act + Assert
      return expect(
        validator.dateValidation(correctDate)
      ).resolves.not.toThrow();
    });

    test("given an non-existent month, should return a reject promise", () => {
      // Arrange
      const incorrectMonth = "2020-13-22";

      // Act + Assert
      return expect(validator.dateValidation(incorrectMonth)).rejects.toEqual(
        "Invalid date"
      );
    });

    test("given an non-existent day, should return a reject promise", () => {
      const incorrectDay = "2020-11-32";

      // Act + Assert
      return expect(validator.dateValidation(incorrectDay)).rejects.toEqual(
        "Invalid date"
      );
    });

    test("given the wrong date format, should return a reject promise", () => {
      const incorrectFormat = "3/4/2021";

      return expect(validator.dateValidation(incorrectFormat)).rejects.toEqual(
        "Invalid date"
      );
    });
  });
});
