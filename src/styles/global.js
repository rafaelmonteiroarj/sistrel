import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --background2: #0c0c0c;
    --background3: #cecece;
    --background4: #7F7F7F;

    --color-title: #da251b;
    --color: #ffffff;
    --color2: #656565;
    --color3: #da3c1f;
    --color4: #0c0c0c;
    --color-5: #212529;
    --color-6: #333;
    --color-7: #000;

    --btn-info: #0288d1;
    --btn-info-hover: #026fab;
    --btn-primary: #3949ab;
    --btn-primary-hover: #2f3d8e;
    --btn-danger: #e3262e;
    --btn-danger-hover: #a61d19;

    --color-shadow-option1: rgba(62, 57, 107, 0.16);
    --color-shadow-option2: rgba(0, 0, 0, 0.15);

    --input-focus-color: #eff3f6;
    --input-border-color: #ced4da;
    --input-error-border-color: #e3262e;
    --border-color-option-1: rgba(0, 0, 0, 0.1);
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    background-color: var(--background);

    scroll-behavior: smooth;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  .text-white {
    color: var(--color);
  }

  .input-search {
    padding: 1rem 1.25rem;
  }

  .input-field {
    padding: 11px 20px;
  }

  .input-field-regular {
    max-width: 200px;
  }

  .input-field-100 {
    max-width: 100%;
  }

  .btn {
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: var(--color-5);
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    min-width: 10rem;
  }

  .btn:disabled {
    opacity: .65;
  }

  .btn-small {
    font-size: 12px;
    padding: 10px 16px;

    @media (max-width: 460px) {
      font-size: 10px;
      padding: 8px;
    }

    @media (max-width: 375px) {
      font-size: 6px;
      padding: 5px;
    }
  }

  .btn-medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  .btn-large {
    font-size: 16px;
    padding: 12px 24px;
  }

  .btn-small-100 {
    font-size: 12px;
    padding: 10px 16px;
    width: 100%;
  }

  .btn-medium-100 {
    font-size: 14px;
    padding: 11px 20px;
    width: 100%;
  }

  .btn-large-100 {
    font-size: 16px;
    padding: 12px 24px;
    width: 100%;
  }

  .btn-primary {
    color: var(--color);
    background-color: var(--btn-primary);
    border-color: var(--btn-primary);
  }

  .btn-secondary {
    color: var(--color-6);
    background-color: transparent;
    box-shadow: var(--color-shadow-option2) 0px 0px 0px 1px inset;
  }

  .btn-danger {
    color: var(--color);
    background-color: var(--btn-danger);
    border-color: var(--btn-danger);
  }

  .btn-info:focus,
  .btn-info:hover {
    border-color: var(--btn-info-hover);
    background: var(--btn-info-hover);
  }

  .btn-primary:focus,
  .btn-primary:hover {
    border-color: var(--btn-primary-hover);
    background: var(--btn-primary-hover);
  }

  .btn-danger:focus,
  .btn-danger:hover {
    border-color: var(--btn-danger-hover);
    background: var(--btn-danger-hover);
  }

  .shadow-1 {
    box-shadow: 0 2px 10px 0 var(--color-shadow-option1);
  }

  .is-invalid-formik {
    border-color: var(--input-error-border-color);
    border: 1px solid var(--input-error-border-color);
  }

  .is-valid-formik {
    border: 1px solid var(--input-border-color);
    border-color: var(--border-color-option-1);
  }

  /** spinner rotate */
  @keyframes rotate {
    0% {
      transform: rotateZ(-360deg)
    }
    100% {
      transform: rotateZ(0deg)
    }
  }

  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }

  .carousel .control-prev.control-arrow {
    left: 0;
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .carousel-root {
    outline: none; }

  .carousel {
    position: relative;
    cursor: grab;
    width: 100%;

    :active {
      cursor: grabbing;
    }
  }

  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none;
  }

  .carousel .carousel {
    position: relative;
  }

  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: -13px;
    font-size: 18px;
  }

  .carousel .thumbs-wrapper {
    margin: 20px;
    overflow: hidden;
  }

  .carousel .thumbs {
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -ms-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap;
  }

  .carousel .thumb {
    -webkit-transition: border 0.15s ease-in;
    -moz-transition: border 0.15s ease-in;
    -ms-transition: border 0.15s ease-in;
    -o-transition: border 0.15s ease-in;
    transition: border 0.15s ease-in;
    display: inline-block;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid var(--color);
    padding: 2px;
  }

  .carousel .thumb:focus {
    border: 3px solid var(--color-option7);
    outline: none;
  }

  .carousel .thumb.selected, .carousel .thumb:hover {
    border: 3px solid #333;
  }

  .carousel .thumb img {
    vertical-align: top;
  }

  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
  }

  .carousel.carousel-slider .control-arrow {
    top: 0;
    color: var(--color);
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 1.5rem;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: none
  }

  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in;
  }

  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }

  .carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
  }

  .carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    background: var(--color-option7);
  }

  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }

  .carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0;
  }

  .carousel .slide .legend {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    border-radius: 10px;
    background: var(--color4);

    color: var(--color);
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px var(--color-7);
  }

  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0;
    }
  }

  .carousel .control-dots .dot {
    -webkit-transition: opacity 0.25s ease-in;
    -moz-transition: opacity 0.25s ease-in;
    -ms-transition: opacity 0.25s ease-in;
    -o-transition: opacity 0.25s ease-in;
    transition: opacity 0.25s ease-in;
    opacity: 0.3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px var(--background-option-7);
    background: var(--color);
    width: 30px;
    height: 3px;
    cursor: pointer;
    display: inline-block;
    margin: 10px 8px;
  }

  .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px var(--background-option-7);
    color: var(--color);
  }

  .carousel:hover .slide .legend {
    opacity: 1;
  }
`;

export default GlobalStyle;
