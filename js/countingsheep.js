export function countAnimals(list) {

  if (!Array.isArray(list) || !list.every(item => typeof item === 'boolean')) {
    throw new Error('Invalid input: list must contain only boolean values')
  }

  const sheep  = list.filter(Boolean).length
  const wolves = list.filter(v => !v).length

  if (wolves === 0)        return `There are ${sheep} sheep in total`
  if (sheep === 0)         return 'UPS!!! A pack of hungry wolves'
  if (sheep > wolves)      return `${sheep} sheep escaped!!!`
  return 'UPS!!! Wolves ate all the sheep'

}