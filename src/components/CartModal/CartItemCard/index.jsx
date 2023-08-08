import { MdDelete } from "react-icons/md";
import styles from "../CartItemCard/style.module.scss"
import { toast } from "react-toastify";

export const CartItemCard = ({ product, removeProductCart }) => {
   return (
      <li className={styles.list__container}>
         <div className={styles.product__info}>
            <img src={product.img} alt={product.name} />
            <h3 className="heading three">{product.name}</h3>
         </div>
         <button onClick={() => removeProductCart(product.id)}
            aria-label="delete"
            title="Remover item"
            className={styles.button}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
