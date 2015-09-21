# tread-no-mongo

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.0.0-rc8.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


##TWIT config 
You'll need to create a TWIT config file here `/server/config/twit.js`

of this format

```javascript
'use strict';

// TWIT specific configuration
// ==================================
module.exports = {
  twit: {
    consumer_key:         '<your consumer_key>',
    consumer_secret:      '<your consumer_secret>',
    access_token:         '<your access_token>',
    access_token_secret:  '<your access_token_secret>'
  }
};
```
