#parcel(http://parceljs.org/) zero config build tool
-dev build
-local s/r
-hmr -hot module replacement(reload page/live server)
-file watching algo-written in c++-wch takes less time every repeated build
-caching
-image optimization
-minification
-bundling
-compress
-consistent hashing(
        a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table by assigning them a position on an abstract circle, or hash ring. This allows servers and objects to scale without affecting the overall system
    )
-code splitting
-differential bundling(support older browsers)
-diagnostic(display error on screen)
-error handling
-use https as well


# dist folder 
    it contain dev build r prod build
    in npx parcel build index.html, it will build, bundle all the files in dist folder
    same dist is used in dev build.
    hosted stuff or output comes from dist folder
    (with npx command, it generates a dev build and host on 1234(dist folder) )
    parcel+dist will gv live server thing



## export :-> named and default
## React Hooks(normal JS utility function)
### useState()-it is used to create superpowerful variables in react
    -import it from react  as named import
    -it is called state bcz it control the state of the application
    -scope will be inside that component
    -everytime state var update react rerender the component 

### useEffect()

outlet componant:-->
it wont be seen in html as it is replaced by componant
its help in navigation


### Routing in web pages
-client side routing(for first time it ll make netwrk call than just loads the componanats  and api not the whole page )
-Server side routing(when data comes from server with netwrk calls like with html files)



### optimising your app
-chunking
-code splitting
-dynamic bundling
-lazy loading
-on demand load
-dynamic import



### redux
    -install @reduxjs/toolkit and react-redux libraries
    -build the store
    -connect our store to app
    -create slices(like cart)
    -dispatch action
    -selector(subscribe)


### testing types(devloper)
    -unit testing
        -testing react component in isolation
    -integration 
    -end to end (E2E)

### setting up testing in our app
    -install react testing lib
    -install jest
    -install babel dependencies(with parcel u dont need as it has it bydefault)
    -config babel 
    -update/config  parcel according to jest with .parcelrc (default babel transpilation disabled)
    -jest configuration(npm jest --init)
    -install jsdom library (if jest >28 it is must)(npm install --save-dev jest-environment-jsdom)
    -(header.test.js/header.test.ts/header.spec.js/header.spec.ts)
    -(__ is called dunder/ dunder test)

    -install @babel/preset-react - to make jsx syntax work in test cases
    -add @babel/preset-react as preset inside babel config

    -install @testing-library/jest-dom  (for functions like toBeInTheDocument)

