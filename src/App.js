import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductList from "./component/Productlists/Productlist";
import ModelCard from "./component/Models/ModelCard";


function App() {
  return (
    <div className="App">
    <div className="App-main">
        <video autoPlay loop muted className="background-video">
          <source src="/video/mainvideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay-text">
          <h2>새롭게, 한계를 뛰어넘다.</h2>
          <p>The all-new G 580.</p>
          <div className="button-group">
            <button className="btn-outline">자세히 보기</button>
            <button className="btn-primary">메르세데스-벤츠 스토어</button>
          </div>
        </div>
      </div>

      <div>
      <h1 className="product-text">Our Models</h1>
      <ModelCard/>
    </div>
</div>
  );
}

export default App;
