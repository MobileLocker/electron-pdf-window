// MLE-56
(function () {
  const uri = new URI(window.location.href)
  const parameters = uri.search(true)
  if (parameters && parameters.can_be_printed_by_user === '1') {

  } else {
    let print = document.getElementById('print')
    if (print) {
      print.style.display = 'none !important;'
    }

    let secondaryPrint = document.getElementById('secondaryPrint')
    if (secondaryPrint) {
      secondaryPrint.style.display = 'none !important;'
    }
  }
})()
