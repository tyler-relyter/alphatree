import React from "react";
import treephoto from "../img/treephoto31.jpg";
import trimmedpine from "../img/trimmed_pine.jpg";
import nicetree from "../img/nice_trim.jpg";

const Home = () => {
    return (
        <div className="container-fluid">
            <h1 className="display-1 text-center"><b>Welcome to Alpha Tree Surgeons</b></h1>
            <div className="row justy-content-center">
                <div className="col">
                    <img src={trimmedpine} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                </div>
                <div className="col">
                    <img src={treephoto} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                </div>
                <div className="col">
                    <img src={nicetree} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h3 className="display-3 bg-dark text-white text-center"><b>CALL FOR A FREE ESTIMATE!</b></h3>
                </div>
                <div className="col"></div>
            </div>
            <h6 className="text-center text-uppercase display-4">Trust us with your projects</h6>
        </div>

    )
}



export default Home;