import React from 'react'

export const pluralize = (str, num) => {
  if (num !== 1) return `${str}s`
  return str
}
