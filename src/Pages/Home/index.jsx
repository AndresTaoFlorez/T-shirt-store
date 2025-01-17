import { useState, useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/index";

const Home = () => {
  const { items } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] w-full max-w-screen-lg">
        {
          items?.map((item) => {
            return (
              <Card key={item.id} data={item} />
            )
          }
          )
        }
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;