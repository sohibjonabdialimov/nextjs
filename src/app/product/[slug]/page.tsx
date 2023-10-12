"use client";
import { ProductJsonType, ProductType } from "@/app/interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Avatar, Card } from "antd";
import PrivateRoot from "@/app/privateRoot";
import { useEffect, useState } from "react";
const { Meta } = Card;

export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  // let product:  | null = null;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.slug}`)
      .then((res) => {

        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log(res);

        setProduct(res);
        console.log(product);
        
      });
  }, []);

  console.log(params);

  return (
    <PrivateRoot>
      {product && (
        <>
          <Card
            bordered={false}
            style={{
              width: "650px",
              textAlign: "center",
              margin: "auto",
              padding: "15px 100px",
            }}
            cover={
              <Image src={product.url} alt="ok" width={400} height={300} />
            }
          >
            <h1>
              <b>Product title:</b> {product.title}
            </h1>
            {/* <p>
              <b>Product price:</b> {product?.price}
            </p>
            <p>
              <b>Product description:</b> {product?.description}
            </p> */}
          </Card>
        </>
      )}
    </PrivateRoot>
  );
}

{/* <p><b>Product rating:</b> {product.rating.rate}</p> */}