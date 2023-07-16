import Image from 'next/image';
import style from '../styles/Home.module.css';
import Link from 'next/link';
import Slider from './SliderComponent';

const imageStyle = {
  borderRadius: '50%'
};

const data = [
  {
    'title': 'Certified Teachers',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Special Education',
    'description':'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Book & Library',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Certification',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  }
];

let HomePage = () => {
  return(
    <>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Image 
            src="/images/logo.jpg"
            width={70}
            height={70}
            style={imageStyle}
            alt="Logo"/>
        </div>
        <div className={style.menu_link}>
          <ul>
            {
              [
                'Home',
                'About',
                'Teacher',
                'Courses',
                'Pricing',
                'Blog',
                'Contact'
              ].map((mnu, index) => (
                <li key={index}>
                  <Link className="link" href="/">{mnu}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={style.container_image_slider}>
        <Slider/>
      </div>
      <div className={style.container_card_info}>
        {
          [
            '#1eaaf1',
            '#8cc152',
            '#5d50c6',
            '#f1453d'
          ].map((color, index) => (
            <div key={index} className={style.card_info} style={{backgroundColor: `${color}`}}>
              <h4>{data[index] && data[index].title}</h4>
              <p className="text-center mt-3">{data[index] && data[index].description}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default HomePage;