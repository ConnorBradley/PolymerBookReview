import { PolymerElement, html } from "@polymer/polymer";
import '@material/mwc-button';
import '../node_modules/@material/mwc-textfield';


class SearchBox extends PolymerElement {
    static get template() {
        return html`
            <mwc-textfield placeholder="Filter"></<mwc-textfield>
        `
    }
}


window.customElements.define('search-box', SearchBox);