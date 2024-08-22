# NFT Collection Generator

## About

This is a simple Node.js project that uses a list of pre-configured traits and image layers to generate a unique set of images and metadata files for a collection of NFTs. You would be able to create your own collection by updating the traits configuration and the image layers.

## Getting Started

### Prerequisites

- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/manuelpires/nft-collection-generator.git
   ```

2. Inside the repo directory install NPM packages

   ```sh
   npm install
   ```

## Usage

There's an example configuration in the `config.js` file, and there's also some pre-defined image layers in the `traits` folder. You can test and run this project with that pre-existing configuration to see first how everything works and to see the results.

### Test the configuration

Test the current configuration in the `config.js` file

```sh
npm test
```

This will only test if the current configuration is correct or not.

### Run the project

Run the project with the current configuration

```sh
npm run build
```

This will execute the main script. If successful, it will:

- Print logs with statistics about the results in the console
- Generate a folder with all the tokens images
- Generate a folder with all the tokens metadata files

### Other scripts

#### Update images base URI

After running the project, you can update the images base URI inside all generated metadata files by running:

```sh
npm run update-base-uri
```

This will take the current value of `IMAGES_BASE_URI` inside `config.js` and use it to update all metadata files.

#### Create GIF with images

After running the project, you can create a GIF using the generated images:

```sh
npm run create-gif
```

#### Calculate hashes of images

After running the project, you can launch the following script to calculate the SHA-256 hash of every image generated and also print the final provenance hash of all of them:

```sh
npm run calculate-hashes
```

## Create Your Own Collection

To create your own collection of unique tokens, you'd have to edit only the `config.js` file and update the image layers in the `traits` folder.

The metadata generated by running this project should be compatible with [OpenSea's Metadata Standards](https://docs.opensea.io/docs/metadata-standards). If you are not familiarized with those standards, you should give that page a read as it would help a lot to understand how to update the `config.js` file. Also, make sure to first run the project with the example configuration and check out the generated metadata files for more clarification about the process.

### Modify constants

These are the constants that you'd need to update in the `config.js` file:

```JS
config.GIF_FRAMES = 10; // only if you want to generate a GIF
config.IMAGES_BASE_URI = "https://base-uri-to-my-nft-images.com/";
config.IMAGES_HEIGHT = 350;
config.IMAGES_WIDTH = 350;
config.TOKEN_NAME_PREFIX = "My NFT #";
config.TOKEN_DESCRIPTION = "My NFT description.";
config.TOTAL_TOKENS = 100;
```

### Modify traits list

You'd also have to modify the last variable called `ORDERED_TRAITS_LIST` that contains the array of all available traits for the tokens.
Each _trait_ has the following structure:

```JS
{
  display?: string;
  ignore?: boolean;
  type?: string;
  options: {
    allowed?: string[];
    forbidden?: string[];
    image?: string;
    value?: string | number;
    weight: number;
  }[]
}
```

Before modifying the _traits_ list, please go through the next important instructions:

- For every _trait_ in the list, each generated token will get **one** randomly selected _option_ (_value_ & _image_) from the _options_ list. Except if the randomly selected _option_ turns out to have a non-existent _value_, in which case the token won't get **anything** from that specific _trait_.
- The order of the list **is important!** It will define the order in which the images should be merged on top of each other to create the final token image. Tipically, the background _trait_ should be the first in the array.
- The random selection of the _option_ is based on its _weight_ and its optional _allowed/forbidden_ conditions. The _weight_ of an _option_ is **relative** to the _weights_ of the other items in the same _options_ array, and it should be an integer of at least 1. So if you put a _weight_ of 10 in an _option_, it should have 10 more times chances to be selected that an _option_ in the same array that has a _weight_ equal to 1.
- If a _trait_ is marked with _ignore_, then that _trait_ won't be taken into account when defining token uniqueness. For instance, if you don't want the background of your tokens to affect their uniqueness, then you can mark that background _trait_ with `ignore: true`.
- The optional _allowed/forbidden_ arrays should include one or more strings that match _option values_ of previous _traits_. When used, it will make this _option_ **only** allowed/forbidden for tokens that have **at least** one of those string _values_ previously selected. For reference, look at the _allowed_ and _forbidden_ arrays used as example in the `config.js` file. In this case an "Orchid" triangle would only be available for tokens with "Coral" **or** "Mint" backgrounds; and also a "Teal" triangle will **not** be available for tokens with "Robin" background.
- Each defined _type_ inside a _trait_ should be unique.
- If you leave a specific _trait_ without a _type_ field, it will be considered a "generic" _trait_. It's important that these kind of _traits_ don't have any _values_ in common with other _traits_ inside their _options_ array.
- Each _image_ string should have the relative path to a specific PNG image.
- If you don't put an _image_ field in every _option_ with a defined _value_, some of your tokens (even with unique metadata) could turn out with the same generated image.
- The _display_ field is only meant to be used with number _values_. Read more at the [OpenSea's Metadata Standards](https://docs.opensea.io/docs/metadata-standards).
- Depending on the amount of _traits_ that you have and their amount of _options_, you will have a maximum amount of unique tokens that could be generated. It isn't recommended generating the exact maximum possible amount of unique tokens, because the script will keep searching no matter the odds until it finds each one of the combinations, leaving the weighting factors useless. As a recommendation, I would say that if you want to generate N tokens, then create a list of _traits_ that can give you **at least** 2N tokens. The process will let you know if the value of `TOTAL_TOKENS` is too big when you try to run it.

> Running the command `npm test` will verify that these set of rules are taken into account within your current configuration, and that the generated metadata would follow the standards. Use it!

## Arweave Upload!

You will need a arweave walletFile.json (or a wallet key file with arweave). <a href="https://arweave.app/"> Arweave Online Wallet </a> 

From here it will ask you to backup your wallet and you should jot down your 12 word passphrase and do the walletFile.json backup. It is important this file is named `walletFile.json` or the scripts will not work.

Once you have you walletFile.json in the project and you have it funded with arweave. It is important to have the right amount to store all your data on the arweave blockchain. To confirm your arweave amount and data upload refer to this site for upload costs. <a href="https://ar-fees.arweave.dev"> Arweave Fee Calculator </a>

> Uploading images (THIS MUST BE DONE FIRST but after you GENERATE YOUR IMAGE FILES). You can begin the image upload with the command `npm run upload-images`. Depending on the amount of files and file sizes you should plan to let the upload process without interuption; if interupted the manifest upload will most likely fail. Once it suceeds you will have a manifest url like this. `https://emji6bgqbxcf2i4t22pa2nzjqtmpdl576ihefzjwu5z2hqlr4yma.arweave.net/IxKPBNANxF0jk9aeDTcphNjxr7_yDkLlNqdzo8Fx5hg` adding a `/0` to this url gets you the first image of the manifest and so forth up to 200 in this example.

> uploading metadata (YOU FIRST MUST CONFIGURE THIS `config.IMAGES_BASE_URI = "https://base-uri-to-my-nft-images.com/";`) in the config.js (you would use a link similar to this but your own: `https://emji6bgqbxcf2i4t22pa2nzjqtmpdl576ihefzjwu5z2hqlr4yma.arweave.net/IxKPBNANxF0jk9aeDTcphNjxr7_yDkLlNqdzo8Fx5hg/` and then run `update-base-uri`) After both of these are done you should see your metadata with the links that correspond to each image using your image manifest upload link. You can now begin the manifest metadata upload `npm run upload-metadata` The manifest url can now be used for creating your nft collection as the nft base uri.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Manuel Pires - manuelpiresok@gmail.com

Project Link: [https://github.com/manuelpires/nft-collection-generator](https://github.com/manuelpires/nft-collection-generator)
