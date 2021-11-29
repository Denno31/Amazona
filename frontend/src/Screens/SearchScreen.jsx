import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const SearchScreen = (props) => {
  const { name = "all", category = "all" } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategoryList,
    error: errorCategoryList,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
      })
    );
  }, [category, dispatch, name]);
  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/search/category/${filterCategory}/name/${filterName}`;
  };
  return (
    <div>
      <div className="rows">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products?.length} Results</div>
        )}
      </div>
      <div className="rows top">
        <div className="col-1">
          <h3>Department</h3>
          {loadingCategoryList ? (
            <LoadingBox></LoadingBox>
          ) : errorCategoryList ? (
            <MessageBox variant="danger">{errorCategoryList}</MessageBox>
          ) : (
            <ul>
              {categories?.map((c) => (
                <li key={c}>
                  <Link
                    className={c === category ? "active" : ""}
                    to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products?.length === 0 && (
                <MessageBox>No Product found</MessageBox>
              )}

              <div className="rows center">
                {products.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
