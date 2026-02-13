import { useEffect, useState } from "react";
import type { ArtworkProps } from "../types";
import ArtworkPreview from "./ArtworkPreview";

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState(5);
  const [artworks, setArtworks] = useState<ArtworkProps[]>([]);

  useEffect(() => {
    async function getArtworks() {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?limit=${numArtworks>99?99:numArtworks}`,
      );
      const jsonRes = await res.json();
      setArtworks(jsonRes.data);
    }
    getArtworks().catch((e) => console.error(e));
  }, [numArtworks]);

  return (
    <div>
      <h2>Artworks</h2>
      <input
        type="number"
        placeholder="Number of artworks"
        value={Number(numArtworks)>99?99:numArtworks}
        min={1}
        /* extra work: add max so it doesnt crash out */
        max={100}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <p>Number of artworks: {Number(numArtworks)>99?99:numArtworks}</p>
      <div>
        {artworks.map((a) => {
          return <ArtworkPreview artwork={a} />;
        })}
      </div>
    </div>
  );
}
