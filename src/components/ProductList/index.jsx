import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ addProductCart, resultList }) => {
   

   return (
      <ul className="list__container">
         {resultList.length == 0 ? <p className="heading two">Nenhum Produto Encontrado...</p> : resultList.map((product) => (
            <ProductCard key={product.id} product={product} addProductCart={addProductCart}/>
         ))}
      </ul>
   );
};
