const config = {};

config.DEFAULT_IMAGES_PATH = "./images/";
config.DEFAULT_METADATA_PATH = "./metadata/";
config.DEFAULT_HASHES_PATH = "./hashes/";

// UPDATE THESE CONSTANTS BELOW WITH YOUR VALUES
config.GIF_FRAMES = 10;
config.IMAGES_BASE_URI = "https://base-uri-to-my-nft-images.com/";
config.IMAGES_HEIGHT = 2560;
config.IMAGES_WIDTH = 2560;
config.TOKEN_NAME_PREFIX = "ALPHpaca #";
config.TOKEN_DESCRIPTION = "They eat hay, they spit and they live on Alephium. ALPHpacas.";
config.TOTAL_TOKENS = 333;

// UPDATE THIS ARRAY BELOW WITH YOUR TRAITS LIST
config.ORDERED_TRAITS_LIST = [
  {
    type: "Background",
    options: [
      {
        image: "./traits/1Background/BACKGROUND.png",
        value: "Background",
        weight: 100,
      }
    ],
  },
  {
    type: "Paca",
    options: [
      {
        image: "./traits/2Paca/ALIEN.png",
        value: "ALIEN",
        weight: 5,
      },
      {
        image: "./traits/2Paca/DARKPACA.png",
        value: "DARKPACA",
        weight: 25,
      },
      {
        image: "./traits/2Paca/PACA.png",
        value: "PACA",
        weight: 50,
      },
      {
        image: "./traits/2Paca/WHITEPACA.png",
        value: "WHITEPACA",
        weight: 35,
      },
      {
        image: "./traits/2Paca/ZOMBIE.png",
        value: "ZOMBIE",
        weight: 10,
      }
    ],
  },
  {
    type: "Tattoo",
    options: [
      {
        image: "./traits/3Tattoo/CLEAR.png",
        value: "NO TATTOO",
        weight: 60,
      },
      {
        image: "./traits/3Tattoo/DIMPLES.png",
        value: "DIMPLES",
        weight: 20,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/3Tattoo/FRECKLES.png",
        value: "FRECKLES",
        weight: 15,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/3Tattoo/LIGHTINGSCAR",
        value: "LIGHTING SCAR",
        weight: 5,
      }
    ],
  },
  {
    type: "Eyes",
    options: [
      {
        image: "./traits/4Eyes/EYESANGRY.png",
        value: "ANGRY",
        weight: 10,
      },
      {
        image: "./traits/4Eyes/EYESHAPPY.png",
        value: "HAPPY",
        weight: 10,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/4Eyes/EYESMAD.png",
        value: "MAD",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/4Eyes/EYESPLEASANT.png",
        value: "PLEASANT",
        weight: 10,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/4Eyes/EYESREGULAR.png",
        value: "NORMIE",
        weight: 50,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/4Eyes/EYESTINY.png",
        value: "TINY",
        weight: 15,
      }
    ],
  },
  {
    type: "Glasses",
    options: [
      {
        image: "./traits/5Glasses/CLEAR.png",
        value: "NO GLASSES",
        weight: 50,
      },
      {
        image: "./traits/5Glasses/CYBORG.png",
        value: "CYBORG",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/5Glasses/GLASSES.png",
        value: "GLASSES",
        weight: 20,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/5Glasses/PARTYGLASSES.png",
        value: "PARTY GLASSES",
        weight: 10,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/5Glasses/PINKGLASSES.png",
        value: "PINKY",
        weight: 1,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/5Glasses/SUNGLASSES.png",
        value: "SUN GLASSES",
        weight: 10,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/5Glasses/VIGILANTE.png",
        value: "VIGILANTE",
        weight: 4,
      }
    ],
  },
  {
    type: "Neck",
    options: [
      {
        image: "./traits/7Neck/ALPHSHIRT.png",
        value: "ALPH LOVER",
        weight: 10,
      },
      {
        image: "./traits/7Neck/ALPHSHIRT2.png",
        value: "DARK MODE ALPH",
        weight: 10,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/7Neck/CLEAR.png",
        value: "CLEAR",
        weight: 75,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/7Neck/GOLDCHAIN.png",
        value: "GANGSTER",
        weight: 2,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/7Neck/SPIKEDCOLLAR.png",
        value: "GOTH",
        weight: 3,
      }
    ],
  },
  {
    type: "Hats",
    options: [
      {
        image: "./traits/8Hats/ARMY.png",
        value: "ARMY",
        weight: 5,
      },
      {
        image: "./traits/8Hats/BASEBALLCAP.png",
        value: "BASEBALL",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/8Hats/BEANIE.png",
        value: "BLUE BEANIE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/BEANIE2.png",
        value: "RED BEANIE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/BEANIE3.png",
        value: "BLACK BEANIE",
        weight: 5,
      },
      {
        image: "./traits/8Hats/COWBOYHAT.png",
        value: "COWBOY",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/8Hats/CROWN.png",
        value: "ROYALTY",
        weight: 5,
      },
      {
        forbidden: ["WHITEPACA"],
        image: "./traits/8Hats/EARSREGULAR.png",
        value: "REGULAR EARS",
        weight: 15,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/EASTERBUNNY.png",
        value: "EASTER BUNNY",
        weight: 5,
      },
      {
        image: "./traits/8Hats/HELIHAT.png",
        value: "HELI",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/8Hats/HOODIERED.png",
        value: "HOODIE",
        weight: 2,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/LIMEMOHAWK.png",
        value: "LIME HAWK",
        weight: 3,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/LONGHAIRBLONDE.png",
        value: "BLONDE",
        weight: 5,
      },
      {
        image: "./traits/8Hats/MAMMOTH.png",
        value: "WOOLY",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/8Hats/PINKMOKAWK.png",
        value: "PINK HAWK",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/REGULARHAIR.png",
        value: "NORMIE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/SOMBERO.png",
        value: "SOMBERO",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/STRIPEDBLUE.png",
        value: "BLUE STRIPE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/STRIPEDRED.png",
        value: "RED STRIPE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/TAIL.png",
        value: "TAIL",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/8Hats/TAILBLONDE.png",
        value: "TAIL BLONDE",
        weight: 5,
      }
    ],
  },
  {
    type: "Mustache",
    options: [
      {
        image: "./traits/9Mustache/BUSHY.png",
        value: "BUSHY",
        weight: 5,
      },
      {
        image: "./traits/9Mustache/CLEAR.png",
        value: "CLEAR",
        weight: 50,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/9Mustache/COMICAL.png",
        value: "COMICAL",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/9Mustache/LESTACHE.png",
        value: "LESTACHE",
        weight: 1,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/9Mustache/SANTA.png",
        value: "SANTA",
        weight: 5,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/9Mustache/SHAVEDTRIM.png",
        value: "SHAVEDTRIM",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/9Mustache/TEE.png",
        value: "TEE",
        weight: 5,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/9Mustache/REGULARTEE.png",
        value: "REGULARTEE",
        weight: 24,
      }
    ],
  },
  {
    type: "Mouth",
    options: [
      {
        image: "./traits/10Mouth/BUCKTEETH.png",
        value: "BUCK TEETH",
        weight: 10,
      },
      {
        image: "./traits/10Mouth/CLEAR.png",
        value: "CLEAR",
        weight: 50,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/10Mouth/GOLDENGRILL.png",
        value: "GANG TEETH",
        weight: 10,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/10Mouth/HUNGRY.png",
        value: "HAY",
        weight: 10,
      },
      {
        //forbidden: ["Robin"],
        image: "./traits/10Mouth/SMILE.png",
        value: "SMILE",
        weight: 10,
      },
      {
        //allowed: ["Coral", "Mint"],
        image: "./traits/10Mouth/SMOKE.png",
        value: "SMOKY",
        weight: 10,
      }
    ],
  }
];

module.exports = config;
