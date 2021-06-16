import React from "react";
import StatusDisplay from "../components/StatusDisplay";
import WorkingTime from "../components/WorkingTime";
import "../public/css/common.css";
import "../public/css/homePage.css";
import arriveHome from "../public/images/arrivehome.svg";
import sleepTime from "../public/images/sleeptime.svg";

const HomePage = ({
  hours,
  setHours,
  newNumber,
  setNewNumber,
  newInfo,
  setNewInfo,
  oldWorkHour,
  setOldWorkHour,
}) => {
  return (
    <div className="appContent">
      <div className="container">
        <div className="stateArea">
          <StatusDisplay
            iconImg={arriveHome}
            statusName={"Arrive time"}
            time={"19:20"}
          />
          <div className="spacingBlock"></div>
          <StatusDisplay
            iconImg={sleepTime}
            statusName={"Sleep time"}
            time={"0:00"}
          />
        </div>
      </div>
      <div className="calenderArea">
        <div className="container">
          <h2>Working time</h2>
        </div>
        {/* <WeekCalender /> */}
        <WorkingTime
          hours={hours}
          setHours={setHours}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          newInfo={newInfo}
          setNewInfo={setNewInfo}
          oldWorkHour={oldWorkHour}
          setOldWorkHour={setOldWorkHour}
        />
      </div>
    </div>
  );
};

export default HomePage;
