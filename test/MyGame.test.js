import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/views/MyGame.js';

describe('Home', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<my-game></my-game>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('should render the component', async () => {
    expect(element).to.exist;
  });

  it('should render the user name', async () => {
    const name = 'Cristina';
    element = await fixture(html`<my-game .userName=${name}></my-game>`);
    const p = element.shadowRoot.querySelector('#username');
    expect(p).to.exist;
    expect(p.textContent).to.equal('Hi Cristina');
  });
});
