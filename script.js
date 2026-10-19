/* ==========================================================
   FECHAS DE NUESTRA HISTORIA ❤️
========================================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");
const fechaAniversario = new Date("2026-10-27T00:00:00");


/* ==========================================================
   PORTADA DE ENTRADA ❤️
========================================================== */

const botonComenzar =
    document.getElementById("botonComenzar");

const portadaPrincipal =
    document.querySelector(".portada");

const siguienteSeccion =
    document.querySelector(".introduccion-historia");


/* ==========================================================
   BLOQUEAR LA PÁGINA AL INICIAR
========================================================== */

document.body.classList.add(
    "pagina-bloqueada"
);


/* ==========================================================
   ABRIR NUESTRA HISTORIA
========================================================== */

if (
    botonComenzar &&
    portadaPrincipal
) {

    botonComenzar.addEventListener(
        "click",
        () => {

            /*
                Evitamos pulsar el botón
                varias veces durante la animación.
            */

            botonComenzar.disabled = true;


            /*
                Comenzamos la animación
                de salida de la portada.
            */

            portadaPrincipal.classList.add(
                "portada-saliendo"
            );


            /*
                Después de la animación
                desbloqueamos toda la página.
            */

            setTimeout(
                () => {

                    document.body.classList.remove(
                        "pagina-bloqueada"
                    );

                    document.body.classList.add(
                        "historia-abierta"
                    );


                    portadaPrincipal.classList.remove(
                        "portada-saliendo"
                    );

                    portadaPrincipal.classList.add(
                        "portada-abierta"
                    );


                    /*
                        Volvemos al inicio del contenido
                        antes de mostrar la historia.
                    */

                    window.scrollTo({
                        top: 0,
                        behavior: "auto"
                    });


                    /*
                        Nos desplazamos suavemente
                        hacia la primera sección.
                    */

                    if (siguienteSeccion) {

                        siguienteSeccion.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                },

                1050
            );

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Portada de entrada preparada ❤️"
);


/* ==========================================================
   CONTADOR DE NUESTRA HISTORIA ⏳❤️
========================================================== */

const diasElemento =
    document.getElementById("contadorDias");

const horasElemento =
    document.getElementById("contadorHoras");

const minutosElemento =
    document.getElementById("contadorMinutos");

const segundosElemento =
    document.getElementById("contadorSegundos");


function agregarCero(numero) {

    return numero < 10
        ? `0${numero}`
        : numero;

}


function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora - fechaInicio;


    if (diferencia < 0) {

        diferencia = 0;

    }


    const segundo = 1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferencia / dia
        );


    const horas =
        Math.floor(
            (diferencia % dia) / hora
        );


    const minutos =
        Math.floor(
            (diferencia % hora) / minuto
        );


    const segundos =
        Math.floor(
            (diferencia % minuto) / segundo
        );


    if (diasElemento) {

        diasElemento.textContent =
            dias;

    }


    if (horasElemento) {

        horasElemento.textContent =
            agregarCero(horas);

    }


    if (minutosElemento) {

        minutosElemento.textContent =
            agregarCero(minutos);

    }


    if (segundosElemento) {

        segundosElemento.textContent =
            agregarCero(segundos);

    }

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* ==========================================================
   ANIMACIONES AL HACER SCROLL ✨
========================================================== */

const elementosAnimados =
    document.querySelectorAll(
        `
        .introduccion-contenido,
        .camino-encabezado,
        .momento-tiempo,
        .camino-final,
        .recuerdos24-encabezado,
        .recuerdo24,
        .recuerdos24-final
        `
    );


elementosAnimados.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(45px)";

    elemento.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";

});


if ("IntersectionObserver" in window) {

    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity =
                            "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observador.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosAnimados.forEach((elemento) => {

        observador.observe(elemento);

    });

}


else {

    elementosAnimados.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}


/* ==========================================================
   INTERACCIÓN CON LAS TARJETAS DEL CAMINO ❤️
========================================================== */

const momentos =
    document.querySelectorAll(
        ".momento-tarjeta"
    );


momentos.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "click",
        () => {

            tarjeta.style.transform =
                "scale(0.98)";

            setTimeout(() => {

                tarjeta.style.transform = "";

            }, 170);

        }
    );

});


/* ==========================================================
   24 MESES · 24 PEQUEÑOS RECUERDOS 💌
========================================================== */

const recuerdos24 =
    document.querySelectorAll(
        ".recuerdo24"
    );


/* ==========================================================
   ELEMENTOS DEL MODAL
========================================================== */

const recuerdo24Modal =
    document.getElementById(
        "recuerdo24Modal"
    );

const recuerdo24Cerrar =
    document.getElementById(
        "recuerdo24Cerrar"
    );

const recuerdo24ModalNumero =
    document.getElementById(
        "recuerdo24ModalNumero"
    );

const recuerdo24ModalMes =
    document.getElementById(
        "recuerdo24ModalMes"
    );

const recuerdo24ModalIcono =
    document.getElementById(
        "recuerdo24ModalIcono"
    );

const recuerdo24ModalMensaje =
    document.getElementById(
        "recuerdo24ModalMensaje"
    );


/* ==========================================================
   ABRIR UN RECUERDO
========================================================== */

function abrirRecuerdo24(tarjeta) {

    if (
        !tarjeta ||
        !recuerdo24Modal
    ) {

        return;

    }


    const numero =
        tarjeta.dataset.numero || "";

    const mes =
        tarjeta.dataset.mes ||
        "Nuestro recuerdo";

    const icono =
        tarjeta.dataset.icono ||
        "❤️";

    const mensaje =
        tarjeta.dataset.mensaje ||
        "Un pequeño recuerdo de nuestra historia.";


    if (recuerdo24ModalNumero) {

        recuerdo24ModalNumero.textContent =
            numero
                ? `RECUERDO ${numero}`
                : "NUESTRO RECUERDO";

    }


    if (recuerdo24ModalMes) {

        recuerdo24ModalMes.textContent =
            mes;

    }


    if (recuerdo24ModalIcono) {

        recuerdo24ModalIcono.textContent =
            icono;

    }


    if (recuerdo24ModalMensaje) {

        recuerdo24ModalMensaje.textContent =
            mensaje;

    }


    recuerdo24Modal.classList.add(
        "mostrar"
    );


    document.body.style.overflow =
        "hidden";


    if (
        "vibrate" in navigator &&
        window.innerWidth <= 768
    ) {

        navigator.vibrate(35);

    }

}


/* ==========================================================
   ACTIVAR LAS 24 TARJETAS
========================================================== */

recuerdos24.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "click",
        () => {

            abrirRecuerdo24(
                tarjeta
            );

        }
    );


    tarjeta.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                abrirRecuerdo24(
                    tarjeta
                );

            }

        }
    );

});


