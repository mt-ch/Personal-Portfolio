import styled from "styled-components";

export const StyledTopNav = styled.nav`
  width: 100vw;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: whitesmoke;
  border-bottom: 1px solid black;
  padding: 1.5em 1em 1.5em 1em;

  p {
    color: black;
    padding: 0;
    margin: 0;
    line-height: 0;
    font-size: 1.35rem;
    transition: all 1s;
  }

  .title-link {
    text-decoration: none;

    .title-text {
      color: green;
      font-weight: bolder;
      font-size: 2.5rem;
    }
  }

  .title-link:hover {
    .title-text {
      color: black;
      transition: color 1s;
    }
  }

  .nav-desktop {
    display: none;
    flex-direction: row;
    align-items: end;

    li{
      margin-left: 15px;
    }
  }

  .nav-title:hover{
    font-size: 1.4rem;
    transition: font-size 1s ease-out;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .nav-title {
      display: none !important;
    }
    .nav-desktop {
      display: flex !important;
    }
  }
`;
