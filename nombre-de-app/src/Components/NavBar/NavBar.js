import './NavBar.css'


const NavBar = (props) => {
const {title} = props

    return (

        <nav className='NavBar'>
            <div>
                <h3>{title}</h3>
            </div>
            <div className='Categories'>

            <button className='Option'>Celulares</button>
            <button className='Option'>Tablets</button>
            <button className='Option'>Notebooks</button>
            </div>
        </nav>

    )
}

export default NavBar