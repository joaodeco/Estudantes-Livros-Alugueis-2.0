async function atualizarAluguel(id, idLivro, idEstudante, dataAluguel, dataDevolucao) {
    try {
      const aluguelAtualizado = await Aluguel.findByIdAndUpdate(
        id,
        { id, idLivro, idEstudante, dataAluguel, dataDevolucao},
        { new: true, runValidators: true }
      );
      return aluguelAtualizado;
    } catch (erro) {
      console.error("Erro ao atualizar aluguel:", erro);
      throw erro;
    }
  }
  
  app.put("/aluguel/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { idLivro, idEstudante, dataAluguel, dataDevolucao } = req.body;
      const aluguelAtualizado = await atualizarAluguel(
        id, 
        idLivro, 
        idEstudante, 
        dataAluguel, 
        dataDevolucao
      );
      if (aluguelAtualizado) {
        res
          .status(200)
          .json({
            mensagem: "Aluguel atualizado com sucesso",
            aluguel: aluguelAtualizado,
          });
      } else {
        res.status(404).json({ mensagem: "Aluguel não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao atualizar aluguel", erro: erro.message });
    }
});

module.exports = atualizarAluguel;