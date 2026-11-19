# La raíz perdida

Videojuego educativo de Newton-Raphson hecho con HTML, CSS y JavaScript. No requiere backend ni proceso de instalación.

## Ejecutar

Abre `index.html` en un navegador moderno. El progreso y las medallas se guardan en el almacenamiento local del navegador.

## Cómo jugar

Avanza por seis mundos con dos niveles cada uno. En cada nivel identifica la función, elige su derivada, evalúa `f(x₀)` y `f′(x₀)` por separado y calcula las aproximaciones con

```text
xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)
```

La gráfica interactiva muestra la curva, la tangente, la raíz y las aproximaciones. La aventura incluye vidas, combo, poderes, eventos, niveles desbloqueables, logros, rangos de experiencia y una clasificación local. Puedes practicar sin presión, introducir aproximaciones numéricas o probar tus propios polinomios en el laboratorio.

El laboratorio acepta polinomios de una variable con potencias enteras de `x` hasta 8 (por ejemplo, `x^3 - 2x - 5`), un punto inicial finito y calcula las iteraciones con un límite de 30 pasos. La función se interpreta como términos polinómicos; no se ejecuta como código.

El progreso, perfil, preferencias y clasificación se guardan en `localStorage` del navegador. Usa **Configuración → Reiniciar todo el progreso** para borrarlos.
