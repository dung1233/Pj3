import image1 from "../../assets/images/staff-01.jpg"
import image2 from "../../assets/images/staff-02.jpg"
import image3 from "../../assets/images/staff-03.jpg"

export default function Team() {
    return(
        <div id="our_team" class="team-main pad-top-100 pad-bottom-100 parallax" data-aos="fade-up">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
    <h2 class="block-title text-center">
        Our Services
    </h2>
    <p class="title-caption text-center">
        We offer a variety of high-quality services tailored to meet your needs. From professional event planning and catering to customized solutions for any occasion, our team is dedicated to delivering exceptional results every time.
    </p>
</div>

                    <div class="team-box">

                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image1} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                    <h3>Quick Party</h3>
<p>Quick parties are designed for those who value time and simplicity without compromising on quality. Perfect for casual gatherings or short events, they feature light, delicious dishes that are easy to enjoy. Whether it's finger foods, quick bites, or refreshing beverages, a quick party ensures a seamless and satisfying experience for everyone.</p>

                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image2} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                    <h3>Teabreak Party</h3>
<p>A teabreak party offers the perfect balance of elegance and simplicity, featuring a selection of light snacks and beverages. With a focus on creating a relaxing atmosphere, this type of event is ideal for casual meet-ups, business meetings, or short breaks. From freshly brewed coffee and tea to delightful pastries and finger foods, a teabreak party ensures every moment is enjoyable and satisfying.</p>

                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image3} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                    <h3>Finger Food</h3>
<p>Finger food brings convenience and creativity to any event, offering bite-sized delights that are both flavorful and visually appealing. Perfect for casual gatherings or sophisticated soirées, these small, easy-to-eat dishes range from savory canapés to sweet treats. Finger food ensures a seamless dining experience, allowing guests to enjoy delicious bites without the need for formal dining setups.</p>

                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- end team-box --> */}

                </div>
                {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
    </div>
    )
}