"""Calculadora de precios: calcula el IVA y aplica descuentos.

Todos los precios se redondean a dos decimales.
"""

IVA = 21


def precio_con_iva(precio, iva=IVA):
    """Calcula el precio con IVA.

    :param precio: Precio sin IVA.
    :param iva: Porcentaje de IVA (21 por defecto).
    :return: Precio con IVA.
    """
    return round(precio * (1 + iva / 100), 2)


def aplicar_descuento(precio, descuento):
    """Aplica un descuento a un precio.

    :param precio: Precio original.
    :param descuento: Porcentaje de descuento.
    :return: Precio con el descuento aplicado.
    """
    return round(precio * (1 - descuento / 100), 2)


def precio_final(precio, descuento, iva=IVA):
    """Calcula el precio final aplicando primero el descuento y después el IVA.

    :param precio: Precio original sin IVA.
    :param descuento: Porcentaje de descuento.
    :param iva: Porcentaje de IVA (21 por defecto).
    :return: Precio final.
    """
    return precio_con_iva(aplicar_descuento(precio, descuento), iva)


if __name__ == "__main__":
    print("Precio con IVA:", precio_con_iva(100))
    print("Precio con descuento:", aplicar_descuento(100, 10))
    print("Precio final:", precio_final(100, 10))