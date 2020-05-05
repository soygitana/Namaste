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
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 2,
        Subject: "Aerial yoga level 3",
        StartTime: new Date(2020, 4, 5, 12, 0),
        EndTime: new Date(2020, 4, 5, 13, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 3,
        Subject: "Acro yoga",
        StartTime: new Date(2020, 4, 6, 14, 0),
        EndTime: new Date(2020, 4, 6, 15, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 4,
        Subject: "Strala yoga",
        StartTime: new Date(2020, 4, 5, 17, 0),
        EndTime: new Date(2020, 4, 5, 18, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 5,
        Subject: "Strala yoga",
        StartTime: new Date(2020, 4, 6, 17, 0),
        EndTime: new Date(2020, 4, 6, 18, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 6,
        Subject: "Aerial yoga 1",
        StartTime: new Date(2020, 4, 8, 18, 0),
        EndTime: new Date(2020, 4, 8, 19, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 6,
        Subject: "Aerial yoga 1",
        StartTime: new Date(2020, 4, 6, 7, 0),
        EndTime: new Date(2020, 4, 6, 8, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 7,
        Subject: "Body Art",
        StartTime: new Date(2020, 4, 4, 7, 0),
        EndTime: new Date(2020, 4, 4, 8, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 9,
        Subject: "Stretching",
        StartTime: new Date(2020, 4, 8, 8, 0),
        EndTime: new Date(2020, 4, 8, 9, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 10,
        Subject: "Kids yoga",
        StartTime: new Date(2020, 4, 7, 18, 0),
        EndTime: new Date(2020, 4, 7, 19, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 11,
        Subject: "Aerial yoga 3",
        StartTime: new Date(2020, 4, 7, 15, 0),
        EndTime: new Date(2020, 4, 7, 16, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
      },
      {
        Id: 11,
        Subject: "Aerial yoga 2",
        StartTime: new Date(2020, 4, 4, 19, 0),
        EndTime: new Date(2020, 4, 4, 20, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1",
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
            selectedDate={new Date()}
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
