import React from 'react';

const Calendar = ({onClick, value}) => {
  return (
    <>
      <button className="converter__calendar" type="button" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

Calendar.displayName = `Calendar`;

export default Calendar;