/* ==========================================================
   CERRAR EL MODAL
========================================================== */

function cerrarRecuerdo24() {

    if (!recuerdo24Modal) {

        return;

    }


    recuerdo24Modal.classList.remove(
        "mostrar"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================================
   BOTÓN X
========================================================== */

if (recuerdo24Cerrar) {

    recuerdo24Cerrar.addEventListener(
        "click",
        cerrarRecuerdo24
    );

}


/* ==========================================================
   CERRAR TOCANDO FUERA DE LA TARJETA
========================================================== */

if (recuerdo24Modal) {

    recuerdo24Modal.addEventListener(
        "click",
        (evento) => {

            const fondo =
                evento.target.classList.contains(
                    "recuerdo24-modal-fondo"
                );


            if (fondo) {

                cerrarRecuerdo24();

            }

        }
    );

}


/* ==========================================================
   CERRAR CON LA TECLA ESC
========================================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            recuerdo24Modal &&
            recuerdo24Modal.classList.contains(
                "mostrar"
            )
        ) {

            cerrarRecuerdo24();

        }

    }
);


/* ==========================================================
   EFECTO AL TOCAR LAS TARJETAS 📱
========================================================== */

recuerdos24.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "pointerdown",
        () => {

            tarjeta.style.transform =
                "scale(0.97)";

        }
    );


    tarjeta.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                tarjeta.style.transform =
                    "";

            }, 120);

        }
    );


    tarjeta.addEventListener(
        "pointercancel",
        () => {

            tarjeta.style.transform =
                "";

        }
    );

});


/* ==========================================================
   CAMBIO DE ORIENTACIÓN EN CELULAR 📱
========================================================== */

window.addEventListener(
    "orientationchange",
    () => {

        setTimeout(() => {

            if (
                recuerdo24Modal &&
                recuerdo24Modal.classList.contains(
                    "mostrar"
                )
            ) {

                document.body.style.overflow =
                    "hidden";

            }

        }, 250);

    }
);


/* ==========================================================
   COMPROBACIÓN
========================================================== */

console.log(
    "Página de nuestros 2 años cargada correctamente ❤️"
);

console.log(
    `${recuerdos24.length} recuerdos encontrados 💌`
);

console.log(
    "Contador de nuestra historia funcionando ⏳❤️"
);


/* ==========================================================
   RAZONES POR LAS QUE ERES ESPECIAL ❤️
   ANIMACIONES E INTERACCIÓN
========================================================== */

const razonesTarjetas =
    document.querySelectorAll(".razon-tarjeta");

const razonesEncabezado =
    document.querySelector(".razones-encabezado");

const razonesMensaje =
    document.querySelector(".razones-mensaje");

const razonesCierre =
    document.querySelector(".razones-cierre");


/* ==========================================================
   ANIMACIÓN INICIAL
========================================================== */

const elementosRazones = [
    razonesEncabezado,
    ...razonesTarjetas,
    razonesMensaje,
    razonesCierre
].filter(Boolean);


elementosRazones.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(45px)";

    elemento.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


/* ==========================================================
   APARECER AL HACER SCROLL
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorRazones =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observadorRazones.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosRazones.forEach((elemento) => {

        observadorRazones.observe(elemento);

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosRazones.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}


/* ==========================================================
   EFECTO AL TOCAR UNA TARJETA
========================================================== */

razonesTarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "pointerdown",
        () => {

            tarjeta.style.transform =
                "scale(0.97)";

        }
    );


    tarjeta.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                tarjeta.style.transform = "";

            }, 130);

        }
    );


    tarjeta.addEventListener(
        "pointercancel",
        () => {

            tarjeta.style.transform = "";

        }
    );

});


/* ==========================================================
   PEQUEÑA VIBRACIÓN EN CELULAR
========================================================== */

razonesTarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "click",
        () => {

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(25);

            }

        }
    );

});


console.log(
    `${razonesTarjetas.length} razones especiales cargadas ❤️`
);


/* ==========================================================
   UNA CARTA PARA TI 💌❤️
   ANIMACIONES
========================================================== */

const cartaEncabezado =
    document.querySelector(".carta-encabezado");

const cartaPapel =
    document.querySelector(".carta-papel");

const cartaDestinataria =
    document.querySelector(".carta-destinataria");

const cartaTexto =
    document.querySelector(".carta-texto");

const cartaDespedida =
    document.querySelector(".carta-despedida");

const cartaFechasFinales =
    document.querySelector(".carta-fechas-finales");

const cartaCierre =
    document.querySelector(".carta-cierre");


/* ==========================================================
   ELEMENTOS QUE VAN A APARECER
========================================================== */

const elementosCarta = [
    cartaEncabezado,
    cartaPapel,
    cartaCierre
].filter(Boolean);


/* ==========================================================
   ESTADO INICIAL
========================================================== */

elementosCarta.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(45px)";

    elemento.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";

});


/* ==========================================================
   APARECER AL HACER SCROLL
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorCarta =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observadorCarta.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosCarta.forEach((elemento) => {

        observadorCarta.observe(elemento);

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosCarta.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}


/* ==========================================================
   EFECTO SUAVE AL TOCAR LA CARTA
========================================================== */

if (cartaPapel) {

    cartaPapel.addEventListener(
        "pointerdown",
        () => {

            cartaPapel.style.transform =
                "scale(0.995)";

        }
    );


    cartaPapel.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                cartaPapel.style.transform = "";

            }, 140);

        }
    );


    cartaPapel.addEventListener(
        "pointercancel",
        () => {

            cartaPapel.style.transform = "";

        }
    );

}


/* ==========================================================
   EFECTO EN LA FRASE DESTACADA
========================================================== */

const cartaFrase =
    document.querySelector(
        ".carta-frase-destacada"
    );


if (cartaFrase) {

    cartaFrase.style.transition =
        "transform 0.35s ease";


    cartaFrase.addEventListener(
        "pointerdown",
        () => {

            cartaFrase.style.transform =
                "scale(0.98)";

        }
    );


    cartaFrase.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                cartaFrase.style.transform =
                    "scale(1)";

            }, 130);

        }
    );


    cartaFrase.addEventListener(
        "pointercancel",
        () => {

            cartaFrase.style.transform =
                "scale(1)";

        }
    );

}


/* ==========================================================
   PEQUEÑA VIBRACIÓN EN CELULAR
========================================================== */

