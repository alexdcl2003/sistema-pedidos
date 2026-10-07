// Sistema de Pedidos - logica principal
const pedidos = [];

function agregarPedido(pedido) {
  pedidos.push(pedido);
}

function listarPedidos() {
  return pedidos;
}

let modo = "base";

function iniciar() {
  console.log("Sistema iniciado");
}

iniciar();
