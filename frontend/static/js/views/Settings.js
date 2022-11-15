import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super(); // super constructor
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings/h1>
      <p>
          You are viewing the Settings
      </p>
      <p>
          <a href="/posts" data-link>View recent posts</a>.
      </p>
    `;
  }
}