const recordService = require("../services/record");

// POST - Given a record query request, return records that match with the query
exports.queryRecords = async (req, res, next) => {
  try {
    const { minCount, maxCount } = req.body;
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const records = await recordService.queryRecords(
      startDate,
      endDate,
      minCount,
      maxCount
    );

    res.status(200).json({
      code: 0,
      msg: "Success",
      records: records.map((r) => {
        return {
          key: r.key,
          value: r.value,
          totalCounts: r.totalCounts,
        };
      }),
    });
  } catch (err) {
    console.error(err);
    var error = new Error("Unexpected Error");
    error.errorStatus = 1;
    error.httpStatus = 500;
    next(error);
  }
};
