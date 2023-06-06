import { html, LitElement } from 'lit';
import { MyGameStyles } from '../css/MyGame-styles.js';

export class MyGame extends LitElement {
  static styles = [MyGameStyles];

  static get properties() {
    return {
      welcome: { type: String },
      userName: { type: String },
      scoreText: { type: String },
      yourscore: { type: Number },
      gameOptions: { type: Array },
    };
  }

  constructor() {
    super();
    this.welcome = 'Hi';
    this.userName = 'Player';
    this.scoreText = 'Score';
    this.yourscore = 0;
    this.gameOptions = ['rock', 'paper', 'scissors'];
  }

  render() {
    return html`
      <section>
        <header>
          <p>${this.welcome} ${this.userName}</p>
          <a href="/home">
            <img
              class="go-out"
              src="../../../assets/icons/arrow-right-from-bracket.svg"
              alt="go out"
            />
          </a>
        </header>
        <section class="game">
          <p>${this.scoreText}: ${this.yourscore}</p>
          <div class="buttons">
            <button
              class="left-button"
              @click="${() => this.handleClick('rock')}"
            >
              <img
                class="hand"
                src="../../../assets/icons/hand-rock.svg"
                alt="hand-rock"
              />
            </button>
            <button @click="${() => this.handleClick('paper')}">
              <img
                class="hand"
                src="../../../assets/icons/hand-paper.svg"
                alt="hand-paper"
              />
            </button>
            <button
              class="right-button"
              @click="${() => this.handleClick('scissors')}"
            >
              <img
                class="hand"
                src="../../../assets/icons/hand-scissors.svg"
                alt="hand-scissors"
              />
            </button>
          </div>
          <p id="options"></p>
          <p id="result"></p>
        </section>
      </section>
    `;
  }

  handleClick(playerOption) {
    this.shadowRoot.querySelector(
      '#options'
    ).innerHTML = `You: ${playerOption} - Bot: ...`;

    this.shadowRoot
      .querySelectorAll('button')
      .forEach(btn => btn.classList.add('clicked'));

    setTimeout(() => {
      const botOption = this.getBotOption();

      this.shadowRoot.querySelector(
        '#options'
      ).innerHTML = `You: ${playerOption} - Bot: ${botOption}`;

      const result = this.getResult(playerOption, botOption);

      this.shadowRoot.querySelector('#result').innerHTML = result;

      this.shadowRoot
        .querySelectorAll('button')
        .forEach(btn => btn.classList.remove('clicked'));
    }, 1000);
  }

  getBotOption() {
    const randomIndex = Math.floor(Math.random() * this.gameOptions.length);
    return this.gameOptions[randomIndex];
  }

  getResult(playerOption, botOption) {
    if (playerOption === botOption) return "It's a tie!";

    const whoWins = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
    };

    if (whoWins[playerOption] !== botOption) return 'You lose!';

    this.yourscore += 1;
    return 'You win!';
  }
}

customElements.define('my-game', MyGame);
