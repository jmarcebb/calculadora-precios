<a name="module_calculadora"></a>

## calculadora
Calculadora de precios: calcula el IVA y aplica descuentos.


* [calculadora](#module_calculadora)
    * [~IVA](#module_calculadora..IVA)
    * [~precioConIva(precio, [iva])](#module_calculadora..precioConIva) ⇒ <code>number</code>
    * [~aplicarDescuento(precio, descuento)](#module_calculadora..aplicarDescuento) ⇒ <code>number</code>
    * [~precioFinal(precio, descuento, [iva])](#module_calculadora..precioFinal) ⇒ <code>number</code>

<a name="module_calculadora..IVA"></a>

### calculadora~IVA
Porcentaje de IVA por defecto.

**Kind**: inner constant of [<code>calculadora</code>](#module_calculadora)  
<a name="module_calculadora..precioConIva"></a>

### calculadora~precioConIva(precio, [iva]) ⇒ <code>number</code>
Calcula el precio con IVA.

**Kind**: inner method of [<code>calculadora</code>](#module_calculadora)  
**Returns**: <code>number</code> - Precio con IVA.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| precio | <code>number</code> |  | Precio sin IVA. |
| [iva] | <code>number</code> | <code>21</code> | Porcentaje de IVA. |

<a name="module_calculadora..aplicarDescuento"></a>

### calculadora~aplicarDescuento(precio, descuento) ⇒ <code>number</code>
Aplica un descuento a un precio.

**Kind**: inner method of [<code>calculadora</code>](#module_calculadora)  
**Returns**: <code>number</code> - Precio con el descuento aplicado.  

| Param | Type | Description |
| --- | --- | --- |
| precio | <code>number</code> | Precio original. |
| descuento | <code>number</code> | Porcentaje de descuento. |

<a name="module_calculadora..precioFinal"></a>

### calculadora~precioFinal(precio, descuento, [iva]) ⇒ <code>number</code>
Calcula el precio final aplicando primero el descuento y después el IVA.

**Kind**: inner method of [<code>calculadora</code>](#module_calculadora)  
**Returns**: <code>number</code> - Precio final.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| precio | <code>number</code> |  | Precio original sin IVA. |
| descuento | <code>number</code> |  | Porcentaje de descuento. |
| [iva] | <code>number</code> | <code>21</code> | Porcentaje de IVA. |

