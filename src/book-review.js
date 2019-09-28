/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
//import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

class BookReview extends PolymerElement {

  static get properties() {
    return {
      isbn: String,
      Title: { type: String },
      Author: { type: String },
      Rating: { type: String },
      Image: { type: String },
      Description: { type: String },
      PublicationYear: { type: Number },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    debugger;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://localhost:44381/api/books/" + this.isbn, false ); // false for synchronous request
    xmlHttp.send( null );
    var book = JSON.parse(xmlHttp.responseText);
    this.Author = book.Author;
    this.Image = book.image_url;
    this.Title = book.Name;
    this.Description = book.Description;
    this.Rating = book.Rating;
  
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <paper-card heading="{{Title}}" image="{{Image}}" alt="Post Office">
          <div class="card-content">
          {{Author}}
          </div>
          <div class="card-actions">
            {{Description}}
            <p>Rating: [[Rating]]</p>
          </div>
      </paper-card>
    `;
  }
}

window.customElements.define('book-review', BookReview);
