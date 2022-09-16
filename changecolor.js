function DTG(name) {
  name.addEventListener("click", function () {
    name.style.color = "pink";
  });
}

/*function changeColor() {
  const element = document.getElementById("root");
  
  element.addEventListener("click"){
    
    element.style.color = "blue"
  }
}*/

/*function addElement (tagname,props){
  if (typeof (props)==="object"&& typeof(tagname)==="string"){
    let element = document.createElement(tagname);
    for(const cssValue in props )
    if(cssValue === "id"){      
      element.id = props[cssValue];
    }else{
      element.style[cssValue] = props[cssValue];
    }
  }
}

addElement("div",{
  
})*/

export default DTG;
