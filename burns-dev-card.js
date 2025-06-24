const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* Component styles are fully encapsulated in the Shadow DOM */
    :host {
      display: block;
      max-width: 350px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .card {
      background-color: #fdfdfd; /* off-white */
      border: 1px solid #d7dbe3; /* light-blue-gray */
      border-radius: 15px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      overflow: hidden;
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
      color: #000000; /* black */
      margin: 0;
      text-align: center;
    }

    .subtitle {
      font-size: 1rem;
      color: #a1a6af; /* gray */
      margin: 0.25rem 0 1.5rem 0;
      text-align: center;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.5;
      color: #363636;
      margin-bottom: 1.5rem;
    }

    /* Base button styles */
    .buttons a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.85rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff; /* Default text color is white */
      transition: opacity 0.2s ease;
      box-sizing: border-box;
    }

    .buttons a:hover {
      opacity: 0.9;
    }

    .buttons a + a {
      margin-top: 0.75rem;
    }
    
    .icon {
      margin-right: 0.75rem;
      width: 20px;
      height: 20px;
    }

    /* Specific button brand color styling */
    .btn-tools {
      background-color: #000000; /* Your brand black */
    }

    .btn-linkedin {
      background-color: #0A66C2; /* LinkedIn Blue */
    }

    .btn-youtube {
      background-color: #FF0000; /* YouTube Red */
    }

    .btn-support {
      background-color: #FFDD00; /* Buy Me a Coffee Yellow */
      color: #000000; /* Black text for contrast */
    }

  </style>

  <div class="card">
    <div class="card-image">
      <img src="https://spuds0588.github.io/Burns-Development/Assets/Linkedin%20Headshot.png" alt="Headshot of Corey Burns" class="headshot">
    </div>
    <div class="card-content">
      <h1 class="title">Corey Burns</h1>
      <h2 class="subtitle">Product Manager & Innovator</h2>
      <p class="description">
        As a Product Manager and Innovator, I'm passionate about creating solutions that solve real-world problems. Burns Development is my personal collection of tools, templates, and content designed to streamline common tasks and boost productivity.
      </p>
      <div class="buttons">
        <a href="https://spuds0588.github.io/Burns-Development/" class="btn-tools">
          <!-- Wrench (Tools) Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M487.4 315.7l-42.6-42.6c-18.2-18.2-44.4-28.1-71.4-28.1H320V160h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v85.1L64.2 384.2c-29.3 29.3-29.3 76.8 0 106.1l42.6 42.6c29.3 29.3 76.8 29.3 106.1 0L487.4 421.7c29.3-29.3 29.3-76.8 0-106.1zM132.9 468.9c-13.7 13.7-35.8 13.7-49.5 0l-42.6-42.6c-13.7-13.7-13.7-35.8 0-49.5l140-140L286.9 343 132.9 468.9z"/></svg>
          <span>Tools</span>
        </a>
        <a href="https://www.linkedin.com/in/coreytburns/" class="btn-linkedin">
            <!-- LinkedIn Icon -->
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></g></svg>
            <span>LinkedIn</span>
        </a>
        <a href="https://youtube.com/@corey_burns" class="btn-youtube">
          <!-- YouTube SVG Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM233.415 352.707V159.293L389.011 256 233.415 352.707z"/></svg>
          <span>YouTube</span>
        </a>
        <a href="https://buymeacoffee.com/burnsdevelopment" class="btn-support">
          <!-- Heart (Support) Icon -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          <span>Support</span>
        </a>
      </div>
    </div>
  </div>
`;

class BurnsDevCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('burns-dev-card', BurnsDevCard);