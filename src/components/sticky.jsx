import '../styles/sticky.css'

const Sticky = ({ text, color, id, saveStickyText, handleToolbar }) => {

    return (
        <div className={`sticky sticky${color}`}>
            <textarea
                className="sticky__text"
                defaultValue={text}
                onChange={e => {
                    const inputValue = e.target.value
                    saveStickyText(id, inputValue)
                }}
                onClick={() => handleToolbar(true, id)}
            ></textarea>
        </div>
    )
}

export default Sticky