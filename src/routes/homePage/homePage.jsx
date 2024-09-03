import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'
const HomePage=()=>{
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find your dream home today!!!</h1>
                    <p>Discover the home of your dreams with our expert real estate services. At We3Homes, we turn transactions into lasting relationships by understanding your unique needs and guiding you every step of the way.  Your perfect home awaits – let’s open the door together.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""  />
            </div>
        </div>
    )
}
export default HomePage
