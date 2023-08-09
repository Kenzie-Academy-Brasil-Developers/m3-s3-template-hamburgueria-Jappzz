import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "../CartModal/style.module.scss"

export const CartModal = ({ cartList, setIsVisible, removeProductCart, removeAllProductCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   return (
      <div role="dialog" className={styles.overlayBox}>
         <div className={styles.header__modal}>
            <h2 className="heading three">Carrinho de compras</h2>
            <button aria-label="close"
               title="Fechar"
               onClick={() => setIsVisible(null)}>
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.cart__container}>
            <ul className={styles.cart__list}>
               {cartList.length === 0 ? (
                  <p className="heading three">Carrinho ainda vazio...</p>
               ) : (
                  cartList.map((product) => (
                     <CartItemCard
                        removeProductCart={removeProductCart}
                        key={product.id}
                        product={product}
                     />
                  ))
               )}
            </ul>

         </div>
         <div className={styles.total__value}>
            <div className={styles.header__total}>
               <p className="body sm total">Total</p>
               <span className="body sm ">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
            <button className="headline" onClick={removeAllProductCart}>Remover todos</button>
         </div>
      </div>
   )
}
