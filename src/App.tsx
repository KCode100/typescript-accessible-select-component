import { useState } from "react"
import Select, { SelectOption } from "./components/Select"

const options = [
  {label: "first", value: 1},
  {label: "second", value: 2},
  {label: "third", value: 3},
  {label: "fourth", value: 4},
  {label: "fifth", value: 5},
]

function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0])

  return (
    <Select options={options} value={value} onChange={option => setValue(option)} />
  )
}

export default App
