import * as React from "react";
import {
  ScheduleComponent,
  Week,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
  getStartEndHours,
} from "@syncfusion/ej2-react-schedule";

class Schedule extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 1,
        Subject: "Aerial yoga level 1",
        StartTime: new Date(2020, 4, 5, 10, 0),
        EndTime: new Date(2020, 4, 5, 11, 0),
        IsAllDay: false,
      },
      {
        Id: 2,
        Subject: "Aerial yoga level 3",
        StartTime: new Date(2020, 4, 5, 12, 0),
        EndTime: new Date(2020, 4, 5, 13, 0),
        IsAllDay: false,
      },
      {
        Id: 3,
        Subject: "Acro yoga",
        StartTime: new Date(2020, 4, 6, 14, 0),
        EndTime: new Date(2020, 4, 6, 15, 0),
        IsAllDay: false,
      },
    ];
  }

  render() {
    return (
      <section id="schedule" className="schedule">
        <div className="app-container">
          <h2 className="title">Class Schedule</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span> Ducimus cumque quidem quia velit nostrum ratione </span>{" "}
            alias molestiae nobis officia. Ducimus cumque quidem quia velit
            nostrum ratione alias molestiae nobis officia.{" "}
            <span>Ducimus cumque quidem quia velit nostrum ratione </span> alias
            molestiae nobis officia.
          </p>

          <ScheduleComponent
            width="100%"
            selectedDate={new Date(2020, 4, 5)}
            eventSettings={{ dataSource: this.data }}
          >
            <ViewsDirective>
              <ViewDirective option="Week" startHour="07:00" endHour="22:00" />
              <ViewDirective option="Month" showWeekend={false} />
            </ViewsDirective>
            <Inject services={[Week, Month]} />
          </ScheduleComponent>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            cumque quidem quia velit nostrum ratione alias molestiae nobis
            officia. Ducimus cumque quidem quia velit nostrum ratione alias
            molestiae nobis officia. Ducimus cumque quidem quia velit nostrum
            ratione alias molestiae nobis officia.
          </p>
        </div>
      </section>
    );
  }
}

export default Schedule;
