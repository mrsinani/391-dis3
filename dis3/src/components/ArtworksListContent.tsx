import { useState } from "react";

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState(5);

  return (
    <div>
      <input
        type="number"
        placeholder="Number of artworks"
        value={numArtworks}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <div>
        <p>numArtworks: {numArtworks}</p>
      </div>
    </div>
  );
}
