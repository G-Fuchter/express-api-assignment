const sinon = require("sinon");
const recordService = require("../services/record");
const recordController = require("./record");

describe("Testing record controller", () => {
  // Reusable mocks and variables
  var dbResponse = [];
  var req = {};
  var res = {};
  var next = () => {};

  beforeEach(() => {
    dbResponse = [
      {
        key: "Jke2Rp",
        value: "KePx9D",
        totalCounts: 9,
      },
    ];
    req = {
      body: {
        startDate: "2015-03-02",
        endDate: "2020-05-01",
      },
    };
    next = sinon.stub();
  });
  res = {
    status: () => {
      return {
        json: () => {},
      };
    },
  };
  afterEach(() => {
    sinon.restore();
  });

  test("should return 200 when given valid inputs", async () => {
    // Arrange
    sinon.stub(recordService, "queryRecords").returns(dbResponse);
    resStub = sinon.stub(res, "status");
    resStub.returns({ json: () => {} });

    // Act
    await recordController.queryRecords(req, res, next);

    // Assert
    expect(next.called).not.toBe(true);
    expect(resStub.called).toBe(true);
  });

  test("should handle errors to the next middleware", async () => {
    // Arrange
    sinon.stub(recordService, "queryRecords").throws();

    // Act
    await recordController.queryRecords(req, res, next);

    // Assert
    expect(next.called).toBe(true);
  });
});
