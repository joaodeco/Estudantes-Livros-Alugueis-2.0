async function deletarLivro(id) {
    try {
      const livroDeletado = await Livro.findByIdAndDelete(id);
      return livroDeletado;
    } catch (erro) {
      console.error("Erro ao deletar livro:", erro);
      throw erro;
    }
  }
  
  app.delete("/livros/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const livroDeletado = await deletarLivro(id);
      if (livroDeletado) {
        res
          .status(200)
          .json({ mensagem: "Livro deletado com sucesso", livro: livroDeletado });
      } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar livro", erro: erro.message });
    }
});

module.exports = deletarLivro;