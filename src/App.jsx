import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/header'
import Sticky from './components/sticky'
import AddSticky from './components/addSticky'
import Toolbar from './components/toolbar'
import './styles/base.css'
import './styles/variables.css'

function App() {

  const stickyColors = ['--color-sticky-1', '--color-sticky-2', '--color-sticky-3', '--color-sticky-4']

  const [stickes, setStickies] = useState(() => {
    return JSON.parse(localStorage.getItem('stickies')) || []
  })

  useEffect(() => {
    localStorage.setItem('stickies', JSON.stringify(stickes))
  }, [stickes])

  const addSticky = () => {

    const sticky = {
      text: '',
      color: stickyColors[Math.floor(Math.random() * stickyColors.length)],
      id: nanoid()
    }

    setStickies([...stickes, sticky])

  }

  const saveStickyText = (id, inputValue) => {

    const allStickies = stickes

    const updatedSticky = allStickies.find(sticky => sticky.id === id)
    updatedSticky.text = inputValue

    setStickies([...allStickies])

  }

  const [toolbarStatus, setToolbarStatus] = useState(false)
  const [activeSticky, setActiveSticky] = useState('')

  const stickyActive = (toolbarCurrentStatus, clickedStickyId) => {

    setToolbarStatus(() => toolbarCurrentStatus)
    setActiveSticky(() => clickedStickyId)
    
  }

  const deleteSticky = () => {

    const allStickies = stickes
    const allExceptDeletedSticky = allStickies.filter(sticky => sticky.id !== activeSticky)

    setStickies(allExceptDeletedSticky)

  }

  return (
    <div className="app">
      <Header></Header>
      <section className="sticky-container">
        {stickes.map(sticky => {
          return <Sticky key={sticky.id} {...sticky} saveStickyText={saveStickyText} stickyActive={stickyActive}></Sticky>
        })}
        <AddSticky addSticky={addSticky}></AddSticky>
      </section>
      {toolbarStatus ? <Toolbar deleteSticky={deleteSticky} /> : null}
    </div>
  )
}

export default App
