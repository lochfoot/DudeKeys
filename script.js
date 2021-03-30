`use strict`;

const btnYes = document.querySelector(`.btn-yes`);
const btnFound = document.querySelector(`.btn-found`);
const btnAgain = document.querySelector(`.btn-again`);

const idea = document.querySelector(`.checker`);
const congrats = document.querySelector(`.congrats`);

btnYes.addEventListener(`click`, function () {
  const newIdea = Math.trunc(Math.random() * 9);
  switch (newIdea) {
   case 0:
      idea.textContent = `Did you check the couch cushions?`;
      break;
    case 1:
      idea.textContent = `Did you check the freezer?`;
      break;
    case 2:
      idea.textContent = `Did you check under the bed?`;
      break;
    case 3:
      idea.textContent = `Did you check your pocket?`;
      break;
    case 4:
      idea.textContent = `Did you check the bathroom?`;
      break;
    case 5:
      idea.textContent = `Did you check yesterday's pocket?`;
      break;
    case 6:
      idea.textContent = `Did you check the car?`;
      break;
    case 7:
      idea.textContent = `Did you check under the couch?`;
      break;
    case 8:
      idea.textContent = `Did you check the front door?`;
      break;
    case 9:
      idea.textContent = `Did you check the dresser?`;
      break;
    case 10:
      idea.textContent = `Did you check the pantry?`;
      break;
  }
});

btnFound.addEventListener(`click`, function () {
  idea.classList.add(`hidden`);
  congrats.classList.remove(`hidden`);
});

btnAgain.addEventListener(`click`, function () {
  idea.classList.remove(`hidden`);
  congrats.classList.add(`hidden`);
});
