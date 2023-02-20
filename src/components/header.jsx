import { useEffect, useState } from 'react'
import '../styles/header.css'

const Header = () => {

    const [colorTheme, setColorTheme] = useState(() => {
        return JSON.parse(localStorage.getItem('colorTheme')) || 'original'
    })

    useEffect(() => {
        document.querySelector('.app').className = 'app ' + colorTheme
        localStorage.setItem('colorTheme', JSON.stringify(colorTheme))
    }, [colorTheme])

    const handleMenuButton = () => {
        document.querySelector('.menu').classList.toggle('menu--hidden')
    }

    return (
        <header className="header">
            <div className="branding">
                <span>stickit!</span>
            </div>
            <button className="menu-button" onClick={handleMenuButton}>
                <div></div>
            </button>
            <div className="menu menu--hidden">
                <div className="color-theme">
                    <h3 className="menu__title">Color Theme</h3>
                    <button
                        className={colorTheme === 'original' ? 'color-theme__group--active color-theme__group original' : 'color-theme__group original'}
                        onClick={() => setColorTheme('original')}
                    >
                        <span className="color-theme__name">Original</span>
                        <div className="color-theme__preview">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                    <button 
                        className={colorTheme === 'vivid' ? 'color-theme__group--active color-theme__group vivid' : 'color-theme__group vivid'}
                        onClick={() => setColorTheme('vivid')}
                    >
                        <span className="color-theme__name">Vivid</span>
                        <div className="color-theme__preview">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                    <button
                        className={colorTheme === 'dark' ? 'color-theme__group--active color-theme__group dark' : 'color-theme__group dark'}
                        onClick={() => setColorTheme('dark')}
                    >
                        <span className="color-theme__name">Dark</span>
                        <div className="color-theme__preview">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                </div>
            </div>
      </header>
    )
}

export default Header