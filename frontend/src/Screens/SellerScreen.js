import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import Product from "../components/Product";
function SellerScreen(props) {
  const sellerId = props.match.params.id;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);
  return (
    <div className="rows top">
      <div className="col-1">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ul className="card card-body">
            <li>
              <div className="rows start">
                <div className="p-1">
                  <img
                    className="small"
                    src={user?.seller?.logo}
                    alt={user?.seller?.name}
                  />
                </div>
                <div>
                  <h1>{user?.seller?.name}</h1>
                </div>
              </div>
            </li>
            <li>
              <Rating
                rating={user?.seller?.rating}
                numReviews={user?.seller?.numReviews}
              ></Rating>
            </li>
            <li>
              <a href={`mailto:${user?.email}`}>Contact seller</a>
            </li>
            <li>{user?.seller?.description}</li>
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
              <MessageBox>No products found</MessageBox>
            )}
            <div className="rows center">
              {products?.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SellerScreen;
