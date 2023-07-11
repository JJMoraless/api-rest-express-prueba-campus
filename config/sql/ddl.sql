
CREATE DATABASE db_inventario;
USE db_inventario;
DROP DATABASE db_inventario;
SHOW DATABASES;

SHOW TABLES;


/* -------------------------------------------------------------------------- */
/*                                  Productos                                 */
/* -------------------------------------------------------------------------- */

DROP TABLE productos;
CREATE TABLE `productos`(
    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255),
    `descripcion` VARCHAR(255),
    `estado` TINYINT(4),
    `created_by` BIGINT(20) UNSIGNED,
    `update_by` BIGINT(20) UNSIGNED,
    `created_at` TIMESTAMP DEFAULT(NOW()),
    `updated_at` TIMESTAMP,
    `deleted_at` TIMESTAMP 
);

DROP TABLE historiales;
CREATE TABLE `historiales`(
    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cantidad` INT,
    `id_bodega_origen` BIGINT(20) UNSIGNED,
    `id_bodega_destino` BIGINT(20) UNSIGNED,
    `id_inventario` BIGINT(20) UNSIGNED,
    `created_by` BIGINT(20) UNSIGNED,
    `update_by` BIGINT(20) UNSIGNED,
    `created_at` TIMESTAMP DEFAULT(NOW()),
    `updated_at` TIMESTAMP,
    `deleted_at` TIMESTAMP
);
DROP TABLE inventarios;
CREATE TABLE `inventarios`(
    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_bodega` BIGINT(20) UNSIGNED,
    `id_producto` BIGINT(20) UNSIGNED,
    `cantidad` INT,
    `created_by` BIGINT(20) UNSIGNED,
    `update_by` BIGINT(20) UNSIGNED,
    `created_at` TIMESTAMP DEFAULT(NOW()),
    `updated_at` TIMESTAMP,
    `deleted_at` TIMESTAMP,
    PRIMARY KEY(id )
);

DROP TABLE bodegas;
CREATE TABLE `bodegas`(
    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255),
    `id_responsable` BIGINT(20) UNSIGNED,
    `estado` TINYINT(4),
    `created_by` BIGINT(20) UNSIGNED,
    `update_by` BIGINT(20) UNSIGNED,
    `created_at` TIMESTAMP DEFAULT(NOW()),
    `updated_at` TIMESTAMP,
    `deleted_at` TIMESTAMP
);

DROP TABLE users;
CREATE TABLE `users`(
    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255),
    `email` VARCHAR(255) UNIQUE,
    `email_verified_at` TIMESTAMP,
    `estado` TINYINT(4),
    `created_by` BIGINT(20),
    `update_by` BIGINT(20),
    `foto` VARCHAR(255),
    `password` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT(NOW()),
    `updated_at` TIMESTAMP,
    `deleted_at` TIMESTAMP
);


ALTER TABLE
    `users` ADD UNIQUE `users_email_unique`(`email`);
ALTER TABLE
    `inventarios` ADD CONSTRAINT `inventarios_id_bodega_foreign` FOREIGN KEY(`id_bodega`) REFERENCES `bodegas`(`id`);


ALTER TABLE
    `historiales` ADD CONSTRAINT `historiales_id_bodega_origen_foreign` FOREIGN KEY(`id_bodega_origen`) REFERENCES `bodegas`(`id`);

ALTER TABLE
    `inventarios` ADD CONSTRAINT `inventarios_update_by_foreign` FOREIGN KEY(`update_by`) REFERENCES `users`(`id`);

ALTER TABLE
    `historiales` ADD CONSTRAINT `historiales_update_by_foreign` FOREIGN KEY(`update_by`) REFERENCES `users`(`id`);

ALTER TABLE
    `bodegas` ADD CONSTRAINT `bodegas_update_by_foreign` FOREIGN KEY(`update_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `inventarios` ADD CONSTRAINT `inventarios_id_producto_foreign` FOREIGN KEY(`id_producto`) REFERENCES `productos`(`id`);
ALTER TABLE
    `bodegas` ADD CONSTRAINT `bodegas_created_by_foreign` FOREIGN KEY(`created_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `productos` ADD CONSTRAINT `productos_created_by_foreign` FOREIGN KEY(`created_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `historiales` ADD CONSTRAINT `historiales_created_by_foreign` FOREIGN KEY(`created_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `productos` ADD CONSTRAINT `productos_update_by_foreign` FOREIGN KEY(`update_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `bodegas` ADD CONSTRAINT `bodegas_id_responsable_foreign` FOREIGN KEY(`id_responsable`) REFERENCES `users`(`id`);
ALTER TABLE
    `historiales` ADD CONSTRAINT `historiales_id_inventario_foreign` FOREIGN KEY(`id_inventario`) REFERENCES `inventarios`(`id`);
ALTER TABLE
    `inventarios` ADD CONSTRAINT `inventarios_created_by_foreign` FOREIGN KEY(`created_by`) REFERENCES `users`(`id`);
ALTER TABLE
    `historiales` ADD CONSTRAINT `historiales_id_bodega_destino_foreign` FOREIGN KEY(`id_bodega_destino`) REFERENCES `bodegas`(`id`);

ALTER TABLE db_inventario.inventarios
    ADD CONSTRAINT fk_bodega FOREIGN KEY(`id_bodega`) REFERENCES `bodegas`(`id`);





