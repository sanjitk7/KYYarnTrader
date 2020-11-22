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
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {/* <svg class="bd-placeholder-img" width="100%" height="100%" src="../../../public/img/yarn-carosel.svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777" /></svg> */}
                            <img src={require("./yarn-carosel.jpg")} alt=""></img>
                            <div class="container">
                                <div id="box1" class="carousel-caption text-left">
                                    <h1 id="title">Kumar Yarns and Trading Pvt Ltd</h1>
                                    <p id="hhh"> High Quality Yarn from 10% Polyester and 50% Recycled Cotton Fibre. Open End (OE) Spun Yarn in over 100 Colors. Looking for something? Leave us an inquiry.</p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="container marketing">

                    <div class="row">
                        <div class="col-lg-4">
                        <img src={require("./feature-tile-icon-05.svg")} class="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>Quality Guaranteed</h2>
                            <p>For over 20 years we have guaranteed our Yarn Quality. Return goods within 3 business days if not satisfactory**</p>
                        </div>
                        <div class="col-lg-4">
                        <img src={require("./feature-tile-icon-01.svg")} class="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>On-time Delivery</h2>
                            <p>We deliver in one or two business days from the day of invoice given that we are stocked on your purchase. For details visit out inventory section.</p>
                        </div>
                        <div class="col-lg-4">
                            <img src={require("./feature-tile-icon-02.svg")} class="bd-placeholder-img rounded-circle" alt="yarnImg" preserveAspectRatio="xMidYMid slice" width="140" height="140"></img>
                            <h2>Pay Online/via Cheque</h2>
                            <p>Owing to the current pandemic we only take online payments either via Net Banking or via a Cheque posted to our address.</p>
                        </div>
                    </div>


                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">Quality Focused.  <span class="text-muted">Customer First.</span></h2>
                            <p class="lead">For us Quality is everything. For great quality fabric and clothes it starts from great quality fibre. We obtain and stock first quality yarn obtained spun from high grade fibre. For other purposed yarn of lesser quality from recycled cotton is also available.</p>
                        </div>
                        <div class="col-md-5">
                            {/* <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={require("./tile-1.jpg")} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></img> */}
                            <br></br><br></br><br></br><br></br>
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-1.jpg")}></img>
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            <h2 class="featurette-heading"> Values. <span class="text-muted">Employee Centered </span></h2>
                            <p class="lead">We promote a healthy and robust work environment and culture. Our employees come from all spheres of life. The textile market is ever growing and flourishing. Come check us out if you are looking for a job!</p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                            <br></br><br></br><br></br><br></br>
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-5.jpg")}></img>
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading"> History and Reputation. <span class="text-muted">Trust.</span></h2>
                            <p class="lead">Since we have been in the yarn market for longer than most others, we have a good understanding of customer expectation. We build trust and are always available to feedback. </p>
                        </div>
                        <div class="col-md-5">
                            {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                            <br></br><br></br><br></br><br></br>
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="" width="500" height="500" src={require("./tile-4.jpg")}></img>
                        </div>
                    </div>

                    <hr class="featurette-divider" />


                </div>


                <footer class="container">
                    <p class="float-right"><a href="#top">Back to top</a></p>
                    <p>&copy; 1997-2020 Company, Inc.</p>
                </footer>
            </main>
        </div>
    )
}

export default Landing;