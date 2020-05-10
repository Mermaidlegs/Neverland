## NEVERLAND 
 link https://neverland-art.web.app/
 Project documentations (Group 6)
 Shujian Guan frontend developer;
 Lin Liu user experience designer; 
 Xitao Mo backend developer; 
 Yijing Liu backend developer.

## NEVERLAND introduction
 NEVERLAND is an online interactive gallery for exploring the collections of the Art Institute of Chicago. 
 During the development of this website, we tried our best with humidity and respect to design the approach to deliver the values we would like to bring to the friends of NEVERLAND. Based on the core idea of NEVERLAND, which is to share the knowledge of each individuals and value their personal feelings and thoughts, we tried our best to design the platform in an intuitive and non-intrusive way. 
 Here you can see NEVERLAND as a reflective, inspirational, immersive and recreational place to have fun and get relaxed. 
 The essences of NEVERLAND is exploration. You may find some barriers when you use NEVERLAND for the first time. However, we hope you can spend some more time to explore and appreciate the art pieces which are randomly chosen and enjoy your experience on NEVERLAND. 

## !important TIPS
 For the reason of providing immersive experience on website, we hide the cursor in the welcome page, and we made the displaying page without any additional elements but a clean artwork picture. 
 you can do:
 On the landing page, we hide the cursor. Please scroll down and try to click on "NEVERLAND"
 On the gallery page, please click or press left or right direction arrow on the keyboard to go to next art piece or the detail page with the current art piece infomations.
 On the detail page, please click on the art piece to go to the sign in/sign up page, press up-directio- button or do mouse click to go back to big gallery displaying page,  or click "about us"to read
 On Sign-in Sign up page, actions can be done as their normal case. After sign-in, you'll be redirected to your personal gallery with all your likes artworks. 
 On your private gallery page, you can click back button to go back to details page.

## SETUP for local running project
 - install node.js, npm, material-ui, mongoDB;
## SETUP for online running project
 - deploy website, firebase, Heroku;

## Project Description 
- This is an interactive website for exploring the collections of the Art Institute of Chicago. Aiming for
 - People who have internet access;
 - People who is interested in art but don’t have time for visiting museums or travelling abroad;
 - People who want to have some leisure time and appreciate the art;
 - People who want to get some inspiration from art.
to accept new concepts and enhance their appreciation approach for online art pieces. 

## Functions description: 
 Display introduction text , images and other interesting features of the most favourite exhibition.
 Users can sign up accounts with their emails and login to their personal page.
 Users can star their favourite exhibitions.
 Users can search specific exhibitions by offering some information, e.g. category, year,  name, nationality. 
 Main page for randomly displaying collections with their descriptions.  
 Some interactive features for buttons, scrolling would be innovated later.  

Official website of the art Institute of Chicago : www.artic.edu/collection

## Framework(s)  
 - Mainly React, Redux, Firebase, Node.js will be used. React is for building functional front end DOM components, while Redux is for storing and managing the application state and necessary data on which the components are dependent. As for web hosting, we deploy our pages on firebase so as to enable internet access. Also, we run our custom API service by employing Node.js.
API 
 - API: https://aggregator-data.artic.edu/docs/fields#collections the information and details about the artwork.
 - Data from API and our app specifically: Users account informations, favorite items list are our app specific.  

## Agile development
Basic:
 We start achieving structure and functionalities of Home page without database involving, and user research.
 Construct plans for our assigned part of project
 Keep everyone on the same page. 
 Setup react, node, redux…
 Primary and secondary research for UX

Cooperation and work distribution:
 frontend design team (Lin and Shujian)：
  -	Document the core value of this product, and what concept we want to deliver to the world.
  -	Finish product flow diagram.
  -	Finish interactive high-fi prototype, using figma.
  -	Reflection on each page and expert user evaluation.
  -	Refine the structure of the pages 
  -	optional: Draw a product UML for development using.
  -	UX effects design 
 backend design team (Xitao and Yijing)：
  -	learn Node.js, firebase
  -	design the database
  -	initializing the database design

## Core value:
 exploration and sharing

## User flow: 
 1 welcome page--(find the entrance)-->2 daily exhibition(immersive experience)--(3 natural action)-->4 details page(learn knowledge)--(5 entrance to the private gallery, sign in and sign up)--(6 star button)-->7 private gallery

 explanation on the user flow:
 1. introduction on what could be found in NEVERLAND; design mechanics to find the entrance, higher the barrier of finding the entrance for introducing more expoloration;
 2. provide simple and clear interfaces; reduce additional visual elements as much as possible;
 3. less affordance will lead to bad feel of control, set natural actions for user to explore;
 4. cluster the information;
 5.& 6.& 7.  NEVERLAND is an open place where a lot of cultual relics are, not a place for storage. Users come here to contribute to the whole universe instead of emmerse in his/her own taste. Once the users have the resonance and have feelings upon the art piece, they can get the sign-in and sign-up page visible. The contribution of adding persoanl feelings and reflections upon the art pieces are the tickets to private gallery. We adore and admire the deeds of contribution. 

## Prototype:
 figma:https://www.figma.com/proto/wsHZSO7pfOsVrOIF8He4IB/online-museum?node-id=82%3A3&scaling=min-zoom
 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## User evaluation
 check "user evaluation report/pdf" for more details.

## Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

###### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

###### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

###### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

###### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

###### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

###### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

###### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
