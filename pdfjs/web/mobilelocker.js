// MLE-56
(function () {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
  function hideElement (id) {
    try {
      const elm = document.getElementById(id)
      if (elm) {
        elm.style.display = 'none'
      } else {
        console.warn(`The ${id} element was not found.`)
      }
    } catch (e) {
      console.error(e.message, e)
    }
  }

  function showElement (id) {
    try {
      const elm = document.getElementById(id)
      if (elm) {
        elm.style.display = null
      } else {
        console.warn(`The ${id} element was not found.`)
      }
    } catch (e) {
      console.error(e.message, e)
    }
  }

  // MLE-57
  function blockPrinting () {
    try { // https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('no-printing')
    } catch (e) { }
    try { // https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/
      const printContainer = document.getElementById('printContainer')
      printContainer.classList.add('no-printing')
    } catch (e) { }
  }

  try {
    const fullURI = new URI(window.location.href)
    const fullParams = fullURI.search(true)
    const file = fullParams.file
    const uri = new URI(file)
    const parameters = uri.search(true)
    const data = URI.parseQuery(atob(parameters.data))
    if (data && ['TRUE', 'true', '1', 1, 'YES', 'yes'].includes(data.can_be_printed_by_user)) {
      console.log('The PDF can be printed')
    } else {
      console.log('The PDF cannot be printed so the PRINT button will be hidden')
      hideElement('print')
      hideElement('secondaryPrint')
      blockPrinting()
    }
  } catch (e) {
    console.error('MLE-56 exception: ', e.message)
  }
})()
