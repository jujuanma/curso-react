import './NavBar.css'
import Button from '../button/button'
import CartWidget from '../cartWidget/cartWidget'

const NavBar = ({title,...rest}) => {
    const handleCelular = () => (
        console.log('Celular')
    )
    const handTablet = () => (
        console.log('tablet')
    )
    const handleComputadora = () => (
        console.log('Computadora')
    )


    return (

        <nav className='NavBar'>
            <div>
                <h3>{title}</h3>
            </div>
            <div className='Categories'>
            <Button   colorText='white' handleClick={handleCelular}>Celular</Button>
            <Button   colorText='white' handleClick={handTablet}>tablet</Button>
            <Button   colorText='white' handleClick={handleComputadora}>computadora</Button>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar