import { html, css, LitElement } from 'lit';
import 'https://unpkg.com/@material/mwc-button@latest/mwc-button.js?module';
import '@material/mwc-button';

class LitElementBindings extends LitElement {
  static get styles() {
    return css`
      p {
        color: green;
      }
    `;
  }
  static get properties() {
    return {
      basicBind: { type: String },
      id: { type: String },
      phone: { type: String },
      isAdmin: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.basicBind = 'Hello, world';
    this.id = 'container';
    this.phone = 'iPhone';
    this.isAdmin = false;
    console.log('componente en construccion');
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   console.log('componente conectado');
  // }

  updated() {
    console.log('updated', this.shadowRoot.querySelector('#phone').value);
  }

  // disconnectedCallback() {
  //   super.disconnectedCallback();
  //   console.log('componente desconectado');
  // }

  // // Nos lo da por default lit element y no lo tenemos que escribir nunca.
  // attributeChangedCallback() {}

  // //  Ésta aún no es estándar;
  // adoptedCallback() {}

  clickHandler(e) {
    console.log('click handler', this.shadowRoot.querySelector('#phone').value);
  }

  render() {
    return html`
      <!-- binding por propiedad -->
      <div id="${this.id}">
        <!-- binding básico -->
        <p>${this.basicBind}</p>
        <!-- binding booleano-->
        <input type="checkbox" ?checked="${this.isAdmin}" />
        <!-- binding por valor-->
        <input
          @change="${(e) => (this.phone = e.target.value)}"
          type="text"
          id="phone"
          .value="${this.phone}"
        />
        <!-- binding por evento-->
        <mwc-button
          @click="${this.clickHandler}"
          raised
          label="Click me!"
        ></mwc-button>
      </div>
    `;
  }
}

customElements.define('lit-element-bindings', LitElementBindings);
