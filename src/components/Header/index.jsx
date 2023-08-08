import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss"

export const Header = ({ count, setIsVisible , setSearch}) => {
   const [value, setValue] = useState("")
   const submit = (e)=>{
      e.preventDefault()
      setSearch(value)
      setValue("")

   }

      return (
         <header className={styles.header__container}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.div__container}>
               <button className={styles.cart}
                  onClick={() => setIsVisible(true)}>
                  <MdShoppingCart size={21} />
                  <span>
                     {count}
                  </span>
               </button>
               <form className={styles.form__container}
                  onSubmit={submit}   
               >
                  <input
                     required
                     placeholder="Digitar Pesquisa"
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit"
                     className={styles.button}>
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </header>
      )
   }
