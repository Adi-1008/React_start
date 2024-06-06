function customRender(ele, cont)
{
    const domEle = document.createElement(ele.type)
    domEle.innerHTML = ele.children
    // domEle.setAttribute('href', ele.props.href)      this is classical approach
    // domEle.setAttribute('target', ele.props.target)

    for (const prop in ele.props) {
        domEle.setAttribute(prop, ele.props[prop])
    }
    cont.appendChild(domEle)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const container = document.querySelector('#root')

customRender(reactElement, container)