import styled from "styled-components";
import type { ArtworkProps } from "../types";

const ArtworkPreviewDiv = styled.div`
  margin: 10px;
  padding: 4px;
  width: 400px;
  background-color: lightblue;
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
`;

const IMAGE_BASE_URL = "https://www.artic.edu/iiif/2";

export default function ArtworkPreview({ artwork }: { artwork: ArtworkProps }) {
  /* extra work: i had chatgpt find the proper way to build the image url so i can show it */
  const imageUrl =
    `${IMAGE_BASE_URL}/${artwork.image_id}/full/843,/0/default.jpg`;

  return (
    <ArtworkPreviewDiv>
      <h3>{artwork.title}</h3>
      <p>{artwork.place_of_origin}</p>
        <ArtworkImage src={imageUrl || ''} alt={artwork.title} />
    </ArtworkPreviewDiv>
  );
}
