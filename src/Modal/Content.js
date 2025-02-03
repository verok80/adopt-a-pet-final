import './style.css';


const Content = ({setIsOpen, about}) => {
    return(<div className='modal-content'>
        <p>{about}</p>
        <button className='content-close-btn' onClick={ () =>setIsOpen(false)}>Close</button>
    </div>)
}
export default Content;