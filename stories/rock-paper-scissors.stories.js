import { html } from 'lit';
import '../src/rock-paper-scissors.js';

export default {
  title: 'RockPaperScissors',
  component: 'rock-paper-scissors',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <rock-paper-scissors
      style="--rock-paper-scissors-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </rock-paper-scissors>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