if (cartaPapel) {

    cartaPapel.addEventListener(
        "click",
        () => {

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(20);

            }

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Sección 'Una carta para ti' cargada correctamente 💌❤️"
);


/* ==========================================================
   NUESTROS MOMENTOS FAVORITOS 📸❤️
   ANIMACIONES E INTERACCIÓN
========================================================== */

const galeriaEncabezado =
    document.querySelector(".galeria-encabezado");

const galeriaFotos =
    document.querySelectorAll(".galeria-foto");

const galeriaMensaje =
    document.querySelector(".galeria-mensaje");

const galeriaCierre =
    document.querySelector(".galeria-cierre");


/* ==========================================================
   ELEMENTOS QUE APARECERÁN AL HACER SCROLL
========================================================== */

const elementosGaleria = [
    galeriaEncabezado,
    ...galeriaFotos,
    galeriaMensaje,
    galeriaCierre
].filter(Boolean);


/* ==========================================================
   ESTADO INICIAL
========================================================== */

elementosGaleria.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(45px)";

    elemento.style.transition =
        "opacity 0.85s ease, transform 0.85s ease";

});


/* ==========================================================
   APARECER AL HACER SCROLL
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorGaleria =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observadorGaleria.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosGaleria.forEach((elemento) => {

        observadorGaleria.observe(elemento);

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosGaleria.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}


/* ==========================================================
   EFECTO AL TOCAR LAS TARJETAS
========================================================== */

galeriaFotos.forEach((foto) => {

    foto.addEventListener(
        "pointerdown",
        () => {

            foto.style.transform =
                "scale(0.98)";

        }
    );


    foto.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                foto.style.transform = "";

            }, 130);

        }
    );


    foto.addEventListener(
        "pointercancel",
        () => {

            foto.style.transform = "";

        }
    );

});


/* ==========================================================
   PEQUEÑA VIBRACIÓN EN CELULAR
========================================================== */

galeriaFotos.forEach((foto) => {

    foto.addEventListener(
        "click",
        () => {

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(25);

            }

        }
    );

});


/* ==========================================================
   IDENTIFICAR CADA RECUERDO
========================================================== */

galeriaFotos.forEach((foto) => {

    foto.addEventListener(
        "click",
        () => {

            const numeroFoto =
                foto.dataset.foto;

            console.log(
                `Recuerdo ${numeroFoto} seleccionado 📸`
            );

        }
    );

});


/* ==========================================================
   PREPARAR FOTOS REALES
========================================================== */

galeriaFotos.forEach((foto) => {

    const imagen =
        foto.querySelector(
            ".galeria-imagen img"
        );


    if (imagen) {

        imagen.setAttribute(
            "draggable",
            "false"
        );

    }

});


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    `${galeriaFotos.length} recuerdos de la galería cargados 📸❤️`
);


/* ==========================================================
   VISOR DE FOTOGRAFÍAS 📸❤️
========================================================== */

const visorFotos =
    document.getElementById("visorFotos");

const visorFondo =
    document.getElementById("visorFondo");

    const visorCerrar =
    document.getElementById("visorCerrar");

const visorAnterior =
    document.getElementById("visorAnterior");

const visorSiguiente =
    document.getElementById("visorSiguiente");

const visorImagen =
    document.getElementById("visorImagen");

const visorContador =
    document.getElementById("visorContador");

const visorNumero =
    document.getElementById("visorNumero");

const visorTitulo =
    document.getElementById("visorTitulo");

const visorTexto =
    document.getElementById("visorTexto");


/* ==========================================================
   FOTOGRAFÍAS DE LA GALERÍA
========================================================== */

const fotosVisor =
    Array.from(
        document.querySelectorAll(".galeria-foto")
    );


let fotoActual = 0;


/* ==========================================================
   ACTUALIZAR INFORMACIÓN DEL VISOR
========================================================== */

function actualizarVisor(indice) {

    const tarjeta =
        fotosVisor[indice];

    if (!tarjeta) return;


    const imagen =
        tarjeta.querySelector(
            ".galeria-imagen img"
        );

    const numero =
        tarjeta.querySelector(
            ".galeria-info > span"
        );

    const titulo =
        tarjeta.querySelector(
            ".galeria-info h3"
        );

    const texto =
        tarjeta.querySelector(
            ".galeria-info p"
        );


    if (imagen && visorImagen) {

        visorImagen.src =
            imagen.src;

        visorImagen.alt =
            imagen.alt || "Nuestro recuerdo";

    }


    if (numero && visorNumero) {

        visorNumero.textContent =
            numero.textContent;

    }


    if (titulo && visorTitulo) {

        visorTitulo.textContent =
            titulo.textContent;

    }


    if (texto && visorTexto) {

        visorTexto.textContent =
            texto.textContent;

    }


    if (visorContador) {

        visorContador.textContent =
            `${indice + 1} / ${fotosVisor.length}`;

    }

}


/* ==========================================================
   ABRIR VISOR
========================================================== */

function abrirVisor(indice) {

    if (!visorFotos) return;


    fotoActual = indice;

    actualizarVisor(
        fotoActual
    );


    visorFotos.classList.add(
        "mostrar"
    );


    visorFotos.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    if (
        "vibrate" in navigator &&
        window.innerWidth <= 768
    ) {

        navigator.vibrate(25);

    }

}


/* ==========================================================
   CERRAR VISOR
========================================================== */

function cerrarVisorFotos() {

    if (!visorFotos) return;


    visorFotos.classList.remove(
        "mostrar"
    );


    visorFotos.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================================
   ABRIR AL TOCAR UNA FOTO
========================================================== */

fotosVisor.forEach(
    (tarjeta, indice) => {

        tarjeta.style.cursor =
            "pointer";


        tarjeta.addEventListener(
            "click",
            () => {

                abrirVisor(
                    indice
                );

            }
        );

    }
);


/* ==========================================================
   FOTO SIGUIENTE
========================================================== */

function siguienteFoto() {

    if (
        fotosVisor.length === 0
    ) return;


    fotoActual++;


    if (
        fotoActual >=
        fotosVisor.length
    ) {

        fotoActual = 0;

    }


    actualizarVisor(
        fotoActual
    );

}


/* ==========================================================
   FOTO ANTERIOR
========================================================== */

function anteriorFoto() {

    if (
        fotosVisor.length === 0
    ) return;


    fotoActual--;


    if (
        fotoActual < 0
    ) {

        fotoActual =
            fotosVisor.length - 1;

    }


    actualizarVisor(
        fotoActual
    );

}


/* ==========================================================
   BOTONES
========================================================== */

if (visorSiguiente) {

    visorSiguiente.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();

            siguienteFoto();

        }
    );

}


if (visorAnterior) {

    visorAnterior.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();

            anteriorFoto();

        }
    );

}


if (visorCerrar) {

    visorCerrar.addEventListener(
        "click",
        cerrarVisorFotos
    );

}


/* ==========================================================
   CERRAR TOCANDO EL FONDO
========================================================== */

if (visorFondo) {

    visorFondo.addEventListener(
        "click",
        cerrarVisorFotos
    );

}


