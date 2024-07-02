"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { getProducts } from '../utils/api';
import React, { useEffect, useState } from 'react';



export default function Home() {

  
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchProducts();
    }, []);
  
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
  {products.map((item, index) => (
    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="h-[250px]">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.name}
          className="w-full object-cover h-[200px]"
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">GHC{item.price}</p>
      </CardFooter>
    </Card>
  ))}
</div>
  );
}
