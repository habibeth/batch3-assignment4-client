import { Carousel as NavCarousel } from 'antd';
import first from '../../../assets/1.jpg'
import second from '../../../assets/2.jpg'
import third from '../../../assets/3.jpeg'
import fourth from '../../../assets/4.jpg'
import fifth from '../../../assets/5.png'
import sixth from '../../../assets/6.jpg'


const Carousel = () => (
    <NavCarousel autoplay>
        <div>
            <img src={first} alt="" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
            <img src={second} alt="" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
            <img src={third} alt="" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
            <img src={fourth} alt="" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
            <img src={fifth} alt="" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
            <img src={sixth} alt="" style={{ width: '100%', height: '600px' }} />        </div>

    </NavCarousel>
);

export default Carousel;