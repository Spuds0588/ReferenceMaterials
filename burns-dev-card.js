// Create an HTML template for the component.
// This is more performant as the browser only parses it once.
const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* 
      Define component styles here. These are scoped to the Shadow DOM 
      and will NOT conflict with any external stylesheets like Bulma.
    */
    :host {
      /* This targets the <burns-dev-card> element itself */
      display: block; /* Allows sizing and layout */
      max-width: 350px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .card {
      background-color: #fdfdfd;
      border: 1px solid #d7dbe3;
      border-radius: 15px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      overflow: hidden; /* Ensures content respects the border radius */
    }

    .card-image {
      text-align: center;
      padding-top: 2rem;
    }

    .headshot {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      object-fit: cover;
    }

    .card-content {
      padding: 1.5rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #000000;
      margin: 0;
      text-align: center;
    }

    .subtitle {
      font-size: 1rem;
      color: #a1a6af;
      margin: 0.25rem 0 1.5rem 0;
      text-align: center;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.5;
      color: #363636;
      margin-bottom: 1.5rem;
    }

    .buttons a {
      display: flex; /* Use flexbox for alignment */
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.85rem 1rem;
      background-color: #000000;
      color: #ffffff;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
      box-sizing: border-box; /* Ensures padding is included in width */
    }

    .buttons a:hover {
      background-color: #333333;
    }

    /* Add space between buttons */
    .buttons a + a {
      margin-top: 0.75rem;
    }

    .icon {
      margin-right: 0.75rem;
      width: 20px;
      height: 20px;
    }
  </style>

  <div class="card">
    <div class="card-image">
      <img src="hhttps://spuds0588.github.io/Burns-Development/Assets/Linkedin%20Headshot.png" alt="Headshot of Corey Burns" class="headshot">
    </div>
    <div class="card-content">
      <h1 class="title">Corey Burns</h1>
      <h2 class="subtitle">Product Manager & Innovator</h2>
      <p class="description">
        I'm passionate about creating solutions that solve real-world problems. See my other tools and content at the links below.
      </p>
      <div class="buttons">
        <a href="https://spuds0588.github.io/Burns-Development/">
          <!-- Briefcase SVG Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zM48 96V464c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96H48zM176 0H336C371.3 0 400 28.7 400 64v8H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V120c0-26.5 21.5-48 48-48h64V64C112 28.7 140.7 0 176 0z"/></svg>
          <span>Burns Development</span>
        </a>
        <a href="https://youtube.com/@corey_burns">
          <!-- YouTube SVG Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM233.415 352.707V159.293L389.011 256 233.415 352.707z"/></svg>
          <span>YouTube Channel</span>
        </a>
        <a href="https://buymeacoffee.com/burnsdevelopment">
          <!-- Coffee SVG Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"/></svg>
          <span>Buy Me a Coffee</span>
        </a>
      </div>
    </div>
  </div>
`;

class BurnsDevCard extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow root to the element.
    // 'open' mode allows the main page to inspect the shadow DOM (optional).
    this.attachShadow({ mode: 'open' });
    // Append a clone of the template to the shadow root.
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Define the new custom element.
customElements.define('burns-dev-card', BurnsDevCard);
