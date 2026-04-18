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
      background-color: #f8f9fa;
      border-top: 1px solid #e9ecef;
      color: #6c757d;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 3rem 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .verbiage {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      max-width: 600px;
    }
    .footer-links {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .footer-links a {
      color: #6c757d;
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.2s;
    }
    .footer-links a:hover {
      color: #000;
    }
    .copyright {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  </style>
  <footer class="wrapper">
    <p class="verbiage">
      I like to make modern work painless, and love to build tools that are open source, private, and on device &mdash; so we can focus on our impact, not the friction.
    </p>
    <div class="footer-links">
      <slot name="links"></slot>
      <a href="https://spuds0588.github.io/Burns-Development/">Tools</a>
      <a href="https://www.linkedin.com/in/coreytburns/">LinkedIn</a>
      <a href="https://youtube.com/@corey_burns">YouTube</a>
    </div>
    <div class="copyright">
      &copy; ${new Date().getFullYear()} Corey Burns. Built for impact.
    </div>
    <slot></slot>
  </footer>
`;
class BurnsDevFooter extends HTMLElement { constructor() { super(); this.attachShadow({ mode: 'open' }); this.shadowRoot.appendChild(templateFooter.content.cloneNode(true)); } }
customElements.define('burns-dev-footer', BurnsDevFooter);