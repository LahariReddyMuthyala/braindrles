# braindrles

> a firebase app for braindrles: Tinder for brains with lesions (a derivative of braindr - Tinder for brains)

##Overview on the general process

1. Generate content (images, audio, etc. to rate)
2. Set up Amazon S3 account to host said content.
3. Buy domain name.
4. Set up and configure firebase account.
5. Create your own -dr github repo.
6. Deploy!
7. As admin, score some of the content for the tutorial.
8. Share the site and enjoy!

## 1. Generate content (images, audio, etc. to rate)
For braindrles, T1-weighted MRIs with binarized lesion masks in the same space are needed.
You can run the code at github.com/NPNL/brainpics to generate your figures.
Once the images are generated, create a json file that contains all of the image file names.
The variables "ave_score" and "num_votes" should also be initialized to 0.
Sample code:

```
for im in image_files:
    fname = im.split("/")[-1].replace(".png", "")
    output[fname] = {"ave_score": 0, "num_votes": 0}

import simplejson as json

with open("manifest.json", "w") as f:
    f.write(json.dumps(output))
```

See the examples/01_makebrainpics for a script to generate images, file structure, and the resulting json file.

Note: Images in braindrles are currently .png. If you switch to .jpg, you'll need to change the code.

## 2. Set up an Amazon S3 account to host said content.
Set up an account here: https://aws.amazon.com/s3/
Navigate to Amazon S3. Create bucket. Pick the region closest to you.
On the set permissions page, make sure to set "Manage public permissions" to "Grant public read access."
Upload your images or content to the new bucket, and copy the URL to the bucket.
For example: https://s3.console.aws.amazon.com/s3/buckets/braindrles

## 3. Buy domain name.
Find and purchase a domain name here: domains.google.com
Pick your favorite domain name. Purchase.
For reference, the domain name braindrles.us costs $12/year.

## 4. Set up and configure firebase account.

1. Create a firebase account
2. Click on "Web Setup" and copy paste your config into `src/firebaseConfig.js`
3. Go to the Authentication and click "Sign-In method" and enable Email/Password
4. Go to the Database tab and click "Rules" and copy paste the following:

```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "users": {
      ".read": true,
      ".write": "auth != null",
    },
    "settings": {
      ".read": true,
      ".write": false,
    }
  }
}
```

5. run the app: `npm run dev` and open `localhost:8080`. Create a new account
6. Go to the Database tab in Firebase. Create key value pairs like this:

```
settings: {
  admins: {
    your_username: true,
  },
}

users: {
  your_username: {
    admin: true
  }
}

imageCount: 1
```
7. Click on imageCount. Import the JSON file w/ pointers to your images into here:
```
{
  imageFilename1: {
    ave_score: 0,
    num_votes: 0
  },
  ...
}
```
If you don't have this file, to test, you can upload the `abide_images.json` file in this folder.

Your database should now look like:

![](braindr-databaseSetup.png)


## 5. Create your own -dr github repo (aka, yourdr).
Pull and clone the braindr github repo (https://github.com/OpenNeuroLab/braindr).
Create your own -dr github repo (from here on, referred to as "Github.com/yourdr")
Make edits to your new files. You will need to edit the following files:

In /src/components:
About.vue
Home.vue
Images.vue
Play.vue
Tutorial.vue

.Vue files are [...]

In Tutorial - create your own tutorial to tell people how to play yourdr.
Upload images to use in the tutorial into /src/assets

In Images - input your amazon web server address.

In Play - Edit the `imageBaseUrl` to point to your images. The url will have the image name appended to the end with the `.png` extension

In About/Home/Play, search/replace braindr with your own name (yourdr).

You can preview yourdr in a browser at `localhost:8080`
Start playing and make sure it works.
When you're done, push changes to yourdr github repo.

## 6. Deploy!
In a terminal, navigate to the main Github/yourdr folder (e.g., cd local/Github/yourdr)

```
cd yourdr
npm run build
cd ./firebase/public/
cp -r ../../dist/* ./
cd ./firebase/
../node_modules/firebase-tools/bin/firebase deploy
```

This should compile all the .vue files and build the site.

[Somewhere - assign firebase web address to the purchased web domain...]


## 7. As admin, score some of the content for the tutorial.
Log into yourdr under your admin username.
Go to: https://braindr.us/#/images (replace braindr.us with yourdr address)
This should load all the images you want people to review.
Hover your mouse over each image, and you will see two buttons at the bottom (pass, fail).
Click pass or fail (whichever is correct) and it will become bold. This assigns it an admin score.
Pass and fail at least 5 examples - these will be used as content for the tutorial.
The more diverse the better.


## 8. Share the site and enjoy!

You did it! Go yourdr!



## Additional npm commands for reference (Build Setup)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
