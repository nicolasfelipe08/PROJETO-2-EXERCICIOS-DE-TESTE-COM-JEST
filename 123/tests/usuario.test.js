const usuario = require('../src/usuario');

describe('Testes do Usuário', () => {
  test('Usuário tem nome, idade e email', () => {
    expect(usuario).toHaveProperty('nome')
    expect(usuario).toHaveProperty('idade')
    expect(usuario).toHaveProperty('email')
  });

  test('Propriedades do usuário são do tipo correto', () => {
    expect(typeof usuario.nome).toBe('string')
    expect(typeof usuario.idade).toBe('number')
    expect(typeof usuario.email).toBe('string')
  });
});