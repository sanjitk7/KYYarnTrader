import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Landing/Landing.css'

// {console.log(process.env)}

function Landing() {
    return (
        <div>
            <Navbar />
            <main id="top" role="main">
                <div id="box1"></div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* <svg className="bd-placeholder-img" width="100%" height="100%" src="../../../public/img/yarn-carosel.svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777" /></svg> */}
                            <img src={require("./yarn-carosel.jpg")} alt=""></img>
                            <div className="container">
                                <div id="box1" className="carousel-caption text-left">
                                    <h1 id="title">Kumar Yarns and Trading Pvt Ltd</h1>
                                    <p id="hhh"> High Quality Yarn from 10% Polyester and 50% Recycled Cotton Fibre. Open End (OE) Spun Yarn in over 100 Colors. Looking for something? Leave us an inquiry.</p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="container marketing">

                    <div className="row">
                        <div className="col-lg-4">
                        <img src={require("./feature-tile-icon-05.svg")} className="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>Quality Guaranteed</h2>
                            <p>For over 20 years we have guaranteed our Yarn Quality. Return goods within 3 business days if not satisfactory**</p>
                        </div>
                        <div className="col-lg-4">
                        <img src={require("./feature-tile-icon-01.svg")} className="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>On-time Delivery</h2>
                            <p>We deliver in one or two business days from the day of invoice given that we are stocked on your purchase. For details visit out inventory section.</p>
                        </div>
                        <div className="col-lg-4">
                            <img src={require("./feature-tile-icon-02.svg")} className="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>Pay Online/via Cheque</h2>
                            <p>Owing to the current pandemic we only take online payments either via Net Banking or via a Cheque posted to our address.</p>
                        </div>
                    </div>


                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Quality Focused.  <span className="text-muted">Customer First.</span></h2>
                            <p className="lead">For us Quality is everything. For great quality fabric and clothes it starts from great quality fibre. We obtain and stock first quality yarn obtained spun from high grade fibre. For other purposed yarn of lesser quality from recycled cotton is also available.</p>
                        </div>
                        <div className="col-md-5">
                            {/* <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={require("./tile-1.jpg")} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></img> */}
                            <br></br><br></br><br></br><br></br>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-1.jpg")}></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading"> Values. <span className="text-muted">Employee Centered </span></h2>
                            <p className="lead">We promote a healthy and robust work environment and culture. Our employees come from all spheres of life. The textile market is ever growing and flourishing. Come check us out if you are looking for a job!</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                            <br></br><br></br><br></br><br></br>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-5.jpg")}></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading"> History and Reputation. <span className="text-muted">Trust.</span></h2>
                            <p className="lead">Since we have been in the yarn market for longer than most others, we have a good understanding of customer expectation. We build trust and are always available to feedback. </p>
                        </div>
                        <div className="col-md-5">
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                            <br></br><br></br><br></br><br></br>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-4.jpg")}></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />


                </div>


                <footer className="container">
                    <p className="float-right"><a href="#top">Back to top</a></p>
                    <p>&copy; 1997-2020 Company, Inc.</p>
                </footer>
            </main>
        </div>
    )
}

export default Landing;