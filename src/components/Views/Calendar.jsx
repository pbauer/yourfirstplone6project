import React from 'react';
import { Container } from 'semantic-ui-react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

const CalandarView = (props) => {
  const searchRequests = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const results = searchRequests.items;

  React.useEffect(() => {
    dispatch(
      searchContent('/', {
        portal_type: ['Event', 'talk'],
        fullobjects: true,
      }),
    );
  }, [dispatch]);

  return (
    <Container className="view-wrapper">
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">Schedule</h1>
          <p className="documentDescription">Here you can see all the talks</p>
        </header>
        <FullCalendar
          defaultView="resourceTimeGridDay"
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          nowIndicator="true"
          minTime="08:00:00"
          firstDay="1"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            resourceTimeGridPlugin,
          ]}
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimeGridDay,timeGridWeek,dayGridMonth,listWeek',
          }}
          resources={[
            {
              id: 'Auditorium',
              title: 'Auditorium',
            },
            {
              id: '101',
              title: 'Room 101',
            },
            {
              id: '201',
              title: 'Room 201',
            },
          ]}
          events={results.map((event, index) => {
            let resourceId = event.room?.token || 'Auditorium';
            let title = event.speaker
              ? event.speaker + ': ' + event.title
              : event.title;
            return {
              id: index + 1,
              resourceId: resourceId,
              title: title,
              start: event.start,
              end: event.end,
            };
          })}
        />
      </article>
    </Container>
  );
};

export default CalandarView;
