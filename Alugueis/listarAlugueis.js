async function listarAlugueis() {
    try {
      return await aluguel.find();
    } catch (erro) {
      console.error("Erro ao listar alugueis:", erro);
      throw erro;
    }
  }
  
  app.get("/aluguel", async (req, res) => {
    try {
      const aluguel = await aluguel();
      res.status(200).json(aluguel);
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao listar alugueis", erro: erro.message });
    }
});

module.exports = listarAlugueis;
