import './NavBar.css'
import CartWidget from '../cartWidget/cartWidget'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../../asyncmock'


const NavBar = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
      <nav className="NavBar" >
        <div>
            <img className='Logo' alt='logo' src="https://brandeps.com/icon-download/S/Shop-icon-vector-02.svg"></img>
        </div>
        <div>
            <h3>Shope</h3>
        </div>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar