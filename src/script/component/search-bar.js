class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">

        <div class="row mt-3 justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center text-light size">Welcome to IC Movies</h1>
                <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" id="searchElement">
                <button class="btn btn-outline-success" type="submit" id="searchElementButton">Search</button>
           </div>
           <div class="error"></div>
           </div>
        </div>
    </div>
    
        `;
    }
}

customElements.define("search-bar", SearchBar);