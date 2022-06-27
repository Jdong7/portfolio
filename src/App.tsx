import './App.scss'
import { Intro } from './Components/Intro/Intro'
import { Section } from './Components/Section/Section'
import { Topbar } from './Components/Topbar/Topbar'

function App() {

  return (
    <div className="App">
      <Topbar/>
      <div className='scroller'>
        <Intro/>
        <Section/>
      </div>
    </div>
  )
}

export default App
