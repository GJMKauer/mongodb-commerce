db.produtos.updateOne(
  { nome: { $eq: "Cheddar McMelt" } },
  { $pop: { ingredientes: 1 } },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);