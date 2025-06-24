/* 
  File: burns-dev-card.js
  Purpose: The pure content component for your developer card. It has no layout opinions.
*/
const templateCard = document.createElement('template');
templateCard.innerHTML = `
  <style>
    /*
      The :host is now layout-agnostic. It has no padding or max-width,
      allowing it to be a flexible child in any container.
    */
    :host {
      display: block;
      height: 100%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }

    .card {
      display: flex;
      flex-direction: column; 
      background-color: #fdfdfd;
      border: 1px solid #d7dbe3;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      overflow: hidden;
      height: 100%; /* Ensures the card fills the host element for consistent sizing in a flex row */
    }
    
    .card-image-wrapper {
      padding: 1.5rem 1.5rem 0 1.5rem;
      text-align: center;
    }
    
    .headshot {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      object-fit: cover;
    }

    .card-main-content {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1; /* Allows the content to fill space, pushing buttons to the bottom */
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #000000;
      margin: 0;
    }

    .subtitle {
      font-size: 0.9rem;
      color: #a1a6af;
      margin: 0.25rem 0 1rem 0;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1.5;
      color: #363636;
      flex-grow: 1; /* This makes the description take up available vertical space */
      margin-bottom: 1rem;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center; 
      gap: 0.5rem;
    }

    .buttons a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.6rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      color: #ffffff;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      width: 100%;
    }
    
    .buttons a:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .icon {
      margin-right: 0.5rem;
      width: 16px;
      height: 16px;
    }

    .btn-tools { background-color: #5a2a88; }
    .btn-linkedin { background-color: #0A66C2; }
    .btn-youtube { background-color: #FF0000; }
    .btn-support { 
      background-color: #FFDD00;
      color: #000000;
    }

    /* --- Responsive Internal Layout --- */
    /* When the component itself gets wider, switch its internal layout from vertical to horizontal */
    @media (min-width: 420px) {
      .card {
          flex-direction: row;
          align-items: center;
      }
      .card-image-wrapper {
        padding: 1.5rem;
      }
      .card-main-content {
        text-align: left;
        padding: 1.5rem 1.5rem 1.5rem 0;
      }
      .buttons {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .buttons a {
        width: auto; /* Let buttons size to their content */
      }
    }
  </style>

  <div class="card">
    <div class="card-image-wrapper">
      <img src="https://spuds0588.github.io/Burns-Development/Assets/Linkedin%20Headshot.png" alt="Headshot of Corey Burns" class="headshot">
    </div>
    <div class="card-main-content">
      <h1 class="title">Corey Burns</h1>
      <h2 class="subtitle">Product Manager & Innovator</h2>
      <p class="description">I'm passionate about creating solutions that solve real-world problems. Try some of my tools below, or connect with me on LinkedIn or YouTube to learn more about my work and insights.</p>
      <div class="buttons">
        <a href="https://spuds0588.github.io/Burns-Development/" class="btn-tools" title="Tools">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M487.4 315.7l-42.6-42.6c-18.2-18.2-44.4-28.1-71.4-28.1H320V160h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v85.1L64.2 384.2c-29.3 29.3-29.3 76.8 0 106.1l42.6 42.6c29.3 29.3 76.8 29.3 106.1 0L487.4 421.7c29.3-29.3 29.3-76.8 0-106.1zM132.9 468.9c-13.7 13.7-35.8 13.7-49.5 0l-42.6-42.6c-13.7-13.7-13.7-35.8 0-49.5l140-140L286.9 343 132.9 468.9z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/coreytburns/" class="btn-linkedin" title="LinkedIn">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></g></svg>
        </a>
        <a href="https://youtube.com/@corey_burns" class="btn-youtube" title="YouTube">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM233.415 352.707V159.293L389.011 256 233.415 352.707z"/></svg>
        </a>
        <a href="https://buymeacoffee.com/burnsdevelopment" class="btn-support" title="Support">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        </a>
      </div>
    </div>
  </div>
`;
class BurnsDevCard extends HTMLElement { constructor() { super(); this.attachShadow({ mode: 'open' }); this.shadowRoot.appendChild(templateCard.content.cloneNode(true)); } }
customElements.define('burns-dev-card', BurnsDevCard);