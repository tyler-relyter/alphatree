import React from "react";
import sideyard from "../img/sideyard.jpg";
import sideyard_b4 from "../img/sideyard_b4.jpg";
import sideyard_after from "../img/sideyard_after.jpg";
import side from "../img/side.jpeg";
import side_after from "../img/side_after.jpeg";
import blue_building from "../img/blue_building.jpg";
import beside_driveway from "../img/beside_driveway.jpg";
import beside_driveway2 from "../img/beside_driveway2.jpg";
import chicken_bobcat from "../img/chicken_bobcat.jpg";
import chicken_lawnmower from "../img/chicken_lawnmower.jpg";
import firewood from "../img/firewood.jpg";
import saw_on_stump2 from "../img/saw_on_stump2.jpg";


const Gallery = () => {
    return (
        <div id="gallery">
            <div className="container-fluid">
                <h1 className="display-1 text-center p-3 m-3"><b>Gallery</b></h1>
                <div className="row">
                    <div className="col">
                        <img src={sideyard_b4} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={sideyard} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={sideyard_after} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={side} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={side_after} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={blue_building} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={beside_driveway} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={beside_driveway2} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={chicken_bobcat} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={firewood} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={chicken_lawnmower} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={saw_on_stump2} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Gallery;