/* ==========================================================
   CONTROLES DEL TECLADO
========================================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            !visorFotos ||
            !visorFotos.classList.contains(
                "mostrar"
            )
        ) {

            return;

        }


        if (
            evento.key ===
            "Escape"
        ) {

            cerrarVisorFotos();

        }


        if (
            evento.key ===
            "ArrowRight"
        ) {

            siguienteFoto();

        }


        if (
            evento.key ===
            "ArrowLeft"
        ) {

            anteriorFoto();

        }

    }
);


/* ==========================================================
   DESLIZAR EN CELULAR 📱
========================================================== */

let inicioDeslizamiento = 0;

let finalDeslizamiento = 0;


if (visorFotos) {

    visorFotos.addEventListener(
        "touchstart",
        (evento) => {

            inicioDeslizamiento =
                evento.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    visorFotos.addEventListener(
        "touchend",
        (evento) => {

            finalDeslizamiento =
                evento.changedTouches[0]
                    .screenX;


            const diferencia =
                inicioDeslizamiento -
                finalDeslizamiento;


            /* DESLIZAR HACIA LA IZQUIERDA */

            if (
                diferencia > 60
            ) {

                siguienteFoto();

            }


            /* DESLIZAR HACIA LA DERECHA */

            if (
                diferencia < -60
            ) {                anteriorFoto();

            }

        },
        {
            passive: true
        }
    );

}


/* ==========================================================
   EVITAR ARRASTRAR LA FOTO
========================================================== */

if (visorImagen) {

    visorImagen.setAttribute(
        "draggable",
        "false"
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    `Visor conectado con ${fotosVisor.length} fotografías 📸❤️`
);


/* ==========================================================
   SI PUDIERA VOLVER A EMPEZAR ❤️
   ANIMACIONES
========================================================== */

const volverDetalle =
    document.querySelector(".volver-detalle");

const volverEtiqueta =
    document.querySelector(".volver-etiqueta");

const volverTitulo =
    document.querySelector(".volver-contenido > h2");

const volverLinea =
    document.querySelector(".volver-linea");

const volverTexto =
    document.querySelector(".volver-texto");

const volverCorazon =
    document.querySelector(".volver-corazon-central");

const volverMensaje =
    document.querySelector(".volver-mensaje-principal");

const volverFechas =
    document.querySelector(".volver-fechas");

const volverFrase =
    document.querySelector(".volver-frase-final");

const volverContinuacion =
    document.querySelector(".volver-continuacion");


/* ==========================================================
   ELEMENTOS QUE APARECERÁN
========================================================== */

const elementosVolver = [
    volverDetalle,
    volverEtiqueta,
    volverTitulo,
    volverLinea,
    volverTexto,
    volverCorazon,
    volverMensaje,
    volverFechas,
    volverFrase,
    volverContinuacion
].filter(Boolean);


/* ==========================================================
   ESTADO INICIAL
========================================================== */

elementosVolver.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(40px)";

    elemento.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";

});


/* ==========================================================
   APARECER AL HACER SCROLL
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorVolver =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observadorVolver.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosVolver.forEach((elemento) => {

        observadorVolver.observe(elemento);

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosVolver.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}


/* ==========================================================
   EFECTO DEL CORAZÓN CENTRAL
========================================================== */

if (volverCorazon) {

    volverCorazon.addEventListener(
        "pointerdown",
        () => {

            volverCorazon.style.transform =
                "scale(0.95)";

        }
    );


    volverCorazon.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                volverCorazon.style.transform = "";

            }, 150);

        }
    );


    volverCorazon.addEventListener(
        "pointercancel",
        () => {

            volverCorazon.style.transform = "";

        }
    );

}


/* ==========================================================
   EFECTO DEL MENSAJE PRINCIPAL
========================================================== */

if (volverMensaje) {

    volverMensaje.addEventListener(
        "pointerdown",
        () => {

            volverMensaje.style.transform =
                "scale(0.99)";

        }
    );


    volverMensaje.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                volverMensaje.style.transform = "";

            }, 140);

        }
    );


    volverMensaje.addEventListener(
        "pointercancel",
        () => {

            volverMensaje.style.transform = "";

        }
    );

}


/* ==========================================================
   VIBRACIÓN SUAVE EN CELULAR
========================================================== */

if (volverCorazon) {

    volverCorazon.addEventListener(
        "click",
        () => {

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(25);

            }

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Sección 'Si pudiera volver a empezar' cargada ❤️"
);


/* ==========================================================
   MOMENTOS QUE QUEDARON EN VIDEO 🎬❤️
========================================================== */

const videosEncabezado =
    document.querySelector(".videos-encabezado");

const videosTarjetas =
    document.querySelectorAll(".video-tarjeta");

const videosMensaje =
    document.querySelector(".videos-mensaje");

const videosCierre =
    document.querySelector(".videos-cierre");

const videosReales =
    document.querySelectorAll(".video-marco video");


/* ==========================================================
   ANIMACIÓN AL HACER SCROLL
========================================================== */

const elementosVideos = [
    videosEncabezado,
    ...videosTarjetas,
    videosMensaje,
    videosCierre
].filter(Boolean);


elementosVideos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(45px)";

    elemento.style.transition =
        "opacity 0.85s ease, transform 0.85s ease";

});


if ("IntersectionObserver" in window) {

    const observadorVideos =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                        observadorVideos.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosVideos.forEach((elemento) => {

        observadorVideos.observe(elemento);

    });

}


else {

    elementosVideos.forEach((elemento) => {

        elemento.style.opacity = "1";

        elemento.style.transform = "none";

    });

}

/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    `${videosReales.length} videos cargados correctamente 🎬❤️`
);


/* ==========================================================
   SOLO UN VIDEO REPRODUCIÉNDOSE A LA VEZ 🎬
========================================================== */

videosReales.forEach((videoActual) => {

    videoActual.addEventListener("play", () => {

        videosReales.forEach((otroVideo) => {

            if (otroVideo !== videoActual) {

                otroVideo.pause();

            }

        });

    });

});


/* ==========================================================
   VISOR GRANDE DE VIDEOS 🎬❤️
   MOVER EL MISMO VIDEO AL VISOR
========================================================== */

const videoGrande =
    document.getElementById("videoGrande");

const videoGrandeFondo =
    document.getElementById("videoGrandeFondo");

const videoGrandeCerrar =
    document.getElementById("videoGrandeCerrar");

const videoGrandeReproductor =
    document.getElementById("videoGrandeReproductor");

const videoGrandeNumero =
    document.getElementById("videoGrandeNumero");

const videoGrandeTitulo =
    document.getElementById("videoGrandeTitulo");

const videoGrandeTexto =
    document.getElementById("videoGrandeTexto");


/* ==========================================================
   VARIABLES DE CONTROL
========================================================== */

let videoActualmenteAbierto = null;
let lugarOriginalVideo = null;


