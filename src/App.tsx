import './App.scss'
import { Intro } from './components/intro/Intro'
import { Section } from './components/section/Section'
import { Topbar } from './components/topbar/Topbar'

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
