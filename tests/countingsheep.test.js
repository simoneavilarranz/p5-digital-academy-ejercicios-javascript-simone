import { describe, it, expect } from 'vitest'
import { countAnimals } from '/js/countingsheep'

describe('countAnimals', () => {

    it('sheep', () => {
    expect(countAnimals([true, true, true])).toBe('There are 3 sheep in total')
    })

    it('wolves', () => {
    expect(countAnimals([false, false, false])).toBe('UPS!!! A pack of hungry wolves')
    })

    it('escaped', () => {
    expect(countAnimals([true, true, true, false, false])).toBe('3 sheep escaped!!!')
    })

    it('ate', () => {
    expect(countAnimals([true, false, false, false])).toBe('UPS!!! Wolves ate all the sheep')
    })

    it('not-an-array', () => {
    expect(() => countAnimals('not an array')).toThrow('Invalid input: list must contain only boolean values')
    })

})