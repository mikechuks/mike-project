import React from 'react';
import {popularProduct} from  "../data";
import Product from './Product';
import styled from "styled-components";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const Container = styled.div`
   padding :20px ;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`
const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async() => {
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` 
                                         : "http://localhost:5000/api/products");
       setProducts(res.data);
      }
      catch(err){

      }
    };
    getProducts()
  },[cat]);
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>(
        Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
        ))
    ))
  },[products, cat, filters]);
  useEffect(()=>{
     if((sort === "newest")){
       setFilteredProducts((prev)=>
       [...prev].sort((a,b) => a.createdAt - b.createdAt)
       )
     }else if((sort === "asc")){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.price - b.price)
        )
     }else if((sort === "asc")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)
      )
   }
  },[sort])
  return (
    <Container>
      {cat ? filteredProducts.map((items) => <Product items={items} key={items.id}/>)
           : products.slice(0, 8).map((items) => <Product items={items} key={items.id}/> )}
    </Container>
  )
}

export default Products;