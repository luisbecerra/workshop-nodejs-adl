# Challenge 10
Se debe realizar lo siguiente: 
- instalar los siguientes paquetes usando npm ```axios rxjs axios-observable``` de tal manera que estos cambios se guarden automaticamente en el archivo package.json
- Usar la funcion pipe y map de (rxjs) para transformar la respuesta del servidor que maneja el observable, en el primer observable tomar unicamente el atributo tittle, en el segundo observable tomar el primer elemento del arreglo
- Llamar dos servicios al tiempo usando la funcion zip de rxjs
- Unir las respuestas de los servicios en un solo objeto usando destructuring
