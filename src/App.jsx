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

  const [stickies, setStickies] = useState(() => {
    return JSON.parse(localStorage.getItem('stickies')) || []
  })

  useEffect(() => {
    localStorage.setItem('stickies', JSON.stringify(stickies))
  }, [stickies])

  const addSticky = () => {

    const sticky = {
      text: '',
      color: stickyColors[Math.floor(Math.random() * stickyColors.length)],
      id: nanoid()
    }

    setStickies([...stickies, sticky])

  }

  const saveStickyText = (id, inputValue) => {

    const allStickies = stickies

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

    const allStickies = stickies
    const allExceptDeletedSticky = allStickies.filter(sticky => sticky.id !== activeSticky)

    setStickies(allExceptDeletedSticky)

  }

  const changeStickyColor = (newColor) => {

    const allStickies = stickies

    const updatedSticky = allStickies.find(sticky => sticky.id === activeSticky)
    updatedSticky.color = newColor

    setStickies([...allStickies])

  }

  return (
    <div className="app">
      <Header></Header>
      <section className="sticky-container">
        {stickies.map(sticky => {
          return <Sticky key={sticky.id} {...sticky} saveStickyText={saveStickyText} stickyActive={stickyActive}></Sticky>
        })}
        <AddSticky addSticky={addSticky}></AddSticky>
      </section>
      {toolbarStatus ? <Toolbar deleteSticky={deleteSticky} changeStickyColor={changeStickyColor} stickyColors={stickyColors}/> : null}
    </div>
  )
}

export default App
