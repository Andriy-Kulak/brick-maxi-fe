import { createGlobalStyle } from 'styled-components'
import { montserratFont } from './utils/fontConfigs'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }: any) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  // overriding chakra defaults

  .chakra-accordion__button{
    background-color: white !important;
  }

  .chakra-switch__track[data-checked]{
    background: black !important;
  }

  .chakra-switch__track  {
    background: #808080 !important;
  }


  

  .chakra-accordion__button {
    padding-right: 0px !important;
  }

  // mobile menu styles

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 14px;
    top: 29px;
  }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: white;
  }

  /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
    background: #00CED1;
  }

  .menu-item {
    font-family: ${montserratFont};
    font-size: 20px;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 80px;
    width: 24px;
  }

  .bm-menu {
    background: black !important;
  }

  .bm-cross-button{
    right: 14px !important;
    top: 29px !important;
  }

  /* Color/shape of close button cross */
    .bm-cross {
  
    background: transparent;
  }
  .bm-menu, .bm-menu-wrap {
    margin: 0 !important;
  }

  .bm-menu-wrap {
    top: 0px !important;
  }
  
  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  
    /* General sidebar styles */
    .bm-menu {
      background:	rgba(19, 19, 19, 0.9);;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }
    
    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.8em;
      display: flex;
      flex-direction: column;
      height: 50% !important;
      margin: auto;
      margin: 100px auto 0px;
    }
    
  /* Individual item */
  .bm-item {
      margin: 15px 10px !important;
      display: flex;
      color: white;
      margin-bottom: 40px;
      text-align: center;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .bm-item:hover {
      color: #ffffff;
    }
    
    /* Styling of overlay */
  .bm-overlay {
      background: black;
    }

  .bm-center {
    margin: auto !important;
    margin-top: 20px !important;
  }

  .mission-button {
    text-align: center;
    position: relative !important;

    >button {
      position: relative !important;
    }
  }

  button, a, .nav-link {
    cursor: pointer;
  }

  .web3modal-modal-lightbox {
    z-index: 200 !important;
  }


  @font-face {
    font-family: "Avenir Next Condensed";
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/AvenirNextCondensed.ttf') format('truetype');
  }

  .CircularProgressbar-text {
    font-weight: 600 !important;
    font-family: ${montserratFont} !important;
  }
`

export default GlobalStyle
