"use client";
import { ProductType } from "@/app/interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default async function Item() {
  const params = await useParams();

  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product: ProductType = await res.json();

  console.log(params);

  return (
    // <div>
    //   <div className="">
    //     <h1>{params.slug}</h1>

    //     <h2>{product.title}</h2>
    //     <p>{product.description}</p>
    //   </div>
    // </div>
    <Card
    bordered={false}
      style={{ width: "650px", textAlign: "center", margin: "auto", padding: "15px 100px" }}
      cover={
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
        />
      }
    >
      {/* <Meta
        title={product.title}
        description={product.description}
      /> */}
     <h1><b>Product title:</b> {product.title}</h1>
     <p><b>Product price:</b> {product.price}</p>
     <p><b>Product description:</b> {product.description}</p>
     <p><b>Product rating:</b> {product.rating.rate}</p>
    </Card>
  );
}
