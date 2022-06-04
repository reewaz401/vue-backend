exports.resMessage = async function (rows, res, err) {
  // res.setHeader('Content-Type', 'application/json')
  if (err) {
    return res.json({ status: 503, message: err.toString() });
  } else if (rows == "" || rows == null) {
    return res.json({ status: 401, message: "No Data Found" });
  } else {
    return res.json({ status: 200, data: rows });
  }
};
