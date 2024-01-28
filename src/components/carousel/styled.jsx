import styled from "styled-components";

export const AreaComponentImage = styled.div`
  overflow-x: hidden;
  width: 100%;
  height: 400px;

  .component_image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.8s ease;
    left: 100%;
  }

  img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
  }
`;
