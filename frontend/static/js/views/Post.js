import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super(); // super constructor
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <h1>Posts/h1>
      <p>
          You are viewing pOSTS
      </p>
      <p>
          <a href="/posts" data-link>View recent posts</a>.
      </p>
    `;
  }
}