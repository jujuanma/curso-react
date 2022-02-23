import { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemCount from "../itemCount/itemCount"
import { getProducts } from '../item/item'




const ItemListContainer = ({greeting = 'Cantidad que lleva'})=> {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])
    
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }

    console.log(products)

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/>
            <ul className='ulProductos'>
                {products.map(product => {
                    return (
                        <div>
                    <li key={product.id}>{product.name}</li>
                    </div>
                        )
                })}
                
            </ul>
        </div>
    )    
    
}

export default ItemListContainer