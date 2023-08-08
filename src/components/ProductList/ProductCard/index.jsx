import { useState } from "react"

export const ProductCard = ({ product, addProductCart }) => {
    return (
        <li className="list__card" >
            <div className="card__img">
                <img src={product.img} alt={product.name} />

            </div>
            <div className="card__content">
                <h3
                    className="heading three">{product.name}
                </h3>
                <span
                    className="caption">{product.category}
                </span>
                <span
                    className="body green price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                </span>
                <button
                    className="button grey body " onClick={() => addProductCart(product)}>Adicionar
                </button>
            </div>
        </li>
    )
}
//preciso colocar click no list e quando eu clicar no list ele vai ficar verde e quando eu clicar em outro eu verifico se algum ja esta com focused true eu primeiro desabilito e coloco focused ao que cliquei