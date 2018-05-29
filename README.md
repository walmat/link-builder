# Shopify Link Builder

This project builds checkout links given a product link. It's directly integrated into your choice of a discord server.

## Getting Started

1. `git clone https://github.com/walmat/link-builder.git`
2. `cd link-builder`
3. `npm install` or `npm i` for all you shortcut junkies

### Prerequisites

If you don't already have a custom bot setup for your server, navigate [here](https://discordapp.com/developers/applications/me) and go through the necessary steps in order to setup
a bot for your server.

After completing that, copy the token (you might have to click to reveal it) for your bot and paste it in `config.json`


## Deployment

Once you have the `config.json` file finished, and if you're navigated into the `link-builder` folder already, simply
run `node index.js`. This will start the bot for you.

## Usage

You can choose to setup a given channel for this, but I won't go into all that babysitting here. To run the link builder,
simple type: `$build <link to product>`

For example, this will build the checkout links for [NIKE X ACRONYM AIR VAPORMAX FK MOC 2](https://kith.com/collections/footwear/products/nkaq0996-102)

`$build https://kith.com/collections/footwear/products/nkaq0996-102`

## Authors

**Matthew Wall (me)** - [walmat](https://github.com/walmat)

## License

This project is licensed under the GNU GENERAL PUBLIC License - see the [LICENSE](LICENSE) file for details

