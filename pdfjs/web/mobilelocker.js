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

  if (mobilelocker.isPrintingAllowed()) {
    console.log('The PDF can be printed')
  } else {
    console.log('The PDF cannot be printed so the PRINT button will be hidden')
    hideElement('print')
    hideElement('secondaryPrint')
    blockPrinting();
  }
})()
