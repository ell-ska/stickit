import '../styles/sticky.css'

const Sticky = ({ text, color, id, saveStickyText, stickyActive }) => {

    return (
        <div className={`sticky sticky${color}`}>
            <textarea
                className="sticky__text"
                defaultValue={text}
                onChange={e => {
                    const inputValue = e.target.value
                    saveStickyText(id, inputValue)
                }}
                onClick={() => stickyActive(true, id)}
                onBlur={() => stickyActive(false, id)}
            ></textarea>
        </div>
    )
}

export default Sticky