import { useState, useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/index";
import SearchBar from "../../Components/SearchBar/index";

const Home = () => {
  const { filteredItems } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl">Products</h1>
      </div>

      <SearchBar />

      <div className="grid gap-4 mt-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] w-full max-w-screen-lg">
        {filteredItems?.length <= 0 && <div className="flex w-full justify-center p-6"><h1 className="font-semibold text-slate-700">No items founded</h1></div>}
        {
          filteredItems?.map((item) => {
            return (
              <Card key={item.id} data={item} />
            )
          })
        }
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;