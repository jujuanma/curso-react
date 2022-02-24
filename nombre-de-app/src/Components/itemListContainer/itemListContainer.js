import { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemList from '../itemList/itemList'
import { getProducts } from '../../asyncmock'
import { SpinnerCircular } from 'spinners-react';

const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

 

    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })


        return (() => {
            setProducts()
        
        })          
    }, [])
    
    return (
        <div onClick={() => console.log('hice click en itemListContainer')} className="ItemListContainer">
            {
                loading ? 
                <SpinnerCircular /> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer