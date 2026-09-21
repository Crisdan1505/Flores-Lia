/* ========================================
   FONDO DE DESTELLOS DORADOS
   ======================================== */

const fondoDestellos =
    document.getElementById("fondoDestellos");

const cantidadParticulas = 40;


/* ========================================
   CREAR PARTÍCULAS
   ======================================== */

for (let i = 0; i < cantidadParticulas; i++) {

    const particula = document.createElement("span");

    particula.classList.add("particula");


    /* Algunas partículas serán estrellas */

    if (Math.random() > 0.72) {
        particula.classList.add("destello-fondo");
    }


    /* Posición horizontal */

    particula.style.left =
        Math.random() * 100 + "%";


    /* Velocidades diferentes */

    const duracionMovimiento =
        9 + Math.random() * 10;

    const duracionParpadeo =
        2 + Math.random() * 3;


    particula.style.animationDuration =
        `${duracionMovimiento}s, ${duracionParpadeo}s`;


    /* Retrasos diferentes */

    particula.style.animationDelay =
        `${Math.random() * -18}s, ${Math.random() * -5}s`;


    /* Tamaños diferentes */

    const escala =
        0.6 + Math.random() * 1.2;

    particula.style.scale = escala;


    fondoDestellos.appendChild(particula);
}


/* ========================================
   ELEMENTOS DE LAS PANTALLAS
   ======================================== */

const pantallaInicio =
    document.getElementById("pantallaInicio");

const pantallaDistancia =
    document.getElementById("pantallaDistancia");

const pantallaImprovisar =
    document.getElementById("pantallaImprovisar");
const pantallaCierre =
    document.getElementById("pantallaCierre");


/* ========================================
   BOTONES
   ======================================== */

const btnContinuar =
    document.getElementById("btnContinuar");

const btnEntonces =
    document.getElementById("btnEntonces");

const btnDescubrir =
    document.getElementById("btnDescubrir");

const btnSeguirPlanta =
    document.getElementById("btnSeguirPlanta");

const btnCierre =
    document.getElementById("btnCierre");


/* ========================================
   PLANTA
   ======================================== */

const zonaPlanta =
    document.getElementById("zonaPlanta");


/* ========================================
   MENSAJES DE LA PLANTA
   ======================================== */

const mensajePlanta =
    document.getElementById("mensajePlanta");

const mensajeFloracion =
    document.getElementById("mensajeFloracion");


/* ========================================
   PANTALLA 1 → PANTALLA 2
   ======================================== */

btnContinuar.addEventListener("click", function () {

    btnContinuar.disabled = true;

    pantallaInicio.classList.add("saliendo");


    setTimeout(function () {

        pantallaInicio.classList.add("oculta");

        pantallaDistancia.classList.remove("oculta");

        pantallaDistancia.classList.add("entrando");

    }, 700);

});


/* ========================================
   PANTALLA 2 → PANTALLA 3
   ======================================== */

btnEntonces.addEventListener("click", function () {

    btnEntonces.disabled = true;

    pantallaDistancia.classList.add("saliendo");


    setTimeout(function () {

        pantallaDistancia.classList.add("oculta");

        pantallaImprovisar.classList.remove("oculta");

        pantallaImprovisar.classList.add("entrando");

    }, 700);

});


/* ========================================
   GERMINACIÓN DE LA PLANTA
   ======================================== */

btnDescubrir.addEventListener("click", function () {

    /* Evitamos varios clics */

    btnDescubrir.disabled = true;


    /* Desaparece "A ver..." */

    btnDescubrir.classList.add(
        "boton-desapareciendo"
    );


    /* Comienza la germinación */

    zonaPlanta.classList.add(
        "germinando"
    );


    /* Quitamos el botón anterior */

    setTimeout(function () {

        btnDescubrir.style.display = "none";

    }, 500);


    /*
       La germinación tarda aproximadamente
       3.5 segundos.

       Dejamos una pequeña pausa antes
       de mostrar el siguiente botón.
    */

    setTimeout(function () {

        btnSeguirPlanta.classList.remove(
            "oculta"
        );

        btnSeguirPlanta.classList.add(
            "boton-apareciendo"
        );

    }, 4200);

});


/* ========================================
   INICIAR FLORACIÓN
   ======================================== */

btnSeguirPlanta.addEventListener("click", function () {

    /* Evitamos varios clics */

    btnSeguirPlanta.disabled = true;


    /* El botón desaparece */

    btnSeguirPlanta.classList.add(
        "boton-desapareciendo"
    );


    /* Iniciamos la floración */

    zonaPlanta.classList.add(
        "floreciendo"
    );


    /* Quitamos completamente el botón */

    setTimeout(function () {

        btnSeguirPlanta.style.display = "none";

    }, 500);


    /*
       Las flores terminan de abrir
       aproximadamente a los 3.8 segundos.

       Dejamos un momento para que se vea
       el ramo terminado antes de cambiar
       el mensaje.
    */

    setTimeout(function () {

        mensajePlanta.classList.add(
            "mensaje-desapareciendo"
        );

    }, 4700);


    /*
       Cuando termina de desaparecer
       el mensaje anterior, lo ocultamos.
    */

    setTimeout(function () {

        mensajePlanta.classList.add(
            "oculta"
        );


        /* Mostramos el mensaje nuevo */

        mensajeFloracion.classList.remove(
            "oculta"
        );

        mensajeFloracion.classList.add(
            "mensaje-apareciendo"
        );

    }, 5300);


    /*
       Finalmente aparece el botón
       para continuar al cierre.
    */

    setTimeout(function () {

        btnCierre.classList.remove(
            "oculta"
        );

        btnCierre.classList.add(
            "boton-apareciendo"
        );

    }, 6500);

});


/* ========================================
   PANTALLA 3 → PANTALLA 4
   ======================================== */

btnCierre.addEventListener("click", function () {

    /* Evitamos varios clics */

    btnCierre.disabled = true;


    /*
       Quitamos la animación con la que
       entró originalmente la pantalla 3.
       Así no entra en conflicto con la salida.
    */

    pantallaImprovisar.classList.remove(
        "entrando"
    );


    /* Forzamos al navegador a aplicar el cambio */

    void pantallaImprovisar.offsetWidth;


    /* Ahora sí desaparece la pantalla 3 */

    pantallaImprovisar.classList.add(
        "saliendo"
    );


    setTimeout(function () {

        /* Ocultamos completamente la pantalla 3 */

        pantallaImprovisar.classList.add(
            "oculta"
        );

        pantallaImprovisar.classList.remove(
            "saliendo"
        );


        /* Mostramos la pantalla final */

        pantallaCierre.classList.remove(
            "oculta"
        );


        /* Forzamos nuevamente el cambio visual */

        void pantallaCierre.offsetWidth;


        /* Animación de entrada */

        pantallaCierre.classList.add(
            "entrando"
        );


        /*
           Después comienza la aparición
           progresiva de las frases.
        */

        setTimeout(function () {

            pantallaCierre.classList.add(
                "animar-cierre"
            );

        }, 350);

    }, 700);

});