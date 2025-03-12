const { subtrai, ehPar, contarCaracteres } = require('../src/calculadora')

describe('Testes da Calculadora', () => {
  test('Subtrai dois números corretamente', () => {
    expect(subtrai(6, 3)).toBe(3)
    expect(subtrai(10, 5)).toBe(5)
  })

  test('Verifica se um número é par', () => {
    expect(ehPar(4)).toBe(true)
    expect(ehPar(9)).toBe(false)
  })

  test('Conta o número de caracteres em uma string', () => {
    expect(contarCaracteres('gibi')).toBe(4)
    expect(contarCaracteres('olá')).toBe(3)
  })
})