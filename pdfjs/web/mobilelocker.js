// MLE-56
(function () {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
  function hideElement(id) {
    const elm = document.getElementById(id);
    if (elm) {
      elm.style.display = 'none';
    } else {
      console.warn(`The ${id} element was not found.`);
    }
  }

  function showElement(id) {
    const elm = document.getElementById(id);
    if (elm) {
      elm.style.display = null;
    } else {
      console.warn(`The ${id} element was not found.`);
    }
  }

  try {
    const fullURI = new URI(window.location.href);
    const fullParams = fullURI.search(true);
    const file = fullParams.file;
    const uri = new URI(file);
    const parameters = uri.search(true);
    const data = URI.parseQuery(atob(parameters.data));
    if (data && ['TRUE', 'true', '1', 1, 'YES', 'yes'].includes(data.can_be_printed_by_user)) {
      console.log('The PDF can be printed');
    } else {
      console.log('The PDF cannot be printed so the PRINT button will be hidden');
      hideElement('print');
      hideElement('secondaryPrint');
    }
  } catch (e) {
    console.error('MLE-56 exception: ', e.message);
  }
})()
