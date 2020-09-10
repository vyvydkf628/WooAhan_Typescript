/* @jax createElement */

function renderElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);

  node.children.map(renderElement).forEach(element => {
    el.appendChild(element);    
  });
  return el;
}

function render(node, container) {
  container.appendChild(renderElement(node))
}

const vdom = {
  type: 'ui',
  props: { },
  children: [
    { type: "li", props: { className: "item" }, children: "React"},
    { type: "li", props: { className: "item" }, children: "Redux"},
    { type: "li", props: { className: "item" }, children: "TypeScript"},
    { type: "li", props: { className: "item" }, children: "mobx"},
  ]
}

function createElement(type, props = {}, ...children) {
  if (typeof type === 'function'){
    return type.apply(null, [props, ...children])
  }
  return { type, props, children};
}

console.log()