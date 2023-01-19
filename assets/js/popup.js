const text = document.getElementById('shopindy-text');
const notify = document.getElementById('shopindy-button');

notify.addEventListener('click', () => {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    message: text.value,
  });
});
