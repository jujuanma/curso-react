import './itemList.css'
import Item from "../item/item"

const ItemList = ({ products }) => {

    return (
        <ul className="ListGroup">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul>
    )
}

export default ItemList