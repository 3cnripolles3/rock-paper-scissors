import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/rock-paper-scissors.js';

describe('RockPaperScissors', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<rock-paper-scissors></rock-paper-scissors>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
  
  it('should render router outlet', () => {
    const outlet = element.shadowRoot.querySelector('#outlet');
    expect(outlet).to.exist;
  });
});
