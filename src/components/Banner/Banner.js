import "./Banner.css";
import bannerImage from "../../assets/artsy.png"; 
import star from "../../assets/star.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__left">
          <h1 className="banner__header">
            Discover amazing art around the <span>world</span>
          </h1>

          <p className="banner__text">
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>

          <button className="banner__button">Explore arts</button>
          <div>
              <img
              className="star_image"
              src={star}/>
          </div>
        </div>

        <div className="banner__right">
          <div>
            <img
              className="banner__image"
              src={bannerImage}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
