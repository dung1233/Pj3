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
                            <p> Pho is a traditional Vietnamese dish, known for its fragrant broth, tender slices of beef or chicken, and soft rice noodles. It is often garnished with fresh herbs, bean sprouts, and lime. </p>

                            <p> The rich flavors come from a slow-cooked broth made with spices such as star anise, cinnamon, and cloves. Served steaming hot, pho is both comforting and delicious. It is enjoyed as a breakfast staple or a hearty meal any time of the day. Add chili or hoisin sauce to enhance its taste. </p>

                            <p> Pho is not just a meal; it’s a cultural symbol of Vietnam, loved worldwide for its unique combination of ingredients and satisfying flavor. </p>

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