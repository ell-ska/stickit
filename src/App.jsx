import { useState } from 'react'
import { nanoid } from 'nanoid'
import Sticky from './components/sticky'
import AddSticky from './components/addSticky'
import Header from './components/header'
import './styles/base.css'
import './styles/variables.css'

function App() {

  const stickyColors = ['--color-sticky-1', '--color-sticky-2', '--color-sticky-3', '--color-sticky-4']

  const [stickes, setStickies] = useState([
    {
      text: 'hello sticky!',
      color: stickyColors[2],
      id: nanoid()
    },
    {
      text: 'hello sticky number two!',
      color: stickyColors[3],
      id: nanoid()
    }
  ])

  const addSticky = () => {

    const sticky = {
      text: '',
      color: stickyColors[Math.floor(Math.random() * stickyColors.length)],
      id: nanoid()
    }

    setStickies([...stickes, sticky])

  }

  return (
    <div className="app">
      <Header></Header>
      <section className="sticky-container">
        {stickes.map(sticky => {
          return <Sticky key={sticky.id} {...sticky} ></Sticky>
        })}
        <AddSticky addSticky={addSticky}></AddSticky>
      </section>
    </div>
  )
}

export default App
