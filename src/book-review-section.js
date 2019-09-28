import { PolymerElement, html } from "@polymer/polymer";
import './book-review';
import './search-box';


class BookReviewSection extends PolymerElement {
    static get template() {
        return html`           
        <search-box style="width: 100%"></search-box>
        <book-review name="BookReview" isbn="0061177571"></book-review>
        <book-review name="BookReview" isbn="1328869334"></book-review>
        <book-review name="BookReview" isbn="0358093155"></book-review>
        `
    }

}

window.customElements.define('book-review-section', BookReviewSection);