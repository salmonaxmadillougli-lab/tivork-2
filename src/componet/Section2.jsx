import "./Section2.css"
import home from "../assets/home.png"
import sale from "../assets/sale.png"
import office from "../assets/office.png"
import home2 from "../assets/home2.png"


function Section2(){
    return(
        <section className="sec2">
            <div className="sec2text">
                <h1>“Keeping Furniture in Homes and out of Landfills."</h1>
                <p>This isn’t just another rental company - We’re elevating the future of furniture by <br /> replacing the commitment of ownership with a culture of sharing in a way that’s <br /> curated, convenient, and sustainable.</p>
            </div>
            <div className="container">
                <div className="text1">
                    <h1>Enjoy a fully furnished <br /> space in less than week</h1>
                    <p>Feather furniture is available to be delivered and <br /> assembled in New York City, Los Angeles and San <br /> Francisco.</p>
                    <a href="">Explore Furniture</a>
                </div>
                <img src={home} alt="" />
            </div>

            <div className="container2">
                <img src={sale} alt="" />
                <div className="text1">
                    <h1>Garage Sale - 40% & Up</h1>
                    <p>Our Garage Sale is open! Savings start at 40% on <br /> favorite retired pieces. Find dressers, sofas, decor, and <br /> more to make the year one to remember. <br />Terms and conditions apply.View here.</p>
                    
                    <a href="">Shop Now</a>
                </div>
            </div>

            <div className="container">
                <div className="text1">
                    <h1>Furniture for business, <br /> made simple.</h1>
                    <p>Say goodbye to cost, complexity, and commitment of <br /> furniture. Feather makes it easy with affordable rental <br /> plans, white glove delivery and best-in-class account <br /> service.</p>
                    <a href="">Visit Feather For Business</a>
                </div>
                <img src={office} alt="" />
            </div>

            <div className="container3">
                <img src={home2} alt="" />
                <div className="text1">
                    <h1>Enjoy a fully furnished <br /> space in less than week</h1>
                    <p>Feather furniture is available to be delivered and <br /> assembled in New York City, Los Angeles and San <br /> Francisco.</p>
                    <a href="">How Feather Works</a>
                </div>
            </div>
        </section>
    )
}
export default Section2