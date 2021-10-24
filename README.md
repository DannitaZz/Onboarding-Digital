# HACKATHON BBVA 2021 - RETO ONBOARDING DIGITAL

* [Link a nuestra aplicación](https://dannitazz.github.io/Onboarding-Digital/src/index.html)

En la actualidad, el acceso fácil y eficaz a los servicios bancarios es una necesidad potencializada. En medio de una pandemia, encontrar este tipo de recursos se hizo más evidente y forzoso, ya que el acceso físico a las oficinas bancarias se ha visto drásticamente limitado. Y ahora, que estamos apostando por una reactivación económica, el BBVA quiere ayudar a las PYMES con el acceso a los servicios financieros de forma fácil, segura y usando la más avanzada tecnología.

Para ello hemos propuesto una web app en la que los usuarios pymes pueden abrir una cuenta de ahorros/corriente mediante la carga de archivos y autenticación de usuario vía e-mail, según la información existente en cámara de comercio y RUT.

Esta aplicación cuenta con 4 vistas intuitivas y de fácil manejo para permitir este proceso. En la primera vista el usuario encuentra el listado de los requisitos necesarios para la creación de su cuenta y accede por medio de un botón a la siguiente vista donde encontrará un formulario para llenar los datos del representante legal y la empresa respectivamente. Al enviar, en la pantalla se muestra un mensaje que le indica al usuario que revise la bandeja de entrada de la cuenta empresarial. A partir de este momento la app consulta la base de datos a la que el Banco tiene acceso con la información de Cámara de Comercio y DIAN. (En nuestro caso se hará uso de un mock de base de datos). Esta consulta extrae el email de la empresa y a este se envía un correo con link de verificación. El proceso de apertura continúa sólo si el link es accionado. Al accionar el link de verificación se redirige a la siguiente vista donde se solicitan datos complementarios y la carga de los documentos respectivos en formato PDF (RUT, cámara de comercio y cédula del representante). Por último, al enviar estos documentos se muestra un mensaje en pantalla donde se aclara que su solicitud fue enviada y recibirá respuesta en los próximos días hábiles por parte del banco. 

[Diseño en Figma](https://www.figma.com/file/t2RAgiP31excLVO7etF7i6/Onboarding?node-id=228%3A2)

La aplicación ONBOARDING DIGITAL se desarrollará con elementos de código(lenguajes) HTML5, JavaScript y CSS. El entorno de desarrollo se organizará acorde al administrador de dependencias npm, por ende es necesario tener dentro del entorno de desarrollo instalado node.js El proyecto tendrá como servidor de repositorio github el cual se administra mediante la tecnología de git, esto con el fin de poder facilitar el trabajo colaborativo y finalmente la aplicación será transpilada y compilada mediante comando automatizados por npm de tal manera que genere un artefacto optimizado para el despliegue en un servidor productivo. Para el proceso de despliegue se hará uso de la herramienta de integración continua github actions en el cual se ejecutarán las tareas necesarias para desplegar el artefacto generado de la compilación hacia github pages. Es una arquitectura Serverless proporcionada por Google Cloud Functions (Firebase).

## EQUIPO <PROTOLABORATORIANS>

Somos un equipo de mujeres amantes de la tecnología, actualmente cursamos el bootcamp de desarrollo front-end de Laboratoria Colombia, este proyecto se realizó para participar en la Hackathon del banco BBVA en donde escogimos el reto Onboarding digital con el fin de dar solución a la necesidad del banco de acercar sus productos a las empresas pymes y facilitar la creación de cuentas bancarias para las mismas.
