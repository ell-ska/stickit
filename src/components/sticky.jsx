import '../styles/sticky.css'

const Sticky = ({ text, color, id, saveStickyText }) => {

    const handleToolbar = (stickyIsFocused) => {

        const toolbar = document.querySelector('.toolbar')

        if (stickyIsFocused) {
            toolbar.classList.add('toolbar--active')
        } else {
            toolbar.classList.remove('toolbar--active')
        }

    }

    return (
        <div className={'sticky sticky' + color}>
            <textarea
                className="sticky__text"
                defaultValue={text}
                onChange={e => {
                    const inputValue = e.target.value
                    saveStickyText(id, inputValue)
                }}
                onFocus={() => handleToolbar(true)}
                onBlur={() => handleToolbar(false)}
            ></textarea>
        </div>
    )
}

export default Sticky