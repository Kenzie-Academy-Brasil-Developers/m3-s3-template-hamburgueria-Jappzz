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
                    className="body green price">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
                <button
                    className="button grey body " onClick={() => addProductCart(product)}>Adicionar
                </button>
            </div>
        </li>
    )
}