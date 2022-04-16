'use strict';

import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountry } from './fetchCountries';
import makeCard from './handlebars/card.hbs';
import makeList from './handlebars/list.hbs';

const inputEl = document.querySelector('#search-box');
const listSimilarResults = document.querySelector('.country-list');
const DEBOUNCE_DELAY = 300;

const searchingFunction = event => {
  let searchWord = event.target.value;

  fetchCountry(searchWord)
    .then(data => {
      if (data.length > 8) {
        console.log('too much countries found');
        return;
      }
      listSimilarResults.insertAdjacentHTML('beforeend', makeCard(data));
    })
    .catch(error => console.log(error));
};

inputEl.addEventListener('input', debounce(searchingFunction, DEBOUNCE_DELAY));
