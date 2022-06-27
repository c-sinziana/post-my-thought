# Post My Thought

A responsive web application used to share posts about different topics with reactions (which also includes uploading an image from local files). 

Used technologies were React with JS, Redux, HTML and CSS.

## Live site:

App link: https://c-sinziana.github.io/post-my-thought/

## Setup guide:

`node` and `npm` are needed to be installed globally on the machine with the cloned project.  

Installation:

`npm install`  

To start the server:

`npm start`   

## Personal notes:

This was the project that helped me get used to Redux and its functions. 

In order to create the sample posts, I created and initialState constant that would appear in the first instance. 

In order to explore more the functionality of Redux, I have created a list of three authors from which the user can select one. 
The post must have an author in order to be posted.

After the user creates his own posts, the order changes and the most recent post appears on the first position.

The post can't be shared without an image, which the user can upload from personal files.

After that, I added 4 types of reactions - like, flower, flame and coffee - which the user can click on. 
The reactions are dynamic and they have a counter with how many times they are pressed.

What I found challenging was to show the time each post was published and to automatically update it. 
