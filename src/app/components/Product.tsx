"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { ProductType } from "../interface";
import Image from "next/image";
import { Card, Col, Row, Button, Modal } from "antd";

const Product: FC<{ product: ProductType }> = ({ product }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
   
      <Col span={8} style={{ padding: "10px" }}>
        <Card bordered={true}>
          <Link
            href={`/product/${product.id}`}
            className="h-96 flex flex-col p-6"
          >
            <div className="relative max-h-80 flex-1">
              <Card>{product.title}</Card>
              <div style={{ textAlign: "center" }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                />
              </div>
            </div>

            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              {product.category}
            </h3>
            <div className="font-semibold flex items-center justify-between mt-4 mb-1">
              <p className="w-44 truncate">{product.title}</p>
              <p>${product.price}</p>
            </div>
          </Link>
        </Card>
      </Col>
    </>
  );
};

export default Product;
