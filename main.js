import createTag from '../module-1.js'
// * main.js

// * 루트 js 파일

const root = document.getElementById('root');
console.log(root)
root.style.width = "100vw"
root.style.height = "100vh"
root.style.display = "flex"
root.style.justifyContent = "center"
root.style.alignItems = "center"
root.style.backgroundColor = "cadetblue"

createTag("div", {
  width: "30vw",
  height: "30vh",
  backgroundColor: "pink"
}, root)