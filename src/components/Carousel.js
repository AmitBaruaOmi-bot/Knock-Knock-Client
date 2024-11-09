import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control btn-outline-dark me-2 fst-italic bg-success text-white" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark fst-italic text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/id/429/1700/500/" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/488/1700/500/" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/999/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/63/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/75/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/225/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/326/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/425/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/431/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/490/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/493/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/835/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/889/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/id/425/1700/500" className="d-block w-1700" style={{filter: "brightness(30%)"}} alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
