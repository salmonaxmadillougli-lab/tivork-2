import "./Section1.css"
import home from "../assets/home.png"
import shop1 from "../assets/shop1.png"
import shop2 from "../assets/shop2.png"
import shop3 from "../assets/shop3.png"
import shop4 from "../assets/shop4.png"

function Section1(){
    return(
        <section className="sec1">
            <div className="sec1wr">
            <div className="sec1text">
                <h1>Curated and <br /> Convenient</h1>
                <p>We've built our offerings on the principle that everyone deserves <br /> high-quality design without the high cost. We offer elevated rental <br /> inventory, to transform your space. Reuse and recycle - we make <br /> the decision as light as a “feather”</p>
                <button className="start">Get Started</button>
            </div>
            <img src={home} alt="" />
        </div>
        <div className="shop">
            <h1>Shop by Room</h1>
            <div className="shopwr">
                <div className="shop1">
                    <img src={shop1} alt="" />
                    <p>Living Room</p>
                </div>
                <div className="shop1">
                    <img src={shop2} alt="" />
                    <p>Bedroom</p>
                </div>
                <div className="shop1">
                    <img src={shop3} alt="" />
                    <p>Home Office</p>
                </div>
                <div className="shop1">
                    <img src={shop4} alt="" />
                    <p>Dining Room</p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Section1