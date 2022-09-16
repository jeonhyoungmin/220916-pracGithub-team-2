import createTag from '../module-1.js'
import DTG from './module-2.js';
import DTGV from './changecolor.js';
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

DTG(root)
DTGV(root)