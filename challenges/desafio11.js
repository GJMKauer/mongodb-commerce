db.produtos.find(
  { $nor: [{ nome: { $in: ["Big Mac", "McChicken"] } }] },
  { nome: 1, curtidas: 1, vendidos: 1, _id: 0 },
);