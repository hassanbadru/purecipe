# Recipe Finder - Purepoint

## Description
A recipe finder app using the RecipePuppy API: `http://www.recipepuppy.com/about/api/`



## API Query:
Users can type in a search query for the name of a recipe:

**q** : normal search query
###### Example:
`http://www.recipepuppy.com/api/?&q=omelet`


## Set Up / Running App
- Download & unpack Hassan_Purepoint.zip file
- Assuming you already have *Node* or *NPM*, while inside **purecipe** folder, install node_modules (express dependencies) using `npm install`
- Go to the **frontend** folder, while within, install node_modules (frontend dependencies) using `npm install`  *(if not, check out [How to install Node ](https://nodejs.org/en/download/package-manager/))*
- To start express server that fetches API, run the command `npm start` 
- To run react, run the command `npm start` while inside **frontend** folder
- On your browser, go to http://localhost:3000 to run application


## Requirements
* As the user types in a search query for the name of a recipe, search results should be
displayed in a list (i.e. each time the user adds or removes a character to the search
term, the list may update).
* Only the first 20 results of a search are displayed.
* You may use a framework like create react app if this suits



## Technology Stack Used
* ##### HTML5 / CSS (root)
* ##### REACT JS (Frontend)
* ##### Node / Express (Backend/API)

## How the App Works
### Using Express as proxy server an


#### No Search:
![alt text](https://docs.google.com/uc?id=1OfOgWdloEvD6BziAwo85PhHHAqIUBULP "screenshot1")



#### Search Result:
![alt text](https://docs.google.com/uc?id=1esNgdUoWj_kUlZ_exMWe8ckz5O6Uhpmg "screenshot2")


#### No Result Found
![alt text](https://docs.google.com/uc?id=1s9MvR_HGWg03WGL6QxNSuFo6ETtAq5xk "screenshot3")




## Folder Structure
```
Hassan_PurePoint
    ├── README.md
    ├── purecipe
    ├── frontend
    │   ├── README.md
    │   ├── build
    │   │   ├── asset-manifest.json
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   ├── service-worker.js
    │   │   └── static
    │   │       ├── css
    │   │       │   ├── main.a203576f.css
    │   │       │   └── main.a203576f.css.map
    │   │       ├── js
    │   │       │   ├── main.c96fb44e.js
    │   │       │   └── main.c96fb44e.js.map
    │   │       └── media
    │   │           └── intro-bg.fb30f247.jpg
    │   |
    │   ├── package.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   ├── src
    │   │   ├── App.js
    │   │   ├── App.test.js
    │   │   ├── css
    │   │   │   ├── App.css
    │   │   │   └── index.css
    │   │   ├── img
    │   │   │   └── intro-bg.jpg
    │   │   ├── index.js
    │   │   ├── logo.svg
    │   │   └── registerServiceWorker.js
    │   └── yarn.lock
    ├── bin 
    |   └── www
    ├── routes
    |   └── index.js
    ├── app.js
    ├── package.lock.json
    └── package.json
    ```
      

