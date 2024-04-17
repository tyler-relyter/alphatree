import React from "react";
import About from "./About";
import Contact from "./Contact";
import treephoto from "../img/treephoto31.jpg";
import trimmedpine from "../img/trimmed_pine.jpg";
import nicetree from "../img/nice_trim.jpg";
import "./css/home.css";
import bobcat from "../img/bobcat.jpeg";
import climbpine from "../img/climb_pine.jpg";
import climbtree from "../img/climb_tree.jpg";
import fatstump from "../img/fatstump.jpg";
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
                        <p className="text-center fs-3 p-3 m-3">Alpha Tree strives to help keep their customers informed on proper pruning practices and its benefits on tree health in the future.</p>
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
                        <div id="carouselTree" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={climbtree} class="img-fluid d-block w-100" style={{ maxHeight: '650px', width: '500px'}} alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={bobcat} class="img-fluid d-block w-100" style={{ maxHeight: '650px', width: '500px'}} alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={climbpine} class="img-fluid d-block w-100" style={{ maxHeight: '650px', width: '500px'}} alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTree" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselTree" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="col"></div>

                </div>
            </div>
            <About />
            <Contact />
            <Gallery />
        </div>

    )
}



export default Home;