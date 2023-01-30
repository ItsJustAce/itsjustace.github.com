
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                sace aka retraace aka return 2 swagging and dabbing aka just kill the cringe for everyones sake / <a href="archive.html">site ver. 2.0</a> / <a href="index.html">return home</a>
            </footer>
        `
    }
}

customElements.define(`my-footer`, MyFooter)