async function atualizarLivro(id, titulo, autor, ano, genero) {
    try {
      const livroAtualizado = await Livro.findByIdAndUpdate(
        id,
        { titulo, autor, ano, genero },
        { new: true, runValidators: true }
      );
      return livroAtualizado;
    } catch (erro) {
      console.error("Erro ao atualizar livro:", erro);
      throw erro;
    }
  }
  
  app.put("/livros/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, autor, ano, genero } = req.body;
      const livroAtualizado = await atualizarLivro(
        id,
        titulo,
        autor,
        ano,
        genero
      );
      if (livroAtualizado) {
        res
          .status(200)
          .json({
            mensagem: "Livro atualizado com sucesso",
            livro: livroAtualizado,
          });
      } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao atualizar livro", erro: erro.message });
    }
});

module.exports = atualizarLivro;