/* ==========================================================
   ABRIR VISOR
========================================================== */

function abrirVideoGrande(tarjeta) {

    if (
        !tarjeta ||
        !videoGrande ||
        !videoGrandeReproductor
    ) {
        return;
    }


    const video =
        tarjeta.querySelector(".video-marco video");


    if (!video) {
        return;
    }


    /* ======================================================
       INFORMACIÓN DEL VIDEO
    ====================================================== */

    const numero =
        tarjeta.querySelector(".video-info > span");

    const titulo =
        tarjeta.querySelector(".video-info h3");

    const texto =
        tarjeta.querySelector(".video-info p");


    if (videoGrandeNumero) {

        videoGrandeNumero.textContent =
            numero
                ? numero.textContent.trim()
                : "NUESTRO MOMENTO";

    }


    if (videoGrandeTitulo) {

        videoGrandeTitulo.textContent =
            titulo
                ? titulo.textContent.trim()
                : "Un recuerdo especial";

    }


    if (videoGrandeTexto) {

        videoGrandeTexto.textContent =
            texto
                ? texto.textContent.trim()
                : "Un momento de nuestra historia.";

    }


    /* ======================================================
       PAUSAR LOS OTROS VIDEOS
    ====================================================== */

    videosReales.forEach((otroVideo) => {

        if (otroVideo !== video) {

            otroVideo.pause();

        }

    });


    /* ======================================================
       GUARDAR POSICIÓN ORIGINAL
    ====================================================== */

    lugarOriginalVideo = {
        padre: video.parentNode,
        siguiente: video.nextSibling
    };


    videoActualmenteAbierto = video;


    /* ======================================================
       MOVER EL MISMO VIDEO AL VISOR
    ====================================================== */

    videoGrandeReproductor.appendChild(video);


    /* ======================================================
       MOSTRAR CONTROLES
    ====================================================== */

    video.controls = true;


    /* ======================================================
       MOSTRAR VISOR
    ====================================================== */

    videoGrande.classList.add("mostrar");

    videoGrande.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       Bloqueamos el fondo solamente después
       de comprobar que el visor existe.
    */

    document.body.style.overflow = "hidden";


    /* ======================================================
       REPRODUCIR
    ====================================================== */

    const reproduccion = video.play();


    if (
        reproduccion &&
        typeof reproduccion.catch === "function"
    ) {

        reproduccion.catch(() => {

            /*
               Si el navegador no inicia automáticamente,
               los controles siguen disponibles.
            */

        });

    }

}


/* ==========================================================
   CERRAR VISOR
========================================================== */

function cerrarVideoGrande() {

    if (!videoGrande) {
        return;
    }


    /* ======================================================
       PAUSAR
    ====================================================== */

    if (videoActualmenteAbierto) {

        videoActualmenteAbierto.pause();

    }


    /* ======================================================
       DEVOLVER VIDEO A SU POSICIÓN ORIGINAL
    ====================================================== */

    if (
        videoActualmenteAbierto &&
        lugarOriginalVideo &&
        lugarOriginalVideo.padre
    ) {

        if (
            lugarOriginalVideo.siguiente &&
            lugarOriginalVideo.siguiente.parentNode ===
            lugarOriginalVideo.padre
        ) {

            lugarOriginalVideo.padre.insertBefore(
                videoActualmenteAbierto,
                lugarOriginalVideo.siguiente
            );

        }

        else {

            lugarOriginalVideo.padre.appendChild(
                videoActualmenteAbierto
            );

        }

    }


    /* ======================================================
       OCULTAR VISOR
    ====================================================== */

    videoGrande.classList.remove("mostrar");

    videoGrande.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";


    videoActualmenteAbierto = null;
    lugarOriginalVideo = null;

}


/* ==========================================================
   ABRIR AL HACER CLIC EN EL VIDEO
========================================================== */

videosTarjetas.forEach((tarjeta) => {

    const video =
        tarjeta.querySelector(".video-marco video");


    if (!video) {
        return;
    }


    /*
       Cuando el video todavía está en su tarjeta,
       un clic sobre él abre el visor.

       Cuando ya está dentro del visor, dejamos
       funcionar normalmente sus controles.
    */

    video.addEventListener(
        "click",
        (evento) => {

            if (
                videoActualmenteAbierto === video
            ) {
                return;
            }


            evento.preventDefault();

            abrirVideoGrande(tarjeta);

        }
    );

});


/* ==========================================================
   BOTÓN X
========================================================== */

if (videoGrandeCerrar) {

    videoGrandeCerrar.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();

            cerrarVideoGrande();

        }
    );

}


/* ==========================================================
   CLIC EN EL FONDO OSCURO
========================================================== */

if (videoGrandeFondo) {

    videoGrandeFondo.addEventListener(
        "click",
        cerrarVideoGrande
    );

}


/* ==========================================================
   TECLA ESC
========================================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            videoGrande &&
            videoGrande.classList.contains("mostrar")
        ) {

            cerrarVideoGrande();

        }

    }
);


/* ==========================================================
   SEGURIDAD AL CAMBIAR DE PESTAÑA
========================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            videoActualmenteAbierto
        ) {

            videoActualmenteAbierto.pause();

        }

    }
);


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Visor grande de videos preparado 🎬❤️"
);


/* ==========================================================
   Y ESTO APENAS CONTINÚA... ✨❤️
   ANIMACIONES AL HACER SCROLL
========================================================== */

const continuaEncabezado =
    document.querySelector(".continua-encabezado");

const continuaTiempo =
    document.querySelector(".continua-tiempo");

const continuaMensaje =
    document.querySelector(".continua-mensaje");

const continuaFrase =
    document.querySelector(".continua-frase");

const continuaFechas =
    document.querySelector(".continua-final-fechas");

const continuaCierre =
    document.querySelector(".continua-cierre");


/* ==========================================================
   ELEMENTOS QUE SE ANIMARÁN
========================================================== */

const elementosContinua = [
    continuaEncabezado,
    continuaTiempo,
    continuaMensaje,
    continuaFrase,
    continuaFechas,
    continuaCierre
].filter(Boolean);


/* ==========================================================
   ESTADO INICIAL
========================================================== */

elementosContinua.forEach((elemento) => {

    elemento.style.opacity = "0";

});


/* ==========================================================
   APARECER AL HACER SCROLL
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorContinua =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (!entrada.isIntersecting) {
                        return;
                    }


                    const elemento =
                        entrada.target;


                    elemento.style.opacity = "1";


                    if (
                        typeof elemento.animate === "function"
                    ) {

                        elemento.animate(
                            [
                                {
                                    opacity: 0,
                                    transform: "translateY(40px)"
                                },
                                {
                                    opacity: 1,
                                    transform: "translateY(0)"
                                }
                            ],
                            {
                                duration: 850,
                                easing: "ease-out"
                            }
                        );

                    }


                    observadorContinua.unobserve(
                        elemento
                    );

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosContinua.forEach((elemento) => {

        observadorContinua.observe(
            elemento
        );

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosContinua.forEach((elemento) => {

        elemento.style.opacity = "1";

    });

}


/* ==========================================================
   EFECTO ESPECIAL EN "CONTINUARÁ..."
========================================================== */

