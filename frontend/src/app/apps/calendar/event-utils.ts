import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'family event',
    start: TODAY_STR,
    label: 'success',
    type: 'event',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#00ba34',   // an option!
    textColor: '#00ba34' // an option!

  },
  {
    id: createEventId(),
    title: 'product launch',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',
    label: 'primary',
    type: 'event',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#8e1dce',   // an option!
    textColor: '#8e1dce' // an option!

  },
  {
    id: createEventId(),
    title: 'team meeting',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    label: 'info',
    type: 'task',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#00a5fa',   // an option!
    textColor: '#00a5fa' // an option!
  },
  {
    id: createEventId(),
    title: 'ui/ux design team',
    start: '2023-08-21T09:00:00',
    end: '2023-08-21T10:00:00',
    label: 'warning',
    type: 'task',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#ff8f2f',   // an option!
    textColor: '#ff8f2f' // an option!
  },
  {
    id: createEventId(),
    title: 'Project update',
    start: '2023-08-21T11:00:00',
    end: '2023-08-21T12:00:00',
    label: 'secondary',
    type: 'event',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#6727f8',   // an option!
    textColor: '#6727f8' // an option!
  },
  {
    id: createEventId(),
    title: 'Friends reunion',
    start: '2023-08-21T14:00:00',
    end: '2023-08-21T15:00:00',
    label: 'info',
    type: 'reminder',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#00a5fa',   // an option!
    textColor: '#00a5fa' // an option!
  },
  {
    id: createEventId(),
    title: 'Development meeting',
    start: '2023-08-22T10:00:00',
    end: '2023-08-22T11:00:00',
    label: 'primary',
    type: 'reminder',
    description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    color: '#8e1dce',   // an option!
    textColor: '#8e1dce' // an option!
  }
];

export function createEventId() {
  return String(eventGuid++);
}
