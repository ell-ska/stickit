import '../styles/sticky.css'

const Sticky = ({ text, color, id, saveStickyText }) => {

    return (
        <div className={'sticky sticky' + color}>
            <textarea
                className="sticky__text"
                defaultValue={text}
                onChange={(e) => {
                    const inputValue = e.target.value
                    saveStickyText(id, inputValue)
                }}
            ></textarea>
        </div>
    )
}

export default Sticky