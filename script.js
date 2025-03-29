function toggleMode() {
  const html = document.documentElement;

  // if(html.classlist.contains('light')) {
  //   html.classlist.add('light')
  // } else {
  //   html.classlist.remove('light')
  // }
  html.classList.toggle('light');
}

