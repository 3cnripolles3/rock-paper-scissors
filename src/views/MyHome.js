import { html, LitElement } from 'lit';
import { Router } from '@vaadin/router';
import { MyHomeStyles } from '../css/MyHome-styles.js';

export class MyHome extends LitElement {
  static styles = [MyHomeStyles];

  static get properties() {
    return {
      titleText: { type: String },
      userName: { type: String },
    };
  }

  constructor() {
    super();
    this.titleText = 'Create new player';
    this.userName = '';
  }

  render() {
    return html`
      <section>
        <img src="../../../assets/icons/mouse.svg" alt="mouse" />
        <p>${this.titleText}</p>
        <div class="inputContainer">
          <input
            name="name"
            id="name"
            placeholder="Name"
            type="text"
            required
          />
          <label>Name*</label>
        </div>
        <input
          type="button"
          @click=${this.handleClick}
          class="btn"
          value="JOIN"
        />
      </section>
    `;
  }

  handleClick() {
    this.userName = this.shadowRoot.querySelector('#name').value;
    localStorage.setItem('user', this.userName);
    if (this.userName !== '') Router.go('/game');
  }
}

customElements.define('my-home', MyHome);
