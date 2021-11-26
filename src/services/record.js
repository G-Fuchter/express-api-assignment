const recordModel = require("../models/record");

// Service: given a range of dates and counts, it returns the records
exports.queryRecords = async (startDate, endDate, minCount, maxCount) => {
  const filteredRecords = await recordModel.aggregate([
    {
      $addFields: {
        totalCounts: { $sum: "$counts" },
      },
    },
    {
      $match: {
        createdAt: { $gt: startDate, $lt: endDate },
        totalCounts: { $gt: minCount, $lt: maxCount },
      },
    },
  ]);

  return filteredRecords;
};
