import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-checkbox';

class TodoList extends LitElement {
  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 50vw;
        max-width: 70vw;
      }
    `;
  }

  static get properties() {
    return {
      noTodoData: {
        type: Boolean,
      },
      todo: {
        type: String,
      },
      todos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.todo = '';
    this.todos = [];
    this.noTodoData = true;
  }

  addTodo() {
    const todo = this.shadowRoot.querySelector('#current-todo');
    this.todos = [...this.todos, todo.value];
    // Esta función se ejecuta si el spread opereator no es suficiente
    // como para que el cambio se refleje de forma atomática
    // this.requestUpdate()
    todo.value = '';
  }

  deleteTodo(e) {
    this.todos = this.todos.filter((todo) => todo !== e.target.id);
  }

  render() {
    return html`
      <div class="container">
        <mwc-textfield
          label="Tarea"
          helper="Escribe aquí tu tarea"
          @change="${(e) => (this.todo = e.target.value)}"
          .value="${this.todo}"
          id="current-todo"
        ></mwc-textfield>
        <mwc-button
          raised
          @click="${this.addTodo}"
          label="Agregar"
          ?disabled="${this.todo === ''}"
        ></mwc-button>

        ${this.todos.length === 0
          ? html` <p>no hay todos</p> `
          : html`
              <mwc-list multi>
                ${this.todos.map(
                  (todo) => html`
                    <mwc-check-list-item graphic="icon">
                      <slot>${todo}</slot>
                      <mwc-icon
                        id=${todo}
                        @click=${this.deleteTodo}
                        slot="graphic"
                        >delete_forever</mwc-icon
                      >
                    </mwc-check-list-item>
                    <li divider role="separator"></li>
                  `
                )}
              </mwc-list>
            `}
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
