// ?text=test&icon=1" onerror="location.href='https://www.google.com/'
import {ParsedOptions} from './parser';

export const getCSS = (option: ParsedOptions) => `
  :root{
    --background-color: black;
    --icon-size: 20vmin;
    --icon-gap: 5vmin;

    --balloon-background-color: white;
    --balloon-padding: 2.5vmin;
    --balloon-font-size: ${option.fontSize};
    --balloon-line-height: calc(var(--balloon-font-size) * 1.75);
    --balloon-rounded: calc(var(--balloon-padding) + var(--balloon-line-height) / 4)
  }

  body{
    background: var(--background-color);
    position: relative;
  }

  #icon-wrapper{
    display: flex;
    position: absolute;
    right: var(--icon-gap);
    bottom: var(--icon-gap);
  }

  #icon{
    border-radius: 9999px;
    width: var(--icon-size);
    height: var(--icon-size);
    object-fit: cover;
  }

  #balloon{
    position: absolute;
    right: calc(var(--icon-gap) + var(--icon-size) * 0.75);
    bottom: calc(var(--icon-gap) + var(--icon-size));
    padding: var(--balloon-padding);
    border-radius: var(--balloon-rounded);
    background: var(--balloon-background-color);
    min-width: 3em;
    font-size: var(--balloon-font-size);
    font-family: '${option.font}';
    letter-spacing: 0.05em;
    line-height: var(--balloon-line-height);
    text-align: center;
  }

  #balloon::after{
    content: "";
    position: absolute;
    right: var(--balloon-rounded);
    top: 100%;
    border-width: calc(var(--balloon-rounded) / 2);
    border-style: solid;
    border-top-color: var(--balloon-background-color);
    border-right-color: var(--balloon-background-color);
    border-bottom-color: transparent;
    border-left-color: transparent;
    transform-origin: top right;
    transform: skewX(20deg);
  }
`;

export const getHtml = (option: ParsedOptions) => `
  <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&text=${
          option.text
        }&family=${option.font.split(' ').join('+')}">
        <style>${getCSS(option)}</style>
      </head>
      <body>
        <div id="icon-wrapper">
          <img id="icon" src="${option.icon}"/>
        </div>
        <div id="balloon">
          ${option.text}
        </div>
      </body>
  </html>
`;
