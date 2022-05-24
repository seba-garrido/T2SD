# Tarea N°1 Sistemas Distribuidos 2022

Integrantes:


Sebastian Garrido
Jorge Fernández



Instrucciones de ejecución:
(Esto faltaría llenar, por si puedes men)



Preguntas:


1. ¿Por qué Kafka funciona bien en este escenario?

Porque apache kafka es un sistema que permite el manejo de peticiones, esto se debe más que nada porque almacena los datos y procesa sus respectivos flujos, además al trabajar con zookeeper este permite la sincronización de los procesos. Por lo tanto, bajo este escenario funciona bien, ya que al tener un sistema de login (autenticación) y un servicio de seguridad, se pueden trabajar de mejor manera las peticiones realizadas por los usuarios al momento de iniciar sesión por ejemplo, además de permitir un mejor análisis de dichos datos y poder efectuar la seguridad en el caso de por ejemplo realizar bloqueos a usuarios. También la comunicación entre el login y el sistema de seguridad se efectúa de mejor manera al utilizar Kafka topic el cual permite que esta sea fluida.


2. Basado en las tecnologías que usted tiene a su disposición (Kafka, backend) ¿Qué haría usted para manejar una gran cantidad de usuarios al mismo tiempo?

Para poder manejar de mejor manera una gran cantidad de usuario realizaría varias particiones, ya que particionar es el principal mecanismo de concurrencia en kafka, además, al realizar esto permite escalar las cargas de los consumidores (usuarios) y productores (el sistema). Además, permite paralelizar los procesos distribuyendo los datos a múltiples particiones y almacenarlos en diferentes intermediarios, lo que hace que varios usuarios puedan efectuar procesos de forma paralela. 

