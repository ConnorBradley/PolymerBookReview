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
      Title: { type: String },
      Author: { type: String },
      ISBN: { type: String },
      Rating: { type: String },
      Image: { type: String },
      Description: { type: String },
      PublicationYear: { type: Number },
    };
  }


  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
 
    <iron-ajax
          auto
          url="https://localhost:44381/api/books/0061177571"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300">
      </iron-ajax>
      
    <paper-card heading="{{Title}}" alt="Post Office">
        <img class="bookCover" src="{{Image}}">
          <div class="card-content">
            {{Description}}
          </div>
          <div class="card-actions">
          </div>
    </paper-card>
    `;
  }

  handleResponse(event, request) {
    var response = JSON.parse(request.response);
    console.log(response);
    debugger;
    this.Author = response.Author;
    this.ISBN = response.ISBN;
    this.Image = response.image_url;
    this.Title = response.Name;
    this.Description = response.Description;
    
  }
}

window.customElements.define('book-review', BookReview);
