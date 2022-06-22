const btn = document.getElementById(`btn`);
const body = document.querySelector(`body`);
const h1 = document.getElementById(`h1`);

btn.addEventListener(`click`, updatePage);

function updatePage() {
    if (btn.className === `off-btn`) {
        body.className = `clear`;
        h1.className = `on`;
        h1.textContent = `The machine is running!`;
        btn.className = `on-btn`;
        btn.textContent = `Turn OFF`;
    } else {
        body.className = `dark`;
        h1.className = `off`;
        h1.textContent = `Click to start running the machine`;
        btn.className = `off-btn`;
        btn.textContent = `Turn ON`;
    }
}

