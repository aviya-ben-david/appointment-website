import "./Carousel.css";
import page1 from "../assets/CarouselImages/page1.jpg";
import page2 from "../assets/CarouselImages/page2.jpg";

function Carousel() {
    return (
        <div className="carousel">
            <img src={page1} alt="Page 1" />
            <img src={page2} alt="Page 2" />
        </div>
    );
}

export default Carousel;