import '../styles/toolbar.css'

const Toolbar = ({ deleteSticky }) => {

    return (
        <div className="toolbar">
            <div className="text">
                <button className="text__bold">B</button>
                <button className="text__italic">I</button>
                <button className="text__underline">U</button>
                <button className="text__strikethrough">S</button>
            </div>
            <div className="color">
                <button className="color__swatch color__swatch--1"></button>
                <button className="color__swatch color__swatch--2"></button>
                <button className="color__swatch color__swatch--3"></button>
                <button className="color__swatch color__swatch--4"></button>
            </div>
            <div className="delete">
                <button className="delete__button" onClick={() => deleteSticky()}>Delete</button>
            </div>
        </div>
    )
}

export default Toolbar