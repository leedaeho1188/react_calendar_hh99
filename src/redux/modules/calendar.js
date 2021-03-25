import {firestore} from "../../firebase"

const calendar_db = firestore.collection("schedule")

const ADD_CALENDAR = "calendar/ADD_CALENDAR";
const GET_CALENDAR = "calendar/GET_CALENDAR"
const REMOVE_CALENDAR = "calendar/REMOVE_CALENDAR"
const UPDATE_CALENDAR = "calendar/UPDATE_CALENDAR"
const initialState = {
  schedule: []
}

export const addCalendar = (schedule_info) => {
  return { type: ADD_CALENDAR, schedule_info};
}

export const getCalendar = (schedule_list) => {
  return { type: GET_CALENDAR, schedule_list};
}

export const removeCalendar = (schedule_id) => {
  return { type: REMOVE_CALENDAR, schedule_id};
}

export const updateCalendar = (schedule_id) => {
  return { type: UPDATE_CALENDAR, schedule_id}
}

export const addCalendarFB = (schedule_info) => {
  return function (dispatch){
    let schedule = {
      date: schedule_info.date_time,
      title: schedule_info.todo,
      completed: false,
    };
    calendar_db.add(schedule).then((docRef) => {
      schedule = {...schedule, id: docRef.id }
      dispatch(addCalendar(schedule))
    })
  }
}

export const getCalendarFB = () => {
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
export const removeCalendarFB = (schedule_id) => {
  return function (dispatch){
    calendar_db.doc(schedule_id).delete().then(() => {
      dispatch(removeCalendar(schedule_id))
    })
  }
}

export const updateCalendarFB = (schedule_id) => {
  return function (dispatch){
    calendar_db.doc(schedule_id).update({completed: true}).then(() => {
      dispatch(updateCalendar(schedule_id))
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
      const schedule_ids = state.schedule.map((r, idx) => {
        return r.id; 
      })
      action.schedule_list.filter((r, idx) => {
        if(schedule_ids.indexOf(r.id) === -1){
          schedule_data = [...schedule_data, r]
        }})
      return {...state, schedule: schedule_data}
    }

    case "calendar/REMOVE_CALENDAR": {
        let schedule_data = []
        state.schedule.map((r, idx) => {
        if(r.id !== action.schedule_id){
          schedule_data = [...schedule_data, r ]
        } 
      })
      return {schedule: schedule_data}
    }

    case "calendar/UPDATE_CALENDAR": {
      const schedule_list = state.schedule.map((l, idx) =>{
        if(l.id === action.schedule_id){
          console.log(l)
          return {...l, completed: true};
        }
        return l
      })
      return {schedule: schedule_list}
    }

    default:
      return state
  }
}

