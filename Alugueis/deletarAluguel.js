async function deletarAluguel(id) {
    try {
      const aluguelDeletado = await Livro.findByIdAndDelete(id);
      return aluguelDeletado;
    } catch (erro) {
      console.error("Erro ao deletar livro:", erro);
      throw erro;
    }
  }
  
  app.delete("/aluguel/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const aluguelDeletado = await deletarLivro(id);
      if (aluguelDeletado) {
        res
          .status(200)
          .json({ mensagem: "Aluguel deletado com sucesso", aluguel: aluguelDeletado });
      } else {
        res.status(404).json({ mensagem: "Aluguel não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar aluguel", erro: erro.message });
    }
});

module.exports = deletarAluguel;