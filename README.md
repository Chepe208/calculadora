# Calculadora JS – Lab 9: Creación y mezcla de ramas en Git

Este repo documenta el **Laboratorio 9**, donde esta el **manejo de ramas** para el desarrollo de una calculadora en JavaScript.  
Cada operación se implementa en una rama `feature/...`, se integra en `develop` y, al finalizar, se publica en `master` y en GitHub.

## Ramas del proyecto

Ramas que se utilizaron en el flujo:

- `develop` 
- `master`
- `feature/inputs-calculadora`
- `feature/opcion-menu-operacion-suma`
- `feature/operacion-resta`
- `feature/operacion-multiplicacion`
- `feature/operacion-dividir`
- `feature/operacion-exponente`
- `feature/operacion-factorial`
- `feature/operacion-raiz-cuadrada`

##  1) Creación y manejo de ramas

**¿Qué es una rama?**  
Es una línea de trabajo paralela que permite desarrollar una funcionalidad **aislada** del código estable. Facilita colaborar, probar y luego **fusionar** (merge) los cambios cuando estén listos.

### Comandos básicos

1. **Listar ramas**
   - **Comando**
     ```bash
     git branch
     ```
   - **Qué hace y por qué**  
     Muestra las ramas locales y marca con `*` la rama activa. verificar dónde estás.
   - **Salida/Captura esperada**
     ```bash
     * develop
       master
       feature/operacion-resta

2. **Cambiar a `develop` (recomendado antes de crear features)**
   - **Comando**
     ```bash
     git checkout develop
     ```
   - **Qué hace y por qué**  
     Cambia el directorio de trabajo a `develop`, que será la base para ramificar nuevas funciones.
   - **Salida/Captura esperada**
     ```bash
     Cambiado a rama 'develop'
     ```

3. **Crear y cambiar a una nueva rama de feature**
   - **Comando (forma moderna)**
     ```bash
     git switch -c feature/operacion-resta
   - **Qué hace y por qué**  
     Crea una rama nueva para una funcionalidad específica y cambia a ella en un solo paso.
   - **Salida/Captura esperada**
     ```bash
     Cambiado a una rama nueva 'feature/operacion-resta'
     ```

4. **Preparar y confirmar cambios**
   - **Comando**
     ```bash
     git add .
     git commit -m "Implementación de la función restar"
     ```
   - **Qué hace y por qué**  
     `git add .` lleva **todos** los cambios de tu carpeta al **área de preparación** (staging).  
     `git commit -m` guarda un **snapshot** con un mensaje descriptivo. Es vital para un historial claro.
   - **Salida/Captura esperada**
     ```bash
     [feature/operacion-resta 123abcd] Implementación de la función restar
      1 file changed, 5 insertions(+)

---

## 2) Ejemplos de fusión de ramas
La idea es **desarrollar en `feature/...`** y luego **fusionar en `develop`**.

### Caso: Fusionar una feature en `develop`

1. **Volver a `develop`**
   - **Comando**
     ```bash
     git checkout develop
     ```
   - **Qué hace y por qué**  
     Te posiciona en la rama donde quieres **recibir** los cambios (target del merge).
   - **Salida/Captura esperada**
     ```bash
     Cambiado a rama 'develop'
     ```

2. **Hacer el merge**
   - **Comando**
     ```bash
     git merge feature/operacion-resta
     ```
   - **Qué hace y por qué**  
     Integra los commits de `feature/operacion-resta` en `develop`.  
     Si no hay conflictos, Git hace un *fast-forward* o crea un commit de fusión.
   - **Salida/Captura esperada (sin conflictos)**
     ```bash
     Actualizando 1eb70fb..4c5532b
     Fast-forward
       index.js | 5 +++++
       1 file changed, 5 insertions(+)
     ```

3. **Ver historial con gráfico**
   - **Comando**
     ```bash
     git log --oneline --graph --all 
     ```
   - **Qué hace y por qué**  
     Visualiza el historial compacto con ramas y merges. Útil para evidencias.
   - **Salida/Captura esperada**
     ```
     *   4c5532b (HEAD -> develop) Merge branch 'feature/operacion-resta'
     |\
     | * 123abcd Implementación de la función restar
     * | ...
     |/
     ```

> Se repite el mismo procedimiento para:
> `feature/operacion-multiplicacion`, `feature/operacion-dividir`,  
> `feature/operacion-exponente`, `feature/operacion-factorial`, `feature/operacion-raiz-cuadrada`, etc.


## 3) Sincronización: local ↔ remoto (GitHub)

> Basado en el flujo del **Lab 12**.

1. **Cambiar protocolo a HTTPS en “Quick setup” (GitHub)**
   - **Acción**
     En la página del repo nuevo en GitHub, selecciona **HTTPS**.
   - **Por qué**  
     Para clonar/push con credenciales HTTPS (común en entornos de clase).
   - **Captura sugerida**  
     Pantalla de “Quick setup” mostrando HTTPS seleccionado.

2. **Vincular el remoto**
   - **Comando**
     ```bash
     git remote add origin https://github.com/<tu-usuario>/calculadora.git
     ```
   - **Qué hace y por qué**  
     Registra la URL del repo remoto con el nombre `origin` para poder **empujar** (push) el repo local.
   - **Verificación**
     ```bash
     git remote -v
     ```
   - **Salida/Captura esperada**
     ```bash
     origin  https://github.com/<tu-usuario>/calculadora.git (fetch)
     origin  https://github.com/<tu-usuario>/calculadora.git (push)
     ```
3. **Publicar todas las ramas locales al remoto**
   - **Comando**
     ```bash
     git push --all origin
     ```
     *Alternativa con URL completa: `git push --all https://github.com/<tu-usuario>/calculadora.git`*
   - **Qué hace y por qué**  
     Sube **todas** las ramas locales (develop, master y features) al repositorio remoto, dejando evidencia del trabajo por rama.
   - **Salida/Captura esperada**
     ```bash
     Enumerando objetos...
     ...
      * [new branch]      develop -> develop
      * [new branch]      feature/operacion-resta -> feature/operacion-resta
      * [new branch]      master -> master
     ```
