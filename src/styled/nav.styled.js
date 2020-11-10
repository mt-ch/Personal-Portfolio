import styled from "styled-components";

export const StyledNav = styled.div `
  /* position: fixed;  */
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 7em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff00;
  padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
  p {
    /* transition: all 1s; */
  }
  .title-link {
    text-decoration: none;
    .title-text {
      font-weight: bolder;
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
      transition: all 0.3s ease;
    }
    li:hover {
      transform: translateY(-3px);
      transition: transform 0.3s ease;
    }
  }
  .nav-title:hover {
    transition: font-size 1s ease-out;
  }
`;