import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import sideyard from "../img/sideyard.jpg";
import sideyard_b4 from "../img/sideyard_b4.jpg";
import sideyard_after from "../img/sideyard_after.jpg";
import backlot from "../img/backlot.jpg";
import backlot_done from "../img/backlot_done.jpg";
import blue_building from "../img/blue_building.jpg";
import beside_driveway from "../img/beside_driveway.jpg";
import beside_driveway2 from "../img/beside_driveway2.jpg";
import chicken_bobcat from "../img/chicken_bobcat.jpg";
import chicken_lawnmower from "../img/chicken_lawnmower.jpg";
import firewood from "../img/firewood.jpg";
import saw_on_stump2 from "../img/saw_on_stump2.jpg";
import "./css/gallery.css";


const Gallery = () => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (imgSrc) => {
        setCurrentImage(imgSrc);
        setShow(true);
    }
    

    return (
        <div id="gallery">
            <div className="container-fluid">
                <h1 className="display-1 text-center p-3 m-3"><b>Gallery</b></h1>
                <div className="row">
                    <div className="col">
                        <img src={sideyard_b4} onClick={() => handleShow(sideyard_b4)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px', cursor: 'pointer'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={sideyard} onClick={() => handleShow(sideyard)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={sideyard_after} onClick={() => handleShow(sideyard_after)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={backlot} onClick={() => handleShow(backlot)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={backlot_done} onClick={() => handleShow(backlot_done)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={blue_building} onClick={() => handleShow(blue_building)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={beside_driveway} onClick={() => handleShow(beside_driveway)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={beside_driveway2} onClick={() => handleShow(beside_driveway2)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={chicken_bobcat} onClick={() => handleShow(chicken_bobcat)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={firewood} onClick={() => handleShow(firewood)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={chicken_lawnmower} onClick={() => handleShow(chicken_lawnmower)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={saw_on_stump2} onClick={() => handleShow(saw_on_stump2)} className="img-fluid m-5 p-3" id="imgThumbnail" style={{ height: '450px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className="customModal">
                <Modal.Header closeButton>
                    <Modal.Title>Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={currentImage} className="img-fluid" alt="Tree Surgeons" />
                </Modal.Body>
            </Modal>

        </div>
    )
}


export default Gallery;