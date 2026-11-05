class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}"
    type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenHTML = this.children
            .map((child) => child.render())
            .join("\n");
        return `<form id="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width:300px; border-radius:10px; gap:5px;">\n ${childrenHTML} \n</form>`;
    }
}
const formElement = new Form("login-form");
const emailInput = new Input("email", "email", "Enter you email");
const passwordInput = new Input("password", "password", "Enter you password");
const submitButton = new Button("submit-btn", "Submit");
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
// console.log(emailInput);
// console.log(passwordInput);
// console.log(submitButton);
// console.log(formElement);
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
