import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CAKE IN TOWN</h1>
      <div className={styles.wrapper} class="row">
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
    </div>
  );
};

export default ProductList ;
