import imageMain from "../../assets/images/about-main.jpg"
import imageInset from "../../assets/images/about-inset.jpg"
export default function About() {
    return (
        <div id="about" className="about-main pad-top-100 pad-bottom-100" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                            <h2 className="block-title"> About Us </h2>
                            <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
<p>Welcome to our online event booking platform, designed for effortless and efficient party planning. Whether you're hosting a small gathering or a large celebration, our system ensures every detail is managed with ease.</p>

<p>With our platform, you can programmatically manage events, customize menus, and choose venues through an intuitive interface or integrate directly with our API. It's perfect for developers looking to build tailored solutions or automate event scheduling processes.</p>

<p>Streamline your event planning with robust features, scalable options, and the flexibility to adapt to your unique requirements. Start coding your way to unforgettable celebrations today!</p>

                        </div>
                    </div>
                    {/* <!-- end col --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                            <div className="about-images">
                                <img className="about-main" src={imageMain} alt="About Main Image" />
                                <img className="about-inset" src={imageInset} alt="About Inset Image" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
    )
}