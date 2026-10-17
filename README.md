# Calculadora de precios

Programa sencillo que calcula precios con IVA y descuentos. Está hecho en Python, JavaScript y PHP, y cada versión tiene su documentación técnica generada con la herramienta de su lenguaje.

## Qué hace

- Calcula el precio con IVA (21 % por defecto).
- Aplica un descuento a un precio.
- Calcula el precio final aplicando primero el descuento y después el IVA.

## Cómo se ejecuta

```
python python/calculadora.py
node js/calculadora.js
php php/calculadora.php
```

## Cómo se genera la documentación

- **Python (Sphinx):** `python -m sphinx -b html python/sphinx/source docs/python/html`
- **JavaScript (JSDoc):** `jsdoc js/calculadora.js -d docs/js/html`
- **PHP (phpDocumentor):** `php phpDocumentor.phar run -d php -t docs/php/html`

La documentación generada está en la carpeta `docs/`.

## Autor

Juan José Martínez Ceballos · 2.º DAW