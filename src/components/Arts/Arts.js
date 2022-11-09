import "./Arts.css";
import "../Collection/Collection.css";
import artImage from "../../assets/artsy.png";
import searchIcon from "../../assets/search.svg";
import axios from "axios";

import React, { useEffect, useState, Link } from 'react'

const Arts = () => {
  const [arts, setArts] = useState()

  const [value, setValue] = useState("");
  const [artFilter, setArtfilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value != "") {
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

  useEffect(() =>{
    const getArt =async()=>{
      try{
        const artStuff =  await axios.get("https://api.artic.edu/api/v1/artworks")
        const allArts = artStuff?.data?.data
        console.log(allArts)
        setArts(allArts)
      }catch(err){
        console.log(err);
      }
    }
    getArt()
  },[])

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
        <img className="collection__icon" src={searchIcon} alt="search-icon" />
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

        { value.length > 0 ?  artFilter?.map((art) => (
          // this is code to be displayed on search mode
          // this code has to be identical to the one below
        <div 
          className="arts__info"
          style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center"
          }}
          >
          <img src={art?.thumbnail?.lqip} alt="art" />
          <Link 
          to="viewart/:id"
          from={art?.id}          
          className="arts__text">
            <h3>{art?.artist_title}</h3>
            <p>{art?.classification_title}</p>
            <p>{art?.artwork_type_title}</p>
          </Link>
        </div>
        ))
        : arts?.map((art) => (
          // this is code displayed on normal unsearched mode
        <div 
        key={art?.id}
          className="arts__info"
          style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center"
          }}
          >
          <img src={art?.thumbnail?.lqip} alt="art" />
          <div className="arts__text">
            <h3>{art?.artist_title}</h3>
            <p>{art?.classification_title}</p>
            <p>{art?.artwork_type_title}</p>
          </div>
        </div>
         ))
      }

    </div>
    </>
  );
};

export default Arts;
