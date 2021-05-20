import { LitElement, html } from 'lit-element';

class AdvancedLitElement extends LitElement {
  static get properties() {
    return {
      basicBind: { type: String },
      groceriesList: { type: Array },
      isAdmin: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.basicBind = 'Hello, world';
    this.groceriesList = ['manzana', 'banana', 'avena'];
    this.isAdmin = true;
  }

  render() {
    return html`
      <p>${this.basicBind}</p>
      <ul>
        ${this.groceriesList.map((food) => html`<li>${food}</li>`)}
      </ul>
      ${this.isAdmin
        ? html`<p>Bienvenida, administradora</p>`
        : html`<p>Bienvenido, usuario</p>`}
    `;
  }
}

customElements.define('advanced-lit-element', AdvancedLitElement);
