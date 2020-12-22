import data from './data';
function App() {
  return (
    <div className="grid-container">
  <header className="rows">
    <div>
      <a href="/" className="brand">Jamia</a>
    </div>
    <div>
      <a href="/cart">Cart</a>
      <a href="/signin">Sign in</a>
    </div>
  </header>
  <main>
    <div className="rows center">
      {
        data.products.map(product=>( <div className="card" key={product._id}>
        <a href={`/products/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
        <a href={`/products/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <div className="rating" >
            <span><i className="fa fa-star" /></span>
            <span><i className="fa fa-star" /></span>
            <span><i className="fa fa-star" /></span>
            <span><i className="fa fa-star" /></span>
            <span><i className="fa fa-star-o" /></span>
          </div>
          <div className="price">
            ${product.price}
          </div>
        </div>
      </div>))
      }
     
    
    </div>
  </main>
  <footer className="rows center">
    All rights Reserverd
  </footer>
</div>

  );
}

export default App;
