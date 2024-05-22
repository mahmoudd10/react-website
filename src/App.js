// condition  ? true  : false  && do the order

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Banners from "./Component/Banners";
import Blog from "./Component/Blog";
import Products from "./Component/Products";
import TwoBanners from "./Component/TwoBanners";
import ProductDetails from "./Component/ProductDetails";
import CollectionList from "./Component/CollectionList";
import LatestBlog from "./Component/LatestBlog";
import Recommended from "./Component/Recommended";
import Brands from "./Component/Brands";
import Footer from "./Component/Footer";
import "./css/responsive.css";
import Categories from "./Component/Categories";
import CollectionProducts from "./Component/CollectionProducts";
import CategoriesPhone from "./Component/CategoriesPhone";
import CategoriesWatch from "./Component/CategoriesWatch";
import CategoriesCamera from "./Component/CategoriesCamera";

export default function App() {
  let goUp = () => {
    window.scroll({
      top: 0,
      right: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <button onClick={goUp} className="goUp">
        <img src="/svg icons/Arrow Up.png" alt="" />
      </button>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banners />
              <Products />
              <TwoBanners />
              <CollectionList />
              <Recommended />
              <Brands />
              <LatestBlog />
              <Footer />
            </>
          }
        />
        <Route
          path="categories"
          element={
            <>
              <Categories />
              <Footer />
            </>
          }
        />
        <Route path="/categories/category" element={<CollectionProducts />} />
        <Route
          path="/categories/smart-phone"
          element={
            <>
              <CategoriesPhone />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories/smart-Watch"
          element={
            <>
              <CategoriesWatch />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories/Camera"
          element={
            <>
              <CategoriesCamera />
              <Footer />
            </>
          }
        />
        <Route
          path="Products"
          element={
            <>
              <h1>Products</h1>
            </>
          }
        />
        <Route
          path="blog"
          element={
            <>
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="pages"
          element={
            <>
              <h1>pages</h1>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>this page not found</h1>
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <>
              <ProductDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}
