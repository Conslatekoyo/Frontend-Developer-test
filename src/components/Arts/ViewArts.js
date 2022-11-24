import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewArt() {
  const { id } = useParams();
  const [artPiece, setArtPiece] = useState();
  console.log(id);
  useEffect(() => {
    const url = `https://api.artic.edu/api/v1/artworks/${id}`;
    const getArt = async () => {
      try {
        const art = await axios.get(url);
        const artData = art?.data?.data;
        console.log(artData);
        setArtPiece(artData);
      } catch (err) {
        console.log(err);
      }
    };
    getArt();
  }, [id]);
  return (
    <>
      {/* below you can display details you wish to from the art piece, use console.log(artData) to help with what you'd like to fetch*/}
      <img
        src={artPiece?.thumbnail?.lqip}
        alt="Impressionist sea landscape, tan houses, blue ocean, distant mountains."
        height={300}
        width={300}
      />
      <p className="title">{artPiece?.artist_title}</p>
      <p>{artPiece?.inscriptions}</p>
    </>
  );
}

export default ViewArt;
