import "./Arts.css";
import "../Collection/Collection.css";
// import artImage from "../../assets/artsy.png";
import searchIcon from "../../assets/search.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Arts = () => {
  const [arts, setArts] = useState();

  const [value, setValue] = useState("");
  const [artFilter, setArtfilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterArts = arts.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setArtfilter([...filterArts]);
    } else {
      setValue(e.target.value);
      setArts([...arts]);
    }
  };

  useEffect(() => {
    const getArt = async () => {
      try {
        // fetching all arts from the api
        const artStuff = await axios.get(
          "https://api.artic.edu/api/v1/artworks"
        );
        const allArts = artStuff?.data?.data;
        console.log(allArts);
        // setting all arts into the arts variable
        setArts(allArts);
      } catch (err) {
        console.log(err);
      }
    };
    getArt();
  }, []);

  return (
    <>
      <div className="collection">
        <div className="collection__text">
          <h1>Art in the collection</h1>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>

        <form className="collection__form">
          <img
            className="collection__icon"
            src={searchIcon}
            alt="search-icon"
          />
          <input
            className="collection__search"
            type="text"
            placeholder="Search"
            onChange={filterData}
            value={value}
          />
        </form>
      </div>
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3">
        {value.length > 0
          ? artFilter?.map((art) => (
              // this is code to be displayed on search mode
              // this code has to be identical to the one below
              <div
                key={art?.id}
                className="arts__info"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={art?.thumbnail?.lqip} alt="art" />
                <div className="arts__text">
                  <h3>Artist Title: {art?.artist_title}</h3>
                  <p>Classification Title: {art?.classification_title}</p>
                  <p>Artwork Type Title: {art?.artwork_type_title}</p>
                  <Link
                    to={`/artdetails/${art?.id}`}
                    style={{
                      background: "#fff",
                      color: "#505050",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))
          : arts?.map((art) => (
              // this is code displayed on normal unsearched mode
              <div
                key={art?.id}
                className="arts__info"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={art?.thumbnail?.lqip} alt="art" />
                <div className="arts__text">
                  {/* content from the fetched art pieces, to display more edit this piece of code. Console.log(arts) will show what yu need to fetch */}
                  <h3>Artist Title: {art?.artist_title}</h3>
                  <p>Classification Title: {art?.classification_title}</p>
                  <p>Artwork Type Title: {art?.artwork_type_title}</p>
                  <Link
                    // route to view the individual art piece
                    to={`/artdetails/${art?.id}`}
                    style={{
                      background: "#fff",
                      color: "#505050",
                      padding: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Arts;
