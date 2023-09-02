export function forMatISODate(date) {
  // Aug 16, 2023
  let monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysArr = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  let fulldate = new Date(date);
  const day = fulldate.getDay();
  const dayName = daysArr[day - 1];
  const dayDate = fulldate.getDate();
  let month = fulldate.getMonth();
  const year = fulldate.getFullYear();
  let monthName = monthsArr[month];
  return `${dayName} ${monthName} ${dayDate}, ${year}`;
}
