const mobilelocker = {
  isPrintingAllowed (showAlert = false) {
    try {
      const fullURI = new URI(window.location.href)
      const fullParams = fullURI.search(true)
      const file = fullParams.file
      const uri = new URI(file)
      const parameters = uri.search(true)
      const data = URI.parseQuery(atob(parameters.data))
      const allowed = (data && ['TRUE', 'true', '1', 1, 'YES', 'yes'].includes(data.can_be_printed_by_user))
      if (allowed) {
        console.log('Printing is allowed')
      } else {
        console.log('Printing is disabled for this file')
        if (showAlert) {
          window.alert('Printing is disabled for this file.')
        }
      }
      return allowed
    } catch (e) {
      console.error('isPrintingAllowed returned an error')
      return false
    }
  },
  printIfAllowed (showAlert = false) {
    if (this.isPrintingAllowed(showAlert)) {
      window.print()
    }
  },
}

window.mobilelocker = mobilelocker;
