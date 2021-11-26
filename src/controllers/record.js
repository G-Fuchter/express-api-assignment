const recordService = require("../services/record");

exports.queryRecords = async (req, res, next) => {
  const startDate = new Date("2016-01-01");
  const endDate = new Date();
  const records = await recordService.queryRecords(startDate, endDate, 0, 100);
  res.status(200).json({
    code: 0,
    msg: "Success",
    records: records.map(r => {
      return {
        key: r.key,
        value: r.value,
        totalCounts: r.totalCounts
      }
    })
  });
};
