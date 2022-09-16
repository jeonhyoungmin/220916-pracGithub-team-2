function createTag(tagName, props, parent){
  let childElement = document.createElement(tagName)
  for(let cssValue in props){
    childElement.style[cssValue] = props[cssValue]
  }
  return parent.appendChild(childElement)
}

export default createTag