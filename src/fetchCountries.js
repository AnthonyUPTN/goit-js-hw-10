'use strict';

export const fetchCountry = name => {
  const searchParams = 'capital,name,population,flags,languages';
  let url = `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
