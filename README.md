
# bodegas

```http
  GET /api/bodegas
```
- obtiene todas la bodegas ordenadas por orden ascendente

```http
  POST /api/bodegas
```
- guarda una bodega
  ```JSON
    {
      "nombre": "string",
      "id_responsable":2,
      "estado" : 1
    }
  ```

# products

```http
  GET /api/products
```

- obtiene total de productos por cada tipo ordenados por cantidad ascendentemente

```http
  POST /api/products
```

- crea un producto y lo agrega a una bodega con una cantidad inicial 

  ```JSON
    {
      "id_bodega": 1,
      "producto": {
        "nombre": 23,
        "cantidad": 23
      },
      "cantidad": 23
    }
  ```

```http
  POST /api/products/:idProduct/bodegas/:idBodega
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idProduct`      | `int` | **Required**.para saber a que producto guardar |
| `idBodega` | `int` | **Required**. para saber a que bodega guardar

- insertar registros en la tabla de
inventarios, los parámetros de entrada deben ser
(id_producto,id_bodega,cantidad).

  en el body:
    ```JSON
      {
        "cantidad": 23
      }
    ```


# inventarios

```http
  POST /api/inventarios/translado
```


```JSON
{ 
  "cantidad": 0,
  "idProducto": 1, 
  "idOrigen": 11, 
  "idDestino": 14
}
```

