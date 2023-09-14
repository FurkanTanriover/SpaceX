import React from "react";

const fakeDateData = () => {
  const dayData = [
    { id: 0, day: "1", dayName: "Sun" },
    { id: 1, day: "2", dayName: "Mon" },
    { id: 2, day: "3", dayName: "Tue" },
    { id: 3, day: "4", dayName: "Wed" },
    { id: 4, day: "5", dayName: "Thu" },
    { id: 5, day: "6", dayName: "Fri" },
    { id: 6, day: "7", dayName: "Wed" },
    { id: 7, day: "8", dayName: "Thu" },
    { id: 8, day: "9", dayName: "Fri" },
    { id: 9, day: "10", dayName: "Sat" },
    { id: 10, day: "11", dayName: "Sun" },
    { id: 11, day: "12", dayName: "Mon" },
    { id: 12, day: "13", dayName: "Tue" },
    { id: 13, day: "14", dayName: "Wed" },
    { id: 14, day: "15", dayName: "Thu" },
  ];

  const daysOfMonth = [];

  for (let dayNumber = 1; dayNumber <= 15; dayNumber++) {
    const dayName = dayData.find((data) => data.day === dayNumber.toString())?.dayName;
    const dayFullName = dayName;

    const newDayData = {
      id: dayNumber,
      day: dayNumber.toString(),
      dayName: dayFullName,
    };

    daysOfMonth.push(newDayData);
  }

  return daysOfMonth;
};

export default fakeDateData;
