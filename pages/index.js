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
    'icon':'teacher.png',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Special Education',
    'icon':'student.png',
    'description':'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Book & Library',
    'icon':'books.png',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  },
  {
    'title':'Certification',
    'icon':'certification.png',
    'description': 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
  }
];

let data_options = [
  {
    "title":"Safety First",
    "icon":"safety.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
  },
  {
    "title":"Regular Classes",
    "icon":"student.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
  },
  {
    "title":"Certified Teachers",
    "icon":"certification.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
  },
  {
    "title":"Sufficient Classrooms",
    "icon":"classroom.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
  },
  {
    "title":"Creative Lessons",
    "icon":"creative.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
  },
  {
    "title":"Sports Facilities",
    "icon":"sport.png",
    "description":"Far far away, behind the word mountains, far from the countries Vokalia."
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
              <div className={style.card_img}>
                <Image
                  src={"/images/"+(data[index] && data[index].icon)}
                  width={50}
                  height={50}
                  alt={data[index] && data[index].icon}
                />
              </div>
              <h4>{data[index] && data[index].title}</h4>
              <p className="text-center mt-3 fs-5">{data[index] && data[index].description}</p>
            </div>
          ))
        }
      </div>
      <div className={style.container_description}>
        <div className={style.description_offer}>
          <h3 className="pb-3">What We Offer</h3>
          <p className="fs-5">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
          </p>
          <div className={style.description_options}>
            {
              data_options && data_options.map((options, index) => (
                <div key={index} className={style.description_options_list}>
                  <div className={style.box_options}>
                    <Image
                      src={"/images/"+(options && options.icon)}
                      width={50}
                      height={50}
                      alt={options && options.icon}
                    />
                  </div>
                  <div className={style.box_options_text}>
                    <h4>{options && options.title}</h4>
                    <p className="fs-5">{options && options.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={style.description_welcome}>
          <h3 className="pb-3 p-2">Welcome to Kiddos Learning School</h3>
          <p className="fs-5 p-2">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
          </p>
          <p className="fs-5 p-2">
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.
          </p>
          <button type="button" className={style.btn_see}>Read More</button>
        </div>
      </div>
      <div className={style.container_teaching}>
        <Image
          src="/images/image_slider_3.jpg"
          fill
          alt="image_slider_3.jpg"
        />
        <div className={style.teaching_description}>
          <div className="d-block pe-3">
            <h1 className="text-white">Teaching Your Child Some Good Manners</h1>
            <p className="text-white fs-5">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <button type="button" className={style.btn_course}>Take a Course</button>
        </div>
      </div>
      <div className={style.certified_teacher}>
        <div className={style.certified_teacher_description}>
          <h1 className="text-center">Certified Teachers</h1>
          <p className="text-center fs-5 p-3">
            Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>
      </div>
      <div className={style.certified_teacher_contain_card}></div>
    </>
  );
}

export default HomePage;