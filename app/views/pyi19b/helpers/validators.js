exports.isArray = value => Array.isArray(value)

exports.isUuid4 = value => value.match(/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/)

exports.notEmptyArray = arr => arr.every(i => typeof i === 'string' && i.length > 0)

exports.isValidClaimantUrl = value => {
  let claimantId = value.split('/').pop()

  return claimantId.length === 36 || claimantId.length === 32
}

exports.isPartialAccountNumber = value => {
  let partialAccountNumber = value.replace(/ /g, '')

  return partialAccountNumber.length === 4 && isNumber(partialAccountNumber)
}

exports.isDigitsSpacesOrDashes = value => {
  value = value.replace(/ |-/g, '')
  return isNumber(value)
}

exports.isDigitsOrSpaces = value => {
  value = value.replace(/ /g, '')
  return isNumber(value)
}

exports.isNotTooFewDigits = (value, requiredNumberOfDigits) => {
  value = value.replace(/[^0-9.]/g, '')
  return value.length >= requiredNumberOfDigits
}

exports.isNotTooManyDigits = (value, requiredNumberOfDigits) => {
  value = value.replace(/[^0-9.]/g, '')
  return value.length <= requiredNumberOfDigits
}

exports.isSortCode = value => {
  let sortCode = value.replace(/ |-/g, '')
  return sortCode.length === 6 && isNumber(sortCode)
}

const isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
