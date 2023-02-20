import '../styles/toolbar.css'

const Toolbar = ({ deleteSticky, changeStickyColor, stickyColors }) => {

    return (
        <div className="toolbar">
            {/* <div className="text">
                <button className="text__bold">B</button>
                <button className="text__italic">I</button>
                <button className="text__underline">U</button>
                <button className="text__strikethrough">S</button>
            </div> */}
            <div className="color">
                {stickyColors.map(color => {
                    return <button key={color} className={"color__swatch color__swatch" + color} onClick={() => changeStickyColor(color)}></button>
                })}
            </div>
            <div className="delete">
                <button className="delete__button" onClick={() => deleteSticky()}>Delete</button>
            </div>
        </div>
    )
}

export default Toolbar