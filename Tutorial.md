# Install ionic in ubuntu

## Install Node.JS

Primero vamos a la pagina oficial de Node.Js https://nodejs.org/en/. y descargamos la versión que nos recomienda la pagina(la de la izquierda).
una ves descargada la instalaremos en la terminal con los comandos que podemos encontrar en el siguiente repositorio -> https://github.com/nodesource/distributions/blob/master/README.md
en mi caso yo descarge la versión 10.13 por lo que debo tirar los siguientes comandos:
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	sudo apt-get install -y nodejs

una ves echo esto ya tendremos instalado Node.JS en nuestra maquina
## Install Apache Cordova

Para instalar apache cordova en nuestra maquina debemos debemos tirar el siguiente comando en nuestra terminal:

$ sudo npm install -g cordova

cualquier inconveniente fijarse en la pagina oficial de apache cordova: https://cordova.apache.org/

## install ionic

Una vez instalado Node y Apache cordova prosedemos a instalar ionic con el siguiente comando:

$ sudo npm install -g ionic 

## Start Project


1.  Crear nuestra aplicación desde la terminal.Nos ubicamos en la carpeta donde queremos crear nuestro proyecto e ingresamos lo siguiente: (Ionic start “Nombre del Proyecto”).
    
    Ionic también proporciona las siguientes plantillas oficiales:
    

-   `tabs` : un diseño simple de 3 pestañas
    
-   `sidemenu`: un diseño con un menú deslizable en el lateral
    
-   `blank`: un arranque simple con una sola página
    
-   `super`: proyecto inicial con más de 14 diseños de página listos para usar
    
-   `tutorial`: un proyecto de inicio guiado
    

Si no especifica una plantilla al inicio, se le pedirá que elija una.

## Run Project

Para ejecutar el proyecto desde la terminal deberas escribir el siguiente comando:

“inoic serve”

Tambien podes escribir el siguiente comando para ver como se veria la app en los 3 Sistemas Operativos “ionic serve –lab”
