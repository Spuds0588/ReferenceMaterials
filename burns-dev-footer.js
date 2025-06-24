/* 
  File: burns-dev-footer.js
  Purpose: A layout component that creates a centered, spaced container.
*/
const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
  <style>
    :host {
      display: block;
      box-sizing: border-box;
    }
    .wrapper {
      /* This wrapper provides the guaranteed spacing and centering */
      display: grid;
      place-content: center;
      padding: 4rem 2rem; /* Generous vertical and horizontal padding */
      max-width: 700px; /* Controls the max-width of the content inside */
      margin: 0 auto;   /* Centers the wrapper horizontally on the page */
    }
  </style>
  <div class="wrapper">
    <!-- The <slot> is a placeholder. Any HTML you put inside -->
    <!-- the <burns-dev-footer> tag on your page will appear here. -->
    <slot></slot>
  </div>
`;
class BurnsDevFooter extends HTMLElement { constructor() { super(); this.attachShadow({ mode: 'open' }); this.shadowRoot.appendChild(templateFooter.content.cloneNode(true)); } }
customElements.define('burns-dev-footer', BurnsDevFooter);