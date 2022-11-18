/* EFECTO AL HACER SCROLL - EFECTO AL HACER SCROLL */

$(document).ready(function () {

    $(window).scroll(function () {
        // animacion menu fijado y sombra
        if (this.scrollY > 20) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    })
});

/* MENSAJE DE ERRROR - MENSAJE DE ERROR*/

$(document).ready(function () {

    $('#btnSend').click(function () {

        var errores = '';

        if ($('#names').val() == '') { // Validado Nombre
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#ff8174")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }
        
        if ($('#email').val() == '') { // Validado Correo
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#ff8174")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#mensaje').val() == '') { // Validado Mensaje
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#ff8174")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        if (errores == '' == false) { // ENVIANDO MENSAJE
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL
        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });
    });

});

/* VALIDACION FINALIZAR COMPRA */

let realizar_pedido = document.getElementById('realizar_pedido');

class Cliente {
    constructor(C_nombre, C_apellido, C_empresa, C_direccion_calle, C_localidad, C_provincia, C_codigo_postal, C_telefono, C_correo, C_mensaje) {

        this.nombre = C_nombre;
        this.nombre_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, con/sin acentos.

        this.apellido = C_apellido;
        this.apellido_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, con/sin acentos.
 
        this.empresa = C_empresa;
        this.empresa_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        this.direccion_calle = C_direccion_calle;
        this.direccion_calle_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        this.localidad = C_localidad;
        this.localidad_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        this.provincia = C_provincia;
        this.provincia_exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        this.codigo_postal = C_codigo_postal;
        this.codigo_postal_exp = /^[a-zA-Z0-9\-]{5}$/;

        this.telefono = C_telefono;
        this.telefono_exp = /^\d{7,14}$/;

        this.correo = C_correo;
        this.correo_exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // '@' y el '.' OBLIGATORIO

        this.mensaje=C_mensaje;

    }

    valida_nombre() {
        if (!this.nombre_exp.test(this.nombre)) {
            document.getElementById("nombre").classList.remove('borde-correcto');
            document.getElementById("nombre").classList.add('borde-incorrecto');
            return "nombre inválido";
        } else {
            document.getElementById("nombre").classList.remove('borde-incorrecto');
            document.getElementById("nombre").classList.add('borde-correcto');
            return this.nombre;
        }
    };

    valida_apellido() {
        if (!this.apellido_exp.test(this.apellido)) {
            document.getElementById("apellido").classList.remove('borde-correcto');
            document.getElementById("apellido").classList.add('borde-incorrecto');
            return "apellido inválido";
        } else {
            document.getElementById("apellido").classList.remove('borde-incorrecto');
            document.getElementById("apellido").classList.add('borde-correcto');
            return this.apellido;
        }
    };

    valida_empresa() {
            return this.empresa;
    };

    valida_direccion_calle() {
        if (!this.direccion_calle_exp.test(this.direccion_calle)) {
            document.getElementById("direccion_calle").classList.remove('borde-correcto');
            document.getElementById("direccion_calle").classList.add('borde-incorrecto');
            return "calle inválida";
        } else {
            document.getElementById("direccion_calle").classList.remove('borde-incorrecto');
            document.getElementById("direccion_calle").classList.add('borde-correcto');
            return this.direccion_calle;
        }
    };

    valida_localidad() {
        if (!this.localidad_exp.test(this.localidad)) {
            document.getElementById("localidad").classList.remove('borde-correcto');
            document.getElementById("localidad").classList.add('borde-incorrecto');
            return "localidad inválida";
        } else {
            document.getElementById("localidad").classList.remove('borde-incorrecto');
            document.getElementById("localidad").classList.add('borde-correcto');
            return this.localidad;
        }
    };

    valida_provincia() {
        if (!this.provincia_exp.test(this.provincia)) {
            document.getElementById("provincia").classList.remove('borde-correcto');
            document.getElementById("provincia").classList.add('borde-incorrecto');
            return "provincia inválida";
        } else {
            document.getElementById("provincia").classList.remove('borde-incorrecto');
            document.getElementById("provincia").classList.add('borde-correcto');
            return this.provincia;
        }
    };

    valida_codigo_postal() {
        if (!this.codigo_postal_exp.test(this.codigo_postal)) {
            document.getElementById("codigo_postal").classList.remove('borde-correcto');
            document.getElementById("codigo_postal").classList.add('borde-incorrecto');
            return "cod postal inválido";
        } else {
            document.getElementById("codigo_postal").classList.remove('borde-incorrecto');
            document.getElementById("codigo_postal").classList.add('borde-correcto');
            return this.codigo_postal;
        }
    };

    valida_telefono() {
        if (!this.telefono_exp.test(this.telefono)) {
            document.getElementById("telefono").classList.remove('borde-correcto');
            document.getElementById("telefono").classList.add('borde-incorrecto');
            return "telefono inválido";
        } else {
            document.getElementById("telefono").classList.remove('borde-incorrecto');
            document.getElementById("telefono").classList.add('borde-correcto');
            return this.telefono;
        }
    };

    valida_correo() {
        if (!this.correo_exp.test(this.correo)) {
            document.getElementById("correo").classList.remove('borde-correcto');
            document.getElementById("correo").classList.add('borde-incorrecto');
            return "correo inválido";
        } else {
            document.getElementById("correo").classList.remove('borde-incorrecto');
            document.getElementById("correo").classList.add('borde-correcto');
            return this.correo;
        }
    };

    valida_mensaje() {
            return this.mensaje;
    };

};

function respuesta_0() {

    let input_nombre = document.getElementById('nombre').value;
    let input_apellido = document.getElementById('apellido').value;
    let input_empresa = document.getElementById('empresa').value;
    let input_direccion_calle = document.getElementById('direccion_calle').value;
    let input_localidad = document.getElementById('localidad').value;
    let input_provincia = document.getElementById('provincia').value;
    let input_codigo_postal = document.getElementById('codigo_postal').value;
    let input_telefono = document.getElementById('telefono').value;
    let input_correo = document.getElementById('correo').value;
    let textarea = document.getElementById('textarea').value;

    const objCliente = new Cliente(input_nombre, input_apellido, input_empresa, input_direccion_calle, input_localidad, input_provincia, input_codigo_postal, input_telefono, input_correo, textarea);

    console.log(
        "\nNOMBRE: " + objCliente.valida_nombre()
        + "\nAPELLIDO: " + objCliente.valida_apellido()
        + "\nEMPRESA: " + objCliente.valida_empresa()
        + "\nDIRECCION/CALLE: " + objCliente.valida_direccion_calle()
        + "\nLOCALIDAD: " + objCliente.valida_localidad()
        + "\n\nPROVINCIA: " + objCliente.valida_provincia()
        + "\nCODIGO_POSTAL: " + objCliente.valida_codigo_postal()
        + "\nTELEFONO: " + objCliente.valida_telefono()
        + "\nCORREO: " + objCliente.valida_correo()
        + "\nMENSAJE: " + objCliente.valida_mensaje());
}

realizar_pedido.addEventListener('click', (e) => {
    e.preventDefault();
    respuesta_0();
});

