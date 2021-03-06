/* eslint-disable no-undef */
// Пример 2 - инфинити скрол с троттлингом
let handlerCallCount = 0;
let startIndex = 0;
const COUNTRY_COUNT = 10;

const listRef = document.querySelector('.country-list');

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;

  return countryRef;
}

function renderPartOfCounries() {
  const partyOfCountries = countries.slice(
    startIndex,
    startIndex + COUNTRY_COUNT
  );
  const countryRefs = partyOfCountries.map(createCountryRef);

  listRef.append(...countryRefs);
}

function scrollHandler() {
  console.log(++handlerCallCount);
  if (!isScrollToBottom()) return;

  renderPartOfCounries();

  startIndex += COUNTRY_COUNT;
}

renderPartOfCounries();

window.addEventListener('scroll', _.throttle(scrollHandler, 200));
