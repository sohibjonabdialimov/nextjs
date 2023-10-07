import styles from "./page.module.css";
import { ProductType } from "./interface";
import Product from "./components/Product";
import { Card, Col, Row } from "antd";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return (
    <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </Row>
  );
}
