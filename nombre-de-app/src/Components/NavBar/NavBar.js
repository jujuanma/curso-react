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
            <img className='Logo' src='https://cdn-icons.flaticon.com/png/128/2981/premium/2981297.png?token=exp=1645667523~hmac=35b90f731afc8cabffe6c04ed5dcb4ab'></img>
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