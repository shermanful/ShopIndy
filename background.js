chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
          chrome.notifications.create(
              '',
              {
                  type: 'basic',
                  title: 'Notify!',
                  message: data.message || 'Notify!',
                  iconUrl: './assets/icons/128.png',
              }
          );
  }
});



// Below is copied/edited from wzub/goodreads_overdrive

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// 	if (request.contentScriptQuery == "getTitle") {
// 		var bookShopUrl = "https://www.bookshop.org/a/269/" + request.isbn;

// 		fetch(bookShopUrl)
// 		.then(response => response.text())
// 		.then(data => sendResponse(data))
// 		.catch(error => sendResponse(error))
// 		return true;
// 	}
// });
