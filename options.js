function saveOptions(e) {
  browser.storage.sync.set({
    username: document.querySelector("#username").value
  });
  e.preventDefault();
}

function restoreOptions() {
/*
  Managed storage is read-only.
  https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/Storage
  var storageItem = browser.storage.managed.get('username');
  storageItem.then((res) => {
    alert(res.username);
    document.querySelector("#managed-username").innerText = res.username;
  });
*/

  var gettingItem = browser.storage.sync.get('username');
  gettingItem.then((res) => {
    document.querySelector("#username").value = res.username || '-';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
