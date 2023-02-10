import '../styles/sticky.css'

const Sticky = ({ text, color }) => {
    return (
        <div className={'sticky sticky' + color}>
            <p className="sticky__text">{text}</p>
        </div>
    )
}

export default Sticky