class NavBar extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand nav-link" href="#">IC Movies</a>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#nowPlaying">Now Playing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#upcoming">Upcoming</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#popular">Popular</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#topRated">Top Rated</a>
              </li>
              </ul>
              
            </div>
          </nav>
        `;
  }
}


customElements.define("nav-bar", NavBar);