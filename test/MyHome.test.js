import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/views/MyHome.js';

describe('Home', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<my-home></my-home>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('should render the component', async () => {
    expect(element).to.exist;
  });

  it('should render the user name', async () => {
    const titleTest = 'Login';
    element = await fixture(html`<my-home .titleText=${titleTest}></my-home>`);
    const p = element.shadowRoot.querySelector('p');
    expect(p).to.exist;
    expect(p.textContent).to.equal('Login');
  });
});