4. **Actualizar `master` con lo integrado en `develop` y publicar**
   - **Comando**
     ```bash
     git checkout master
     git merge develop
     git push -u origin master
     ```
   - **Qué hace y por qué**  
     - Cambias a `master` (rama estable).
     - Traes todo lo integrado en `develop`.
     - Publicas `master` en el remoto y configuras el **tracking** (`-u`) para futuros `git push`.
   - **Salida/Captura esperada**
     ```bash
     Cambiado a rama 'master'
     Actualizando 1eb70fb..4c5532b
     Fast-forward
       index.html | 12 ++++++++++++
       index.js   | 51 ++++++++++++++++++++++++++++++++++++++++++++++++++-
     ...
     To https://github.com/<tu-usuario>/calculadora.git
        1eb70fb..4c5532b  master -> master
     branch 'master' set up to track 'origin/master'.
     ```

5. **Verificar en GitHub**
   - **Acción**
     Recarga la página del repo, revisa **Branches** y el contenido de `master`.
   - **Por qué**  
     Confirmas que ramas y archivos ya están sincronizados.
   - **Captura sugerida**  
     Vista de GitHub mostrando ramas y archivos.

---

## 5) Retos enfrentados y aprendizajes clave

###  Retos

- **Conflictos de fusión:** al tocar la misma zona de `index.js` desde varias ramas.  
  _Solución:_ fusionar con frecuencia y resolver conflictos revisando ambos lados; probar antes de confirmar.

- **Mensajes de commit poco descriptivos:** dificultan el historial.  
  _Solución:_ usar mensajes claros y atómicos (ej. `feat: implementar dividir con validación de cero`).

- **Diferencias `switch` vs `checkout`:** confusión inicial.  
  _Aprendizaje:_ `git switch -c` para crear/cambiar de rama; mantener `git checkout develop` para volver a `develop` si así lo pide la guía.


---

###  Aprendizajes

- Trabajar con **ramas cortas y específicas** acelera las revisiones y reduce conflictos.  

- Mantener una **rama de integración (`develop`)** permite probar todo antes de pasar a `master`.  

- Usar `git log --oneline --graph --all` ayuda a **visualizar el flujo** de merges para documentar. 

- `git add .` **prepara** todos los cambios; si necesitas granularidad, añade archivos específicos (`git add index.js`).  

- Publicar con `git push -u origin <rama>` configura el **tracking** y simplifica futuros `push`.  
