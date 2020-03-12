import { ICommands } from './../interfaces/commands';

/**
 * Here you can add any configuration you like for crawling
 * In order to adjust to your needs
 */

const firstWebsite: ICommands = {
  commands: [
    {
      goto: {
        url: 'https://www.mobile.de/?lang=en'
      }
    },
    {
      wait: {
        milliseconds: 4000
      }
    },
    {
      mouse: {
        click: {
          selector: 'button#qssub'
        }
      }
    },
    {
      wait: {
        milliseconds: 4000
      }
    },
    {
      evaluate: {
        callback: () => {
          return document.title;
        }
      }
    }
  ]
};

const secondWebsite: ICommands = {
  commands: [
    {
      goto: {
        url: 'https://www.mobile.bg'
      }
    },
    {
      wait: {
        milliseconds: 4000
      }
    },
    {
      evaluate: {
        callback: () => {
          return document.title;
        }
      }
    }
  ]
};

export const webConfig = {
  mobilede: firstWebsite,
  mobilebg: secondWebsite
};