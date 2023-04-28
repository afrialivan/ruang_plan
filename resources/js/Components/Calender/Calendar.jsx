import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'

const Calendar = (props) => {

  let eventGuid = 0
  const createEventId = () => {
    return String(eventGuid++)
  }

  // console.log(props.events);



  let kegiatan = props.events.map(plan => {
    if (plan.status_rencana !== 'belum_konfirmasi') {
      // console.log(plan);
      return (
        {
          id: createEventId(),
          title: plan.judul,
          start: plan.mulai,
          end: plan.selesai
        }
      )
    }
    else {
      return (
        {
          id: '',
          title: '',
          start: '',
          end: ''
        }
      )
    }
  })

  // console.log(kegiatan);

  // console.log(props.plans.map(plan => 'oi'))


  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }

  // const handleDateSelect = (selectInfo) => {
  //   let title = prompt('Please enter a new title for your event')
  //   let calendarApi = selectInfo.view.calendar

  //   calendarApi.unselect() // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     })
  //   }
  // }

  const handleEventClick = (clickInfo) => {
    const plan = props.events.find(plan => clickInfo.event.title === plan.judul )
    // console.log(plan.id);
    Inertia.get(`/rencana/${plan.id}`)
    // console.log(clickInfo);
  }

  const handleEvents = (events) => {
    setCurrentEvents(events)
  }

  const renderEventContent = (eventInfo) => {
    const plan = props.events.find(plan => eventInfo.event.title === plan.judul)

    return (
      <>
        {/* <b>{eventInfo.timeText} </b> */}
        {/* <Link href={`/rencana/${plan.id}`}> */}
          <i>{eventInfo.event.title}</i>
        {/* </Link> */}
      </>
    )
  }

  // const renderSidebarEvent = (event) => {
  //   return (
  //     <li key={event.id}>
  //       <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
  //       <i>{event.title}</i>
  //     </li>
  //   )
  // }

  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  // console.log(INITIAL_EVENTS)

  return (
    <div className='demo-app'>
      {/* {renderSidebar()} */}
      <div className='demo-app-main w-full h-full md:hidden'>
        <FullCalendar
          navLinks={true}
          navLinkDayClick={function (date, jsEvent) {
            // console.log('day', date.toISOString());
            // console.log('coords', jsEvent.pageX, jsEvent.pageY);
          }}
          buttonText={
            {
              today: 'today',
              month: 'bulan',
              week: 'minggu',
              day: 'harian',
              list: 'list'
            }
          }
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // headerToolbar={{
          //   left: 'prev,next today',
          //   center: 'title',
          //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
          // }}
          initialView='dayGridMonth'
          // editable={true}
          // selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={kegiatan} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>
      <div className='demo-app-main w-full h-full hidden md:block text-neutral'>
        <FullCalendar
          navLinks={true}
          navLinkDayClick={function (date, jsEvent) {
            // console.log('day', date.toISOString());
            // console.log('coords', jsEvent.pageX, jsEvent.pageY);
          }}
          buttonText={
            {
              today: 'today',
              month: 'bulan',
              week: 'minggu',
              day: 'harian',
              list: 'list'
            }
          }
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          // editable={true}
          // selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={kegiatan} // alternatively, use the `events` setting to fetch from a feed
          // select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        // eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>
    </div>
  )
}

export default Calendar