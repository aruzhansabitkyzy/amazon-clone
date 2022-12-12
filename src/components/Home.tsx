import '../style/Home.css'
import { Product } from './Product'


export const Home = () => {
    return(
        <div className='home'>
            <div className="home__container">
                <img src='https://m.media-amazon.com/images/I/71YIDh9SEtL._SX3000_.jpg' alt=""  className='home__image'/>
                <div className='home__row'>
                        <Product title="The Light We Carry: Overcoming in Uncertain Times" rating= {4} image="https://static01.nyt.com/images/2022/07/25/books/21michelleobama2/21michelleobama2-mediumSquareAt3X.jpg" priceFrom ="12.99"/>
                        <Product title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7 Heart Rate and More, Black/Graphite, One Size (S &L Bands Included)" rating= {5} image="https://m.media-amazon.com/images/I/61xh+Cewq5L._AC_SL1500_.jpg" priceFrom ="12.99"/>
                </div>
                <div className='home__row'>
                        <Product title="Nike Everyday Cushion Crew Training Socks" rating= {4} image="https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_UY879_.jpg" priceFrom ="14.00" priceTo="37.90"/>
                        <Product title="SKLZ Pro Mini Basketball Hoop" rating= {3} image="https://m.media-amazon.com/images/I/51vJe512YKL._AC_SL1200_.jpg" priceFrom ="29.99"/>
                        <Product title="BIYLACLESEN Men's Outdoor Tactical Jackets Softshell Fleece Hoodie Full Zip up Jackets Coats Polar Fleece Jacket" rating= {4} image="https://m.media-amazon.com/images/I/71ExUlhu9bL._AC_SL1250_.jpg" priceFrom ="43.98"/>
                </div>
                <div className='home__row'>
                <Product title="Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond" rating= {5} image="https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg" priceFrom ="409.00"/>
                </div>
            </div>
        </div>
    )
}