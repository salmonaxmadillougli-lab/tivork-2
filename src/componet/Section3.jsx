import "./Section3.css"
import mebel1 from "../assets/mebel1.png"
import mebel2 from "../assets/mebel2.png"
import mebel3 from "../assets/mebel3.png"
import mebel4 from "../assets/mebel4.png"

function Section3(){
    return(
        <section className="sec3">
            <h1>Shop our Bestsellers</h1>
            <div className="mebel">
                <div className="mebel1">
                    <img src={mebel1} alt="" />
                    <h2>Cooper Dining Table</h2>
                    <p>rent for <span className="orange">$15</span>mo <br />or buy for <span className="gray">$359</span> <br />$314</p>
                </div>
                <div className="mebel1">
                    <img src={mebel2} alt="" />
                    <h2>Croft Media <br /> Console</h2>
                    <p>rent for <span className="orange">$15</span>mo <br />or buy for <span className="gray">$839</span> <br />$739</p>
                </div>
                <div className="mebel1">
                    <img src={mebel3} alt="" />
                    <h2>Essex Dining Chair</h2>
                    <p>rent for <span className="orange">$15</span>mo <br />or buy for <span className="gray">$429</span> <br />$379</p>
                </div>
                <div className="mebel1">
                    <img src={mebel4} alt="" />
                    <h2>Ludlow Sofa</h2>
                    <p>rent for <span className="orange">$15</span>mo <br />or buy for <span className="gray">$1249</span> <br />$1099</p>
                </div>
            </div>
            <div className="a">
            <a href="">Shop All Furniture</a>
            </div>
        </section>
    )
}
export default Section3