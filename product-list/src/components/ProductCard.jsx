function ProductCard({ product }) {
    const handleAddToCart = () => {
        console.log(product.name);
    };

    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'contain'
                }}
            />

            <div className="product-info">
                <h3>{product.name}</h3>

                <p className="price">${product.price}</p>

                <p>
                    <strong>Category:</strong> {product.category}
                </p>

                <p>
                    <strong>Rating:</strong> ⭐ {product.rating}
                </p>

                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;