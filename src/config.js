export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: true,
  showConfigure: false,
    // each time the app is run, it will check this manifest and update the firebase database
    // if new entries are there, they will be added, and entries that aren't in the manifest
    // but are in the firebase database will be *removed*
  manifestS3: {
    bucketURL: 'https://cors-anywhere.herokuapp.com/https://braindrles.s3-us-west-1.amazonaws.com/?list-type=2&prefix=gifbrles',
    bucket: 'braindrles',
    prefix: '',
    delimiter: '',
  },
  manifestType: 'S3',
  widgetType: 'ImageSwipe', // 'EvalNHA',
  widgetUsesSecret: false,
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-1.amazonaws.com/braindrles/{0}.gif',
    delimiter: '__',
    leftSwipeLabel: 'Fail',
    rightSwipeLabel: 'Pass',
  },

/* eslint-enable */
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: 'fish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: 'frog',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: 'duck',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: 'cat',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: 'lion',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true',
    },
  },

    // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

    // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyAYB2jWWdStY3yV8FjWo6pwIv6mLt2ezZw',
    authDomain: 'braindrles.firebaseapp.com',
    databaseURL: 'https://braindrles.firebaseio.com',
    projectId: 'braindrles',
    storageBucket: '',
    messagingSenderId: '895217350482',
  },

  app: {
    navbarVariant: 'danger',
  },

    // Homepage configuration
    // your app's title and tagline
  home: {
    title: 'braindrles',
    tagline: 'Swipe right for results',
      // background image on Homepage
    backgroundUrl: 'https://braindrles.us/static/img/mainGIF.dee1125.gif',
  },

    // Play configuration
  play: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg?sanitize=true',

  },

    // Chats configuration
  chats: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg?sanitize=true',
  },

    // Profile configuration
  profile: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg?sanitize=true',
  },

    // your app's tutorial page
    // describe your problem and the way you want people to annotate
  tutorial: {
      // there is only 1 available custom animiation right now, and its 'Bubbles'
    customBackgroundAnimation: null,
      // steps have 2 parts, the intro and examples. In the intro you provide
      // text and images. In the examples, you provide text, data pointers, and tutorial steps
      // that the widget will display
    steps: {
      intro: [
        {
            // keep the text really short
          text: 'Stroke causes lesions, aka holes in the brain:',
          image: 'https://braindrles.us/static/img/gifbrles_Intro.bbc77c9.gif',
        },
        {
            // use \n to linebreak the text
          text: `Lesions can be anywhere in the brain and come in all shapes and sizes. \n
          In a passing image, you can clearly see the lesion correctly labeled in red:`,
          image: 'https://braindrles.us/static/img/gifbrles_BigLes.0077eb0.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `In a failing image, the lesion mask (in red) is incorrectly labeled. 
          Sometimes the lesion mask covers healthy tissue:`,
          image: 'https://braindrles.us/static/img/gifbrles_FailTooMuch.9cbbf06.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `Sometimes you won't see a lesion but there is a lesion mask anyway:`,
          image: 'https://braindrles.us/static/img/gifbrles_FailTooMuch2.6e9cc83.gif',
        },
      ],
      examples: [
        {
            // fill these with examples with respect to the widget you're using
          text: 'swipe right when the lesion is filled correctly',
          pointer: 'gifbrles_031926',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'swipe left when its bad',
          pointer: 'gifbrles_c0005s0026t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'gifbrles_031899',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },
};
