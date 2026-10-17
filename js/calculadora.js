/**
 * Calculadora de precios: calcula el IVA y aplica descuentos.
 * @module calculadora
 */

/** Porcentaje de IVA por defecto. */
const IVA = 21;

/**
 * Calcula el precio con IVA.
 * @param {number} precio - Precio sin IVA.
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio con IVA.
 */
function precioConIva(precio, iva = IVA) {
  return Math.round(precio * (1 + iva / 100) * 100) / 100;
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio - Precio original.
 * @param {number} descuento - Porcentaje de descuento.
 * @returns {number} Precio con el descuento aplicado.
 */
function aplicarDescuento(precio, descuento) {
  return Math.round(precio * (1 - descuento / 100) * 100) / 100;
}

/**
 * Calcula el precio final aplicando primero el descuento y después el IVA.
 * @param {number} precio - Precio original sin IVA.
 * @param {number} descuento - Porcentaje de descuento.
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio final.
 */
function precioFinal(precio, descuento, iva = IVA) {
  return precioConIva(aplicarDescuento(precio, descuento), iva);
}

console.log("Precio con IVA:", precioConIva(100));
console.log("Precio con descuento:", aplicarDescuento(100, 10));
console.log("Precio final:", precioFinal(100, 10));