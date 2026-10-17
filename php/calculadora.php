<?php
/**
 * Calculadora de precios: calcula el IVA y aplica descuentos.
 *
 * @package Calculadora
 */

/**
 * Calcula el precio con IVA.
 *
 * @param float $precio Precio sin IVA.
 * @param float $iva    Porcentaje de IVA (21 por defecto).
 * @return float Precio con IVA.
 */
function precioConIva($precio, $iva = 21)
{
    return round($precio * (1 + $iva / 100), 2);
}

/**
 * Aplica un descuento a un precio.
 *
 * @param float $precio    Precio original.
 * @param float $descuento Porcentaje de descuento.
 * @return float Precio con el descuento aplicado.
 */
function aplicarDescuento($precio, $descuento)
{
    return round($precio * (1 - $descuento / 100), 2);
}

/**
 * Calcula el precio final aplicando primero el descuento y después el IVA.
 *
 * @param float $precio    Precio original sin IVA.
 * @param float $descuento Porcentaje de descuento.
 * @param float $iva       Porcentaje de IVA (21 por defecto).
 * @return float Precio final.
 */
function precioFinal($precio, $descuento, $iva = 21)
{
    return precioConIva(aplicarDescuento($precio, $descuento), $iva);
}

echo "Precio con IVA: " . precioConIva(100) . PHP_EOL;
echo "Precio con descuento: " . aplicarDescuento(100, 10) . PHP_EOL;
echo "Precio final: " . precioFinal(100, 10) . PHP_EOL;