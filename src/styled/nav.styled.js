import styled from "styled-components";

export const StyledNavMobile = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  .line-wrap {
    overflow: hidden;
  }

  .nav-title {
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
  }

  .contact-button-text {
    width: 100%;
    .underline-nav-mobile {
      height: 1px;
      width: 100%;
      background-color: black;
    }
  }
`;

export const StyledNav = styled.div`
position: relative;
width: 20vw;
padding-left: ${({ theme }) => theme.padding};

.nav {
  position: fixed;
  height: 86vh;

  .nav-title {
    position: absolute;
    top: 0;
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
  }

  .nav-date {
    position: absolute;
    top: 50%;
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
  }

  .nav-options {
    position: absolute;
    top: 100%;
    
    .nav-option-text{
      margin-bottom: .1em;
    }

    ul {
      list-style: none;

      li {
        position: relative;
        overflow: hidden;
      }
    }
  }
}
`;