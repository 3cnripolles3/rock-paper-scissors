import { html, LitElement } from 'lit';

export class MyHome extends LitElement {

  
  render() {
    return html` <div>My home</div> `;
  }
}

customElements.define('my-home', MyHome);
