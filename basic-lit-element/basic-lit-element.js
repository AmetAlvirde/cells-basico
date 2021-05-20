import { LitElement, html } from 'lit-element';

class BasicLitElement extends LitElement {
  render() {
    return html`<p>hola</p>`;
  }
}

customElements.define('basic-lit-element', BasicLitElement);
