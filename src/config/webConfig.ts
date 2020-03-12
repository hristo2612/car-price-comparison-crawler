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
      goto: {
        url: 'http://mobile.fr/'
      }
    },
  ]
};

const secondWebsite: ICommands = {
  commands: [
    {
      goto: {
        url: 'https://www.mobile.bg'
      }
    }
  ]
};

export const webConfig = {
  mobilede: firstWebsite,
  mobilebg: secondWebsite
};