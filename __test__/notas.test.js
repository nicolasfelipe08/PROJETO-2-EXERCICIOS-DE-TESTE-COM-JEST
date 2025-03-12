const { calcularMedia, verificaAprovacao, adicionarNota } = require('./notas')

describe('Testes do Sistema de Notas Escolares', () => {
  let notas

  beforeEach(() => {
    notas = [7, 8, 9]
  });

  test('Calcula a média corretamente', () => {
    expect(calcularMedia(notas)).toBe(8)
  });

  test('Verifica aprovação', () => {
    expect(verificaAprovacao(calcularMedia(notas))).toBe('Aprovado')
  });

  test('Verifica reprovação', () => {
    expect(verificaAprovacao(calcularMedia([5, 5, 5]))).toBe('Reprovado')
  });

  test('Adiciona nova nota ao array', () => {
    const novasNotas = adicionarNota(notas, 10)
    expect(novasNotas).toEqual([7, 8, 9, 10])
  })
})