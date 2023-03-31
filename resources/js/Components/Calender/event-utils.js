let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

// console.log(todayStr);

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + '- 2023-03-31'
  },
  {
    id: createEventId(),
    title: 'ini merupakan testing',
    start: todayStr + 'T13:00:00' + ' - ' + todayStr + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'oiii 123',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}