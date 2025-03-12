const { filtrarPares } = require('../src/array')

describe('Testes de Array', () => {
  test('Filtra números pares de um array', () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])
    expect(filtrarPares([1, 3, 5])).toEqual([])
  })
})