// import Home from "./(pages)/home/page";
// import Login from "./(pages)/login/Login";
import PrivateRoot from "./privateRoot";
import { ProductType } from "@/app/interface";
import { Row } from "antd";
import ModalComponent from "@/app/components/Modal";
import Product from "@/app/components/Product";
import Link from 'next/link'
const App = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  return (
    <>
      <PrivateRoot>
        <ModalComponent />
        <Link href={"/home"}>Homega o'tish</Link>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </PrivateRoot>
    </>
  );
};

export default App;
