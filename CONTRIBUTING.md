# Cómo contribuir

Gracias por querer mejorar la calculadora de precios. Para que todos los cambios sigan el mismo orden, sigue estos pasos.

## Antes de empezar

1. Abre una Issue que explique el error o la mejora que propones.
2. Crea una rama a partir de develop con el nombre feature/descripcion o bugfix/descripcion.

## Mientras trabajas

- La calculadora está en tres lenguajes (python/, js/ y php/). Si cambias una función, cámbiala en los tres para que todas las versiones den el mismo resultado.
- Documenta cada función en el propio código: con docstrings en Python (PEP 257), con JSDoc en JavaScript y con PHPDoc en PHP.
- Si has cambiado algún comentario de documentación, vuelve a generar la documentación técnica con los comandos del README.md.
- Si el cambio afecta al uso del programa, actualiza también el README.md o la carpeta docs/.
- Escribe mensajes de commit claros que digan qué has hecho.

## Al terminar

1. Sube tu rama y abre un Pull Request hacia develop.
2. Explica en el Pull Request qué has cambiado y enlaza la Issue con Closes #número.
3. Espera a que las comprobaciones de GitHub Actions estén en verde antes de fusionar.