const continuaContinuara =
    document.querySelector(".continua-continuara");


if (continuaContinuara) {

    continuaContinuara.addEventListener(
        "pointerdown",
        () => {

            continuaContinuara.style.transform =
                "scale(0.96)";

        }
    );


    continuaContinuara.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                continuaContinuara.style.transform = "";

            }, 130);

        }
    );


    continuaContinuara.addEventListener(
        "pointercancel",
        () => {

            continuaContinuara.style.transform = "";

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Sección 'Y esto apenas continúa...' cargada ✨❤️"
);


/* ==========================================================
   CIERRE FINAL DE NUESTRA HISTORIA ❤️
   ANIMACIONES
========================================================== */

const finalEstrellas =
    document.querySelector(".final-estrellas");

const finalEtiqueta =
    document.querySelector(".final-etiqueta");

const finalTitulo =
    document.querySelector(".final-titulo");

const finalNombres =
    document.querySelector(".final-nombres");

const finalFechas =
    document.querySelector(".final-fechas");

const finalMensaje =
    document.querySelector(".final-mensaje");

const finalCorazon =
    document.querySelector(".final-corazon-principal");

const finalAniversario =
    document.querySelector(".final-aniversario");

const finalFirma =
    document.querySelector(".final-firma");

const finalUltimo =
    document.querySelector(".final-ultimo");


/* ==========================================================
   ELEMENTOS QUE APARECERÁN AL HACER SCROLL
========================================================== */

const elementosFinal = [
    finalEstrellas,
    finalEtiqueta,
    finalTitulo,
    finalNombres,
    finalFechas,
    finalMensaje,
    finalCorazon,
    finalAniversario,
    finalFirma,
    finalUltimo
].filter(Boolean);


/* ==========================================================
   ESTADO INICIAL
========================================================== */

elementosFinal.forEach((elemento) => {

    elemento.style.opacity = "0";

});


/* ==========================================================
   ANIMACIÓN AL ENTRAR EN PANTALLA
========================================================== */

if ("IntersectionObserver" in window) {

    const observadorFinal =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (!entrada.isIntersecting) {
                        return;
                    }


                    const elemento =
                        entrada.target;


                    elemento.style.opacity = "1";


                    if (
                        typeof elemento.animate === "function"
                    ) {

                        elemento.animate(
                            [
                                {
                                    opacity: 0,
                                    transform:
                                        "translateY(35px)"
                                },

                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],

                            {
                                duration: 900,
                                easing:
                                    "cubic-bezier(0.22, 1, 0.36, 1)"
                            }
                        );

                    }


                    observadorFinal.unobserve(
                        elemento
                    );

                });

            },

            {
                threshold: 0.12
            }

        );


    elementosFinal.forEach((elemento) => {

        observadorFinal.observe(
            elemento
        );

    });

}


/* ==========================================================
   RESPALDO PARA NAVEGADORES ANTIGUOS
========================================================== */

else {

    elementosFinal.forEach((elemento) => {

        elemento.style.opacity = "1";

    });

}


/* ==========================================================
   EFECTO AL TOCAR EL CORAZÓN CENTRAL
========================================================== */

const finalCorazonCirculo =
    document.querySelector(
        ".final-corazon-circulo"
    );


if (finalCorazonCirculo) {

    finalCorazonCirculo.addEventListener(
        "click",
        () => {

            if (
                typeof finalCorazonCirculo.animate ===
                "function"
            ) {

                finalCorazonCirculo.animate(
                    [
                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.22)"
                        },

                        {
                            transform:
                                "scale(0.95)"
                        },

                        {
                            transform:
                                "scale(1.10)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }
                    ],

                    {
                        duration: 650,
                        easing: "ease-out"
                    }
                );

            }


            /* Vibración suave solamente en celular */

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(30);

            }

        }
    );

}


/* ==========================================================
   EFECTO ESPECIAL EN FELIZ 2.º ANIVERSARIO
========================================================== */

