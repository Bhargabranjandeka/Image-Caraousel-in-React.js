import { useState } from 'react'
import data from './Dataimg/img'
import Coursel from './Coursel'
function App() {
  const [dataimages, setdataimgs] = useState(data)
  const {demo}=dataimages
  
  return <Coursel demo={demo}/>
}

export default App
