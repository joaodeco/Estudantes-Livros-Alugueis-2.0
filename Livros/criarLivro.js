async function criarLivro(titulo, autor, ano, genero) {
    try {
      const novoLivro = new Livro({ titulo, autor, ano, genero });
      return await novoLivro.save();
    } catch (erro) {
      console.error("Erro ao criar livro:", erro);
      throw erro;
    }
  }

module.exports = criarLivro;