if (finalAniversario) {

    finalAniversario.addEventListener(
        "pointerdown",
        () => {

            finalAniversario.style.transform =
                "scale(0.99)";

        }
    );


    finalAniversario.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                finalAniversario.style.transform = "";

            }, 130);

        }
    );


    finalAniversario.addEventListener(
        "pointercancel",
        () => {

            finalAniversario.style.transform = "";

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Cierre final de nuestros 2 años cargado ❤️✨"
);


/* ==========================================================
   FONDO ROMÁNTICO DE LA PORTADA ❤️🌸✨
   APARICIÓN PROGRESIVA
========================================================== */

const fondoRomantico =
    document.getElementById("fondoRomantico");

const decoracionesRomanticas =
    document.querySelectorAll(
        "#fondoRomantico .decoracion"
    );


/* ==========================================================
   MOSTRAR DECORACIONES POCO A POCO
========================================================== */

if (
    fondoRomantico &&
    decoracionesRomanticas.length > 0
) {

    decoracionesRomanticas.forEach(
        (decoracion, indice) => {

            /*
                Cada elemento aparecerá
                un poco después del anterior.
            */

            const retraso =
                250 + (indice * 140);


            setTimeout(() => {

                decoracion.style.transition =
                    "opacity 1.2s ease";

                decoracion.style.opacity =
                    decoracion.classList.contains("petalo")
                        ? "0.65"
                        : "0.88";

            }, retraso);

        }
    );

}


/* ==========================================================
   PEQUEÑO EFECTO DE ENTRADA DEL FONDO
========================================================== */

if (fondoRomantico) {

    fondoRomantico.animate(
        [
            {
                opacity: 0
            },

            {
                opacity: 1
            }
        ],

        {
            duration: 1200,
            easing: "ease-out"
        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    `${decoracionesRomanticas.length} decoraciones románticas cargadas ❤️🌸✨`
);


/* ==========================================================
   CORAZONES FLOTANDO POR TODA LA PÁGINA ❤️
========================================================== */

const capaCorazonesGlobales =
    document.createElement("div");

capaCorazonesGlobales.className =
    "corazones-globales";

capaCorazonesGlobales.setAttribute(
    "aria-hidden",
    "true"
);

document.body.appendChild(
    capaCorazonesGlobales
);


/* ==========================================================
   TIPOS DE CORAZONES
========================================================== */

const corazonesDisponibles = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💞"
];


/* ==========================================================
   CREAR UN CORAZÓN
========================================================== */

function crearCorazonGlobal() {

    if (!capaCorazonesGlobales) {
        return;
    }


    const corazon =
        document.createElement("span");


    corazon.className =
        "corazon-global";


    /* CORAZÓN ALEATORIO */

    const tipoCorazon =
        corazonesDisponibles[
            Math.floor(
                Math.random() *
                corazonesDisponibles.length
            )
        ];

    corazon.textContent =
        tipoCorazon;


    /* POSICIÓN HORIZONTAL */

    const posicion =
        Math.random() * 96;

    corazon.style.left =
        `${posicion}%`;


    /* TAMAÑO */

    const tamano =
        16 + Math.random() * 24;

    corazon.style.fontSize =
        `${tamano}px`;


    /* DURACIÓN */

    const duracion =
        9 + Math.random() * 7;

    corazon.style.setProperty(
        "--duracion",
        `${duracion}s`
    );


    /* MOVIMIENTO LATERAL */

    const movimiento =
        -45 + Math.random() * 90;

    corazon.style.setProperty(
        "--movimiento",
        `${movimiento}px`
    );


    /* ROTACIÓN */

    const rotacion =
        -20 + Math.random() * 40;

    corazon.style.setProperty(
        "--rotacion",
        `${rotacion}deg`
    );


    /* OPACIDAD */

    const opacidad =
        0.28 + Math.random() * 0.35;

    corazon.style.setProperty(
        "--opacidad",
        opacidad
    );


    /* AGREGAR A LA PÁGINA */

    capaCorazonesGlobales.appendChild(
        corazon
    );


    /* ELIMINAR CUANDO TERMINE */

    setTimeout(
        () => {

            corazon.remove();

        },

        (duracion + 1) * 1000
    );

}


/* ==========================================================
   CREAR LOS PRIMEROS CORAZONES POCO A POCO
========================================================== */

for (let i = 0; i < 6; i++) {

    setTimeout(
        crearCorazonGlobal,
        i * 700
    );

}


/* ==========================================================
   CONTINUAR CREANDO CORAZONES
========================================================== */

const intervaloCorazones =
    setInterval(
        () => {

            /*
                Evitamos llenar demasiado la pantalla.
            */

            const cantidadActual =
                capaCorazonesGlobales
                    .querySelectorAll(
                        ".corazon-global"
                    )
                    .length;


            if (cantidadActual < 12) {

                crearCorazonGlobal();

            }

        },

        1100
    );


/* ==========================================================
   PAUSAR CREACIÓN SI CAMBIAS DE PESTAÑA
========================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            capaCorazonesGlobales
                .querySelectorAll(
                    ".corazon-global"
                )
                .forEach(
                    (corazon) => {

                        corazon.remove();

                    }
                );

        }

    }
);


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Corazones flotantes globales funcionando ❤️💕"
);


/* ==========================================================
   SORPRESA FINAL 🎁❤️
========================================================== */

const botonSorpresaFinal =
    document.getElementById("botonSorpresaFinal");

const contenidoSorpresaFinal =
    document.getElementById("contenidoSorpresaFinal");

const regaloSorpresa =
    document.querySelector(".sorpresa-regalo");


/* ==========================================================
   CREAR EXPLOSIÓN DE CORAZONES, FLORES Y DESTELLOS
========================================================== */

function crearExplosionSorpresa() {

    const elementos = [
        "❤️",
        "💕",
        "🌸",
        "✨",
        "💗",
        "🌷",
        "💖"
    ];


    for (let i = 0; i < 24; i++) {

        const particula =
            document.createElement("span");


        particula.textContent =
            elementos[
                Math.floor(
                    Math.random() *
                    elementos.length
                )
            ];


        particula.style.position =
            "fixed";

        particula.style.left =
            "50%";

        particula.style.top =
            "50%";

        particula.style.zIndex =
            "20000";

        particula.style.pointerEvents =
            "none";

        particula.style.userSelect =
            "none";


        /* TAMAÑO */

        const tamano =
            18 + Math.random() * 24;

        particula.style.fontSize =
            `${tamano}px`;


        document.body.appendChild(
            particula
        );


        /* DIRECCIÓN ALEATORIA */

        const angulo =
            Math.random() *
            Math.PI *
            2;

        const distancia =
            120 +
            Math.random() *
            260;

        const x =
            Math.cos(angulo) *
            distancia;

        const y =
            Math.sin(angulo) *
            distancia;


        /* ANIMACIÓN */

        const animacion =
            particula.animate(

                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(0.3)",

                        opacity: 0
                    },

                    {
                        transform:
                            "translate(-50%, -50%) scale(1.15)",

                        opacity: 1,

                        offset: 0.18
                    },

                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            rotate(${Math.random() * 180 - 90}deg)
                            scale(0.8)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        1200 +
                        Math.random() *
                        700,

                    easing:
                        "cubic-bezier(0.16, 1, 0.3, 1)"
                }

            );


        animacion.onfinish =
            () => {

                particula.remove();

            };

    }

}


/* ==========================================================
   ABRIR LA SORPRESA
========================================================== */

if (
    botonSorpresaFinal &&
    contenidoSorpresaFinal
) {

    botonSorpresaFinal.addEventListener(
        "click",
        () => {

            /*
                Evitar doble clic.
            */

            botonSorpresaFinal.disabled =
                true;


            /* VIBRACIÓN SUAVE EN CELULAR */

            if (
                "vibrate" in navigator &&
                window.innerWidth <= 768
            ) {

                navigator.vibrate(40);

            }


            /*
                Desaparecer regalo y botón.
            */

            botonSorpresaFinal.classList.add(
                "sorpresa-boton-oculto"
            );


            if (regaloSorpresa) {

                regaloSorpresa.classList.add(
                    "sorpresa-regalo-oculto"
                );

            }


            /*
                Explosión decorativa.
            */

            crearExplosionSorpresa();


            /*
                Revelar contenido.
            */

            setTimeout(
                () => {

                    botonSorpresaFinal.style.display =
                        "none";


                    if (regaloSorpresa) {

                        regaloSorpresa.style.display =
                            "none";

                    }


                    contenidoSorpresaFinal.classList.add(
                        "sorpresa-mostrar"
                    );


                    contenidoSorpresaFinal.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    /*
                        Desplazamiento suave hacia
                        la sorpresa revelada.
                    */

                    setTimeout(
                        () => {

                            contenidoSorpresaFinal
                                .scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "center"

                                });

                        },

                        250
                    );

                },

                650
            );

        }
    );

}


/* ==========================================================
   CONFIRMACIÓN
========================================================== */

console.log(
    "Sorpresa final preparada 🎁❤️"
);


/* ==========================================================
   MÚSICA PRINCIPAL ❤️🎵
   COMENZAR AL ABRIR LA PÁGINA
========================================================== */

const musicaPrincipal =
    document.getElementById("musicaPrincipal");

if (botonComenzar && musicaPrincipal) {

    botonComenzar.addEventListener("click", () => {

        musicaPrincipal.volume = 0.45;

        musicaPrincipal.play().catch((error) => {

            console.log(
                "El navegador no pudo iniciar la música:",
                error
            );

        });

    });

}

console.log("Música principal preparada 🎵❤️");


/* ==========================================================
   COORDINAR MÚSICA PRINCIPAL CON LOS VIDEOS 🎵🎬
========================================================== */

const todosLosVideos =
    document.querySelectorAll("video");


todosLosVideos.forEach((video) => {

    /* Cuando comienza un video */
    video.addEventListener("play", () => {

        if (
            musicaPrincipal &&
            !musicaPrincipal.paused
        ) {

            musicaPrincipal.pause();

        }

    });


    /* Cuando termina el video */
    video.addEventListener("ended", () => {

        if (musicaPrincipal) {

            musicaPrincipal.play().catch(() => {});

        }

    });

});


/* ==========================================================
   REANUDAR MÚSICA AL CERRAR EL VISOR DE VIDEO 🎵❤️
========================================================== */

const visorVideoPrincipal =
    document.getElementById("videoGrande");

if (visorVideoPrincipal) {

    const observarCierreVideo =
        new MutationObserver(() => {

            const estaAbierto =
                visorVideoPrincipal.classList.contains("mostrar");

            if (!estaAbierto && musicaPrincipal) {

                const algunVideoReproduciendo =
                    Array.from(
                        document.querySelectorAll("video")
                    ).some((video) => !video.paused);

                if (!algunVideoReproduciendo) {

                    musicaPrincipal
                        .play()
                        .catch(() => {});

                }

            }

        });

    observarCierreVideo.observe(
        visorVideoPrincipal,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

}

console.log(
    "Reanudación de música al cerrar videos preparada 🎵❤️"
);


/* ==========================================================
   CONTROL FLOTANTE DE MÚSICA 🎵❤️
========================================================== */

const controlMusica =
    document.getElementById("controlMusica");

const controlMusicaIcono =
    document.getElementById("controlMusicaIcono");


function actualizarControlMusica() {

    if (!musicaPrincipal || !controlMusica) {
        return;
    }

    if (musicaPrincipal.paused) {

        controlMusica.classList.add("pausada");

        if (controlMusicaIcono) {
            controlMusicaIcono.textContent = "▶️";
        }

        controlMusica.setAttribute(
            "aria-label",
            "Reproducir música"
        );

        controlMusica.title = "Reproducir música";

    } else {

        controlMusica.classList.remove("pausada");

        if (controlMusicaIcono) {
            controlMusicaIcono.textContent = "🎵";
        }

        controlMusica.setAttribute(
            "aria-label",
            "Pausar música"
        );

        controlMusica.title = "Pausar música";

    }

}


/* ==========================================================
   BOTÓN PAUSAR / REPRODUCIR
========================================================== */

if (controlMusica && musicaPrincipal) {

    controlMusica.addEventListener("click", () => {

        if (musicaPrincipal.paused) {

            musicaPrincipal
                .play()
                .catch(() => {});

        } else {

            musicaPrincipal.pause();

        }

    });


    /* Mantener el botón sincronizado */

    musicaPrincipal.addEventListener(
        "play",
        actualizarControlMusica
    );

    musicaPrincipal.addEventListener(
        "pause",
        actualizarControlMusica
    );

    actualizarControlMusica();

}


console.log(
    "Control flotante de música funcionando 🎵❤️"
);


/* ==========================================================
   ABRIR CARTA SORPRESA 💌❤️
========================================================== */

const botonAbrirCarta =
    document.getElementById("abrirCarta");

const cartaPresentacion =
    document.getElementById("cartaPresentacion");

const cartaContenedor =
    document.querySelector(
        "#unaCartaParaTi .carta-contenido"
    );


/* ==========================================================
   ABRIR LA CARTA
========================================================== */

if (botonAbrirCarta && cartaContenedor) {

    botonAbrirCarta.addEventListener("click", () => {

        /* Pequeña vibración en celular */

        if (
            "vibrate" in navigator &&
            window.innerWidth <= 768
        ) {
            navigator.vibrate(35);
        }


        /* Animar la presentación antes de ocultarla */

        if (
            cartaPresentacion &&
            typeof cartaPresentacion.animate === "function"
        ) {

            const animacionSalida =
                cartaPresentacion.animate(
                    [
                        {
                            opacity: 1,
                            transform: "scale(1)"
                        },
                        {
                            opacity: 0,
                            transform: "scale(0.96)"
                        }
                    ],
                    {
                        duration: 450,
                        easing: "ease-in"
                    }
                );


            animacionSalida.onfinish = () => {

                mostrarCarta();

            };

        } else {

            mostrarCarta();

        }

    });

}


/* ==========================================================
   MOSTRAR CONTENIDO DE LA CARTA
========================================================== */

function mostrarCarta() {

    if (!cartaContenedor) {
        return;
    }


    /* Activar el estado abierto */

    cartaContenedor.classList.add(
        "carta-abierta"
    );


    const encabezadoCarta =
        cartaContenedor.querySelector(
            ".carta-encabezado"
        );

    const papelCarta =
        cartaContenedor.querySelector(
            ".carta-papel"
        );


    /* Animación del encabezado */

    if (
        encabezadoCarta &&
        typeof encabezadoCarta.animate === "function"
    ) {

        encabezadoCarta.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(25px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );

    }


    /* Animación de la carta */

    if (
        papelCarta &&
        typeof papelCarta.animate === "function"
    ) {

        papelCarta.animate(
            [
                {
                    opacity: 0,
                    transform:
                        "translateY(45px) scale(0.97)"
                },
                {
                    opacity: 1,
                    transform:
                        "translateY(0) scale(1)"
                }
            ],
            {
                duration: 900,
                easing:
                    "cubic-bezier(0.22, 1, 0.36, 1)"
            }
        );

    }


    /* Llevar suavemente al comienzo de la carta */

    setTimeout(() => {

        const destino =
            encabezadoCarta || papelCarta;

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 250);

}


console.log(
    "Carta sorpresa preparada 💌❤️"
);


/* ==========================================================
   REGISTRAR SERVICE WORKER
   APP NUESTROS 2 AÑOS ❤️📱
========================================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./service-worker.js")
            .then((registro) => {

                console.log(
                    "Aplicación preparada correctamente ❤️📱"
                );

                console.log(
                    "Service Worker:",
                    registro.scope
                );

            })
            .catch((error) => {

                console.error(
                    "No se pudo registrar el Service Worker:",
                    error
                );

            });

    });

}