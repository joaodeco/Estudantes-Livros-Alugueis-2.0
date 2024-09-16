async function listarLivros() {
    try {
      return await Livro.find();
    } catch (erro) {
      console.error("Erro ao listar livros:", erro);
      throw erro;
    }
  }
  
  app.get("/livros", async (req, res) => {
    try {
      const livros = await livros();
      res.status(200).json(livros);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao listar livros", erro: erro.message });
    }
});

module.exports = listarLivros;
