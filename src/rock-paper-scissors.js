import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './views/MyHome.js';
import './views/MyGame.js';

class RockPaperScissors extends LitElement {
  static get styles() {
    return css`
      :host {
        color: white;
      }
    `;
  }
  
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      {
        path: '/home',
        component: 'my-home',
      },
      { path: '/game', component: 'my-game' },
      {
        path: '(.*)',
        redirect: '/home',
      },
    ]);
  }

  render() {
    return html` <main id="outlet"></main> `;
  }
}

customElements.define('rock-paper-scissors', RockPaperScissors);
