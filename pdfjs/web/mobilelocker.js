// MLE-56
(function () {
  try {
    const uri = new URI(window.location.href)
    const parameters = uri.search(true)
    if (parameters && parameters.can_be_printed_by_user === '1') {
      console.log('The PDF can be printed');
    } else {
      console.log('The PDF cannot be printed');
      // @see https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
      let print = document.getElementById('print')
      if (print) {
        print.style.display = 'none'
      } else {
        console.warn('The print button was not found');
      }

      let secondaryPrint = document.getElementById('secondaryPrint')
      if (secondaryPrint) {
        secondaryPrint.style.display = 'none'
      } else {
        console.warn('The secondaryPrint button was not found');
      }
    }
  } catch (e) {
    console.error('MLE-56 exception: ', e.message);
  }
})()
