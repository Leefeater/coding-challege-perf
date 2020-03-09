#React performance challenge
Super janky react app, fairly simple solution.  I would love to see how you handle it.  
Send me a link to your code with a message describing what you did. nathanhargitt@gmail.com

## Getting Started
fork/clone

`npm i`
`npm run dev`

## About the file structure

All changes will be made in `/app` as this is where the react code is.  The rest of the structure is set up.

This is a Next.js app. Next renders anything in `/pages` as actual urls so if there were a file in there named `about.js`
and you navigated to `localhost:3000/about` it would serve that file as the page.  In this case there is only an  `index.js`
so no need ot worry about this much save this is where the contents of `/app` are rendered.

`/page/api` is the fake service I'm using to send blog posts.