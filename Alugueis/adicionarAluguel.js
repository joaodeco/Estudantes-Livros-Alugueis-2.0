async function criarAluguel(id, idLivro, idEstudante, dataAluguel, dataDevolucao) {
    try {
      const novoAluguel = new Aluguel({ id, idLivro, idEstudante, dataAluguel, dataDevolucao });
      return await novoAluguel.save();
    } catch (erro) {
      console.error("Erro ao criar Aluguel:", erro);
      throw erro;
    }
  }

module.exports = criarAluguel;