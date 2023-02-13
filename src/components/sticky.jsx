import '../styles/sticky.css'

const Sticky = ({ text, color }) => {
    return (
        <div className={'sticky sticky' + color}>
            <textarea className="sticky__text" defaultValue={text}></textarea>
        </div>
    )
}

export default Sticky