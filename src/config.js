import braindrles from '@/assets/braindrles.gif';

export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: true,
  showConfigure: false,
  needsConsent: true,
    // each time the app is run, it will check this manifest and update the firebase database
    // if new entries are there, they will be added, and entries that aren't in the manifest
    // but are in the firebase database will be *removed*
  manifestS3: {
    bucketURL: 'https://cors-anywhere.herokuapp.com/https://braindrlesgifs.s3-us-west-1.amazonaws.com/?list-type=2&prefix=gifbrles&max-keys=10000',
    bucket: 'braindrlesgifs',
    prefix: '',
    delimiter: '',
  },
  manifestType: 'S3',
  widgetType: 'ImageSwipe', // 'EvalNHA',
  widgetUsesSecret: false,
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-1.amazonaws.com/braindrlesgifs/{0}.gif',
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
      max: 10,
      character: null,
      img: null,
      img_grey: null,
      truth_prob: 1,
    },
    1: {
      level: 1,
      min: 10,
      max: 15,
      character: 'snail',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F40C.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F40C.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 16,
      max: 40,
      character: 'turtle',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F422.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F422.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 41,
      max: 70,
      character: 'panda',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F43C.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F43C.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 71,
      max: 100,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
      truth_prob: 0.1,
    },
    5: {
      level: 5,
      min: 101,
      max: 130,
      character: 'tiger face',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F42F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F42F.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 131,
      max: 175,
      character: 'two-hump camel',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F42B.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F42B.svg?sanitize=true',
    },
    7: {
      level: 7,
      min: 176,
      max: 200,
      character: 'blowfish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F421.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F421.svg?sanitize=true',
    },
    8: {
      level: 8,
      min: 201,
      max: 230,
      character: 'spouting whale',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F433.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F433.svg?sanitize=true',
    },
    9: {
      level: 9,
      min: 231,
      max: 290,
      character: 'octopus',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F419.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F419.svg?sanitize=true',
    },
    10: {
      level: 10,
      min: 291,
      max: 300,
      character: 'unicorn face',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F984.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F984.svg?sanitize=true',
    },
    
    
    
  },

    // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

    // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyCNLq_efw3EQLSJi1H9bFEwkkmvggrfoYI',
    authDomain: 'braindr-les.firebaseapp.com',
    databaseURL: 'https://braindr-les.firebaseio.com',
    projectId: 'braindr-les',
    storageBucket: 'braindr-les.appspot.com',
    messagingSenderId: '102313057158',
  },

  app: {
    navbarVariant: 'danger',
  },

    // Homepage configuration
    // your app's title and tagline
  home: {
    title: 'braindrles',
    tagline: 'Help us learn about stroke',
      // background image on Homepage
    backgroundUrl: braindrles,
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
        {},
        {
            // keep the text really short
          text: 'Stroke causes lesions, which appear as holes or darker colored regions in the brain:',
          image: 'https://raw.githubusercontent.com/SwipesForScience/braindrles/master/src/assets/tutorialpics/gifbrles_031859_intro.gif',
        },
        {
            // use \n to linebreak the text
          text: `Lesions can be anywhere in the brain and come in all shapes and sizes. \n
          In a passing image, you can clearly see the lesion correctly labeled in red:`,
          image: 'https://raw.githubusercontent.com/SwipesForScience/braindrles/master/src/assets/tutorialpics/gifbrles_031910_large.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `In a failing image, the lesion mask (in red) is incorrectly labeled. 
          Sometimes the lesion mask covers healthy tissue:`,
          image: 'https://raw.githubusercontent.com/SwipesForScience/braindrles/master/src/assets/tutorialpics/fail_gifbrles_c0011s0006t01_no_lesion.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `Sometimes you won't see a lesion but there is a lesion mask anyway:`,
          image: 'https://raw.githubusercontent.com/SwipesForScience/braindrles/master/src/assets/tutorialpics/fail_gifbrles_c0007s0014t01_wrong.gif',
        },
      ],
      examples: [
        {
            // fill these with examples with respect to the widget you're using
          text: 'Swipe right when the lesion is filled correctly',
          pointer: 'gifbrles_031926',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'Swipe left when its bad',
          pointer: 'gifbrles_c0005s0026t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Sometimes the lesion is in a different part of the brain, but still correct, so you should swipe right',
          pointer: 'gifbrles_031950',
          answer: 1,
          tutorialStep: 0,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Other times, the lesion is more subtle, but still correct, so you should swipe right',
          pointer: 'gifbrles_031946',
          answer: 1,
          tutorialStep: 0,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Still other times, there may be more than one lesion - make sure the lesion mask covers all of the lesions before you swipe right',
          pointer: 'gifbrles_031947',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'However, if the lesion mask is in the right place but too big (e.g. encompasses a lot of healthy tissue too), swipe left',
          pointer: 'gifbrles_c0011s0009t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: 'And sometimes, the computer generates REALLY CRAZY lesion masks! Like this one. Definitely swipe left.',
          pointer: 'gifbrles_c0007s0032t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `Finally, if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'gifbrles_031899',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play? Don\'t worry about making mistakes - you\'ll get guidance on some brains as you go along, and you can always return to the tutorial or ask for help on a brain with the "Help" button if you\'re not sure',
          tutorialCompleted: true,
        },
      ],
    },
  },
};
