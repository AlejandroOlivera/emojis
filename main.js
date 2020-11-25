const myEmojis = ['🧮', '🧑', '👾', '⚛'];
let pushBtn = document.getElementById('push-btn');
let unshiftBtn = document.getElementById('unshift-btn');

function renderEmojis() {
  let emojiContainer = document.getElementById('emojiContainer');
  emojiContainer.innerHTML = '';
  for (let i = 0; i < myEmojis.length; i++) {
    let emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

const handleButtonClickB = () => {
  let emojiInput = document.getElementById('emoji-input');
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = '';
    renderEmojis();
  }
};

unshiftBtn.addEventListener('click', handleButtonClickB);

const handleButtonClick = () => {
  let emojiInput = document.getElementById('emoji-input');
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = '';
    renderEmojis();
  }
};

pushBtn.addEventListener('click', handleButtonClick);

const popBtn = document.getElementById('pop-btn');
popBtn.addEventListener('click', function () {
  myEmojis.pop();
  renderEmojis();
});

const shiftBtn = document.getElementById('shift-btn');
shiftBtn.addEventListener('click', function () {
  myEmojis.shift();
  renderEmojis();
});
