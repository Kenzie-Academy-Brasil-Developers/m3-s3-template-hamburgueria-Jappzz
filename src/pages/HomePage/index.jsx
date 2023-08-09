import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { productsApi } from "../../services/api"
import { toast } from "react-toastify"

export const HomePage = () => {
   const [productList, setProductList] = useState([])
   const localStorageCartList = localStorage.getItem("@CARTlIST")
   const [cartList, setCartList] = useState(localStorageCartList ? JSON.parse(localStorageCartList) : [])

   const count = cartList.length

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await productsApi.get("/products")
            setProductList(data)
         } catch (error) {
            toast.error("erro na Api")
         }
      }
      getProducts()
   }, [])

   const addProductCart = (addingProduct) => {
      if (!cartList.some(product => product.id === addingProduct.id)) {
         setCartList([...cartList, addingProduct])
         toast.success(`${addingProduct.name} adicionado`)
      } else {
         toast.error(`${addingProduct.name} ja adicionado, apenas um por pessoa`)
      }
   }

   const removeProductCart = (productId) => {
      const newCartList = cartList.filter((product) => product.id !== productId)
      setCartList(newCartList)
   }

   const removeAllProductCart = () => {
      setCartList([])
   }
   useEffect(() => {
      localStorage.setItem("@CARTlIST", JSON.stringify(cartList))
   }, [cartList])

   const [isVisible, setIsVisible] = useState(false)

   const [search, setSearch] = useState("")
   
   const searchResult = productList.filter(product => product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search))

   const resultList = search ? searchResult : productList


   return (
      <>
         <Header setIsVisible={setIsVisible}
            count={count}
            setSearch={setSearch}
         />
         <main>
            <ProductList
               resultList={resultList}
               productList={productList}
               addProductCart={addProductCart} />
            {isVisible ? <CartModal
               setIsVisible={setIsVisible}
               removeAllProductCart={removeAllProductCart}
               removeProductCart={removeProductCart} cartList={cartList} /> : false}
         </main>
      </>
   )
}
