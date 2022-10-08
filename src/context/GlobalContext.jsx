import { useState } from "react";
import useForm from "../hooks/useForm";
import { createContext} from "react";
import { useRef } from "react";

export const GlobalContext = createContext()

const GlobalProvider = ({children}) =>{
  const [date, setDate] = useState('')
  const [type, setType] = useState('todo')
  const [switchList, setSwitchList] = useState(true)
  const { values: addInputs, setValues} = useForm({ todo: '', event: '' })
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [period, setPeriod] = useState(false)
  const todoInput = useRef('')
  const eventInput = useRef('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || [])
  const [event, setEvent] = useState(JSON.parse(localStorage.getItem('event')) || [])



    return <GlobalContext.Provider value={{todos, setTodos,
    event, setEvent,
    hours, setHours,
    minutes, setMinutes,
    period, setPeriod,
    values:addInputs, setValues,
    date, setDate, switchList, setSwitchList,
    todoInput, eventInput, type, setType}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider
