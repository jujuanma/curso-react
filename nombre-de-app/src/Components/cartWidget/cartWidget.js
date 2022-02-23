import ItemCount from "../itemCount/itemCount";

const CartWidget = () => {
   
    return(
        <div>

        <button className="Option" style={{ backgroundColor: 'blue', color: 'white', fontSize: 20}}>
            <img src="https://as2.ftcdn.net/v2/jpg/01/63/42/79/1000_F_163427943_W56xtj7YydS4YujdUqQot94IINtt91FV.jpg" height='25rem' width='25rem' alt='cart' style={{marginRight: 15}}/>
          0
        </button>
        </div>
    );
}

export default CartWidget