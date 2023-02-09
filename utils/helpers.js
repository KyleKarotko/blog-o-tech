const { format } = require("date-fns");

module.exports = {
  format_date: (date) => {
    const dateObj = new Date();
    return `${format(dateObj, "MM-dd-yyyy")}`;
  },
};