import { describe, it, expect } from 'vitest'
import { countAnimals } from '/js/countingsheep'

describe('countAnimals', () => {

  it('sheep', () => {
    expect(countAnimals([true, true, true])).toBe('There are 3 sheep in total')
  })

})