import variables from "./variables";
import transitions from "./transitions";
import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
  ${variables};
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    color: var(--lightest-slate);
    background: var(--lightest-navy);
  }
  :focus {
    outline-offset: 3px;
    outline: 2px dashed var(--green);
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--navy);
  }
  body::-webkit-scrollbar-thumb {
    background: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }
  body {
    margin: 0px 0px;
    line-height: 1.6;
    overflow-x: hidden;
    color: var(--slate);
    background: var(--navy);
    font-size: var(--fz-md);
    font-family: var(--font-sans);
    &.hidden {
      overflow: hidden;
    }
    @media screen and (max-width: 768px) {
      &.blur {
        overflow: hidden;
        #content > * {
          filter: blur(5px) brightness(0.8);
          transition: var(--transition);
          pointer-events: none;
          user-select: none;
        }
      }
    }
  }
  main {
    padding: 0px 148px;
    header, section, footer {
      width: 1000px;
      margin: 0px auto;
      padding: 100px 0px;
      @media (max-width: 768px) {
        padding: 80px 0px;
      }
      @media (max-width: 480px) {
        padding: 60px 0px;
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: normal;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    font-size: 60px;
    font-family: sans-serif, monospace;
    font-weight: 900;
    @media (max-width: 768px) {
      font-size: var(--fz-heading);
      font-weight: bold;
    }
  }
  .medium-heading {
    margin: 0 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 30px 0;
    width: 100%;
    font-size: var(--fz-heading);
    white-space: nowrap;
    &:before {
      position: relative;
      bottom: 1px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }
    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background: var(--lightest-navy);
      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
  img,
  svg,
  .blur-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  #logo {
    color: var(--green);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    &.feather {
      fill: none;
    }
  }
  a {
    color: inherit;
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--green);
    }
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      letter-spacing: 0.5px;
      font-size: var(--fz-xs);
      color: var(--lightest-slate);
    }
  }
  p {
    color: var(--slate);
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    & > code {
      color: var(--white);
      font-size: var(--fz-sm);
      background: var(--light-navy);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }
  ${transitions};
`;

export default Globalstyles;
