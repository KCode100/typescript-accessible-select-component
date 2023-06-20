import { useState } from "react"
import Select, { SelectOption } from "./components/Select"

const options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "Third", value: 3},
  {label: "Fourth", value: 4},
  {label: "Fifth", value: 5},
]

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0])
  const [value2, setValue2] = useState<SelectOption[]>([options[0]])

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>✨ Typescript - React - Accessibility ✨</h1>
      <h2>Single Select</h2>
      <Select options={options} value={value1} onChange={option => setValue1(option)} />
      <h2>Multiple Select</h2>
      <Select options={options} value={value2} onChange={option => setValue2(option)} multiple />
    </div>
  )
}

export default App
