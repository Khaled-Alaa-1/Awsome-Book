import { DateTime } from './modules/luxon.js';
import BookList from './modules/booklist.js';
import {
  navList, navAdd, navContact,
} from './modules/variables.js';
import { goToListSection, goToAddSection, goToContactSection } from './modules/nav.js';

navList.addEventListener('click', () => {
  goToListSection();
});

navAdd.addEventListener('click', () => {
  goToAddSection();
});

navContact.addEventListener('click', () => {
  goToContactSection();
});

function getTime() {
  const currentTime = document.getElementById('currentTime');
  currentTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
setInterval(getTime, 1000);
const bookList = new BookList();
bookList();