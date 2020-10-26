import styled from "styled-components";

export const StyledTopNav = styled.div`
  position: fixed; 
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid black;
  padding: 1.5rem 2rem 1.5rem 2rem;

  p {
    color: black;
    padding: 0;
    margin: 0;
    line-height: 0;
    font-size: ${({ theme }) => theme.secondaryFontSize};
    transition: all 1s;
  }

  .title-link {
    text-decoration: none;

    .title-text {
      color: green;
      font-weight: bolder;
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
  }

  .title-link:hover {
    .title-text {
      color: black;
      transition: color 1s;
    }
  }

  .nav-desktop {
    display: flex;
    flex-direction: row;
    align-items: end;
    
    li {
      margin-left: 20px;
      transition: all .3s ease;
    }

    li:hover{
      transform: translateY(-3px);
      transition: transform .3s ease;
    }
  }

  .nav-title:hover {
    /* font-size: 1.4rem; */
    transition: font-size 1s ease-out;
  }

  /* @media (min-width: ${({ theme }) => theme.mobile}) {
    .nav-title {
      display: none !important;
    }
    .nav-desktop {
      display: flex !important;
    }
  } */
`;
