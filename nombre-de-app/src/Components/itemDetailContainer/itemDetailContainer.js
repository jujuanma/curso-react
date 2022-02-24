import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { getProduct } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState('button')

    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    const handleCount = () => {
        if(counter === 'button'){
            setCounter('input')
        } else {
            setCounter('button')
        }
    }

    return (
        <div className="ItemDetailContainer" >
            <button onClick={handleCount}>Minorista/mayorista</button>
            { 
                loading ? 
                    <SpinnerCircular /> :
                product ? 
                    <ItemDetail  {...product} inputType={counter}/> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer