import {firestore} from "../../firebase"

const calendar_db = firestore.collection("schedule")

const ADD_CALENDAR = "calendar/ADD_CALENDAR";
const GET_CALENDAR = "calendar/GET_CALENDAR"

const initialState = {
  schedule: [
    
  ]
}

export const addCalendar = (schedule_info) => {
  return { type: ADD_CALENDAR, schedule_info};
}

export const getCalendar = (schedule_list) => {
  return { type: GET_CALENDAR, schedule_list}
}

export const addCalendarFB = (schedule_info) => {
  return function (dispatch){
    let schedule = {
      date: schedule_info.date_time,
      todo: schedule_info.todo,
    };
    calendar_db.add(schedule).then((docRef) => {
      schedule = {...schedule, id: docRef.id }
      dispatch(addCalendar(schedule))
    })
  }
}

export const getCalendarFB = (schedule_list) => {
  return function (dispatch){
    calendar_db.get().then((docs) => {
      let schedule_data = [];
      docs.forEach((doc) => {
        schedule_data = [...schedule_data, {id: doc.id, ...doc.data()}]
      })
      console.log(schedule_data)
      dispatch(getCalendar(schedule_data))
    })
  }
}

export default function reducer(state = initialState, action ={}){
  switch (action.type){
    
    case "calendar/ADD_CALENDAR": {
      return {...state, schedule: [...state.schedule, action.schedule_info]}
    }

    case "calendar/GET_CALENDAR": {
      let schedule_data = [...state.schedule];
      console.log(schedule_data)
      const schedule_ids = state.schedule.map((r, idx) => {
        return r.id;
      })
      action.schedule_list.filter((r, idx) => {
        if(schedule_ids.indexOf(r.id) === -1){
          console.log(r)
          schedule_data = [...schedule_data, r]
        }
      })
      return {...state, schedule: schedule_data}
    }

    default:
      return state
  }
}

