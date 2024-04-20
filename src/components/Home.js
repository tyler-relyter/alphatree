import React from "react";
import About from "./About";
import Contact from "./Contact";
import treephoto from "../img/treephoto31.jpg";
import trimmedpine from "../img/trimmed_pine.jpg";
import nicetree from "../img/nice_trim.jpg";
import "./css/home.css";
import corner from "../img/corner.jpg";
import climbpine from "../img/climb_pine.jpg";
import climbtree from "../img/climb_tree.jpg";
import fatstump from "../img/fatstump.jpg";
import bradToppingTree from "../img/brad_cutting_top.mp4"
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="display-1 text-center p-3 m-3"><b>Welcome to Alpha Tree Surgeons</b></h1>
                <div className="row justy-content-center">
                    <div className="col">
                        <img src={trimmedpine} className="img-fluid m-5 p-3" style={{ maxHeight: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={treephoto} className="img-fluid m-5 p-3" style={{ height: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={nicetree} className="img-fluid m-5 p-3" style={{ maxHeight: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <img src={fatstump} className="img-fluid m-5 p-3" style={{ maxHeight: '500px', width: '450px'}} alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <a href="#contact"><h3 className="display-3 bg-dark text-white text-center p-3 m-3"><b>CALL FOR A FREE ESTIMATE!</b></h3></a>
                    </div>
                    <div className="col"></div>
                </div>
                
                <h6 className="text-center text-uppercase display-4 p-3 m-3">Trust us with your projects</h6>
                <div className="row">
                    <h6 className="text-center p-3 m-3 display-2 bg-dark text-white">SERVICES</h6>
                </div>
                <div className="row">
                    <div className="col border border-success border-3">
                        <h3 className="display-3 text-center p-3 m-3">Removal</h3>
                        <p className="text-center fs-3 p-3 m-3">Alpha Tree Surgeons is a company that specializes in tree removal. We have the proper tools and equipment to remove trees safely and efficiently, going 
                        above and beyond to keep your property intact. This includes existing landscapes, flowers, grass, or other items.</p>
                    </div>
                    <div className="col border border-success border-3">
                        <h2 className="display-3 text-center p-3 m-3">Pruning</h2>
                        <p className="text-center fs-3 p-3 m-3">Do your trees and shrubs need a haircut? We can do that and more. Alpha Tree strives to help keep their customers informed on proper pruning practices and its benefits on tree health in the future. At your consultation,
                        we will walk your property to determine your pruning and tree trimming needs.</p>
                    </div>
                    <div className="col border border-success border-3">
                        <h3 className="display-3 text-center p-3 m-3">Consultation Services</h3>
                        <p className="text-center fs-3 p-3 m-3">Chat with a pro at Alpha Tree to determine the health of the trees on your property. We provide a detailed plan on what should be done to keep the trees on your property
                        safe and disease-free. <a href="#contact">Call us</a> today and we'll send one of our experts to walk through and show you spots of decay, underlying illnesses, issues with bark or cambium layer, pests, etc.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h3 className="display-3 text-center p-3 m-3">Our Work in Action</h3>
                        <div id="carouselTree" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active" id="videoContainer">
                                    <video controls={true} style={{ width: '100%', height: 'auto' }}>
                                        <source src={bradToppingTree} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="carousel-item">
                                    <img src={climbtree} className="img-fluid d-block w-100" style={{ maxHeight: '650px', width: '500px'}} alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={corner} className="img-fluid d-block w-100" style={{ height: '650px', width: '500px'}} alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={climbpine} className="img-fluid d-block w-100" style={{ maxHeight: '650px', width: '500px'}} alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTree" data-bs-slide="prev">
                                <i className="fas fa-chevron-left"></i>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselTree" data-bs-slide="next">
                                <i className="fas fa-chevron-right"></i>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col"></div>

                </div>
            </div>
            <About />
            <Contact />
            <Gallery />
        </div>

    )
}



export default Home;