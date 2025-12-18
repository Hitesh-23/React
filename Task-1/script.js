let root = ReactDOM.createRoot(
    document.querySelector('main')
);


let a1 = React.createElement('img', {className: "img", src : "./logo.png"}, null);
let a2 = React.createElement('p', {className : "para"}, "About Me");
let a3 = React.createElement('p', {className : "para"}, "Portfolio");
let a4 = React.createElement('p', {className : "para"}, "Services");
let a5 = React.createElement('p', {className : "para"}, "Blog");
let anchor = React.createElement('a',{className: 'anchor'}, 'Book A Call ➚');

// All the nav element togther
let nav = React.createElement('div', {className : 'nav'}, [a1,a2,a3,a4,a5,anchor])


// hero left
let heroLeft = React.createElement('h1', {className: "heroLeft"}, "+200")
let heroLeftP = React.createElement('p', {className: "heroLeftP"}, "Project Completed")
let heroRight = React.createElement('h1', {className : "heroRight"}, "+50")
let heroRightP = React.createElement('p', {className : "heroRightP"}, "Startup raised")

let heroTopLeft = React.createElement('div', {className: 'heroTopLeft'}, [heroLeft, heroLeftP])
let heroTopRight = React.createElement('div', {className: "heroTopRight"}, [heroRight, heroRightP])
let heroTop = React.createElement('div', {className: "heroTop"}, [heroTopLeft, heroTopRight]);


let heroMiddleH1 = React.createElement('h1', {className: "heroMiddleH1"}, "Hello")
let heroMiddleP = React.createElement('p', {className : "heroMiddleP"}, "-- It's D.Nova a design wizerd")

let heroMiddle = React.createElement('div', {className : 'heroMiddle'}, [heroMiddleH1, heroMiddleP])
let heroBottom = React.createElement('div', {className : "heroBottom"}, "Scroll down ↓")
let heroContainerLeft = React.createElement('div', {className: "heroContainerLeft"}, [heroTop, heroMiddle, heroBottom])

let heroRightImg = React.createElement('img', {className: "heroRightImg", src: "./kaka.png"}, null);
let heroContainerRight = React.createElement('div', {className: "heroContainerRight"}, heroRightImg);

let heroContainer = React.createElement('div', {className : "heroContainer"}, [heroContainerLeft, heroContainerRight])


let parent = React.createElement('div', {className: "parent"}, [nav, heroContainer])

root.render(parent)