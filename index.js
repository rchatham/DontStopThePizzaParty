function navigateForInput(value) {
  if ((value === "home")||(value === "Home")) {
    window.location = "./index.html";
  }
  if (value === "Pizza Squad") {
    window.location = "./guest-list.html";
  }
  if (value.lowerCase() === "find pizza") {
    var win = window.open("https://www.google.com/maps/search/pizza/", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
  if (value.lowerCase() === "buy pizza") {
    var win = window.open("https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=pizza", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
  if (value.lowerCase() === "play pizza") {
    var win = window.open("http://www.adultswim.com/games/web/pizza-city", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
  if (value.lowerCase() === "pizza clothing") {
    var win = window.open("https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=pizza+clothes", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
  if (value.lowerCase() === "wear pizza") {
    var win = window.open("https://www.buzzfeed.com/erinchack/ways-to-wear-pizza-with-pride?utm_term=.doQNKYg2o#.ynkZEbKXO", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
  if (value.lowerCase() === "pizza shock") {
    var win = window.open("http://weartv.com/news/local/man-caught-doing-drugs-behind-navarre-pizza-place", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website');
    }
  }
}