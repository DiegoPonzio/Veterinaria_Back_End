CREATE DATABASE IF NOT EXISTS `veterinaria` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `veterinaria`;
CREATE TABLE `categoria` (
                             id_cat INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                             nombre_cat VARCHAR(45) NOT NULL,
                             descripcion_cat VARCHAR(45) NOT NULL,
                             estado_cat VARCHAR(45) NOT NULL,
                             imagen_cat VARCHAR(90) NOT NULL,
                             create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `producto` (
                            id_pro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            nombre_pro VARCHAR(45) NOT NULL,
                            marca_pro VARCHAR(45) NOT NULL,
                            precio_pro INT NOT NULL,
                            stock_pro INT NOT NULL,
                            descripcion_pro VARCHAR(90) NOT NULL,
                            estado_pro BOOLEAN NOT NULL,
                            imagen_pro VARCHAR(90) NOT NULL,
                            id_cat INT NOT NULL,
                            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                            FOREIGN KEY (id_cat) REFERENCES categoria (id_cat)
);
CREATE TABLE `venta` (
                         id_ven INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                         cantidad_ven INT NOT NULL, precio_ven INT NOT NULL,
                         iva_ven INT NOT NULL, ieps_ven INT NOT NULL,
                         create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `producto-venta` (
                                  id_proVen INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                  id_pro INT NOT NULL,
                                  id_ven INT NOT NULL,
                                  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                  FOREIGN KEY (id_pro) REFERENCES producto (id_pro),
                                  FOREIGN KEY (id_ven) REFERENCES venta (id_ven)
);
CREATE TABLE `ingreso` (
                           id_ing INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           lote_ing INT NOT NULL,
                           fechaCompra_ing DATE NOT NULL,
                           fechaCaducidad_ing DATE NOT NULL,
                           fechaLlegada_ing DATE NOT NULL,
                           cantidad_ing INT NOT NULL,
                           precioCompra_ing INT NOT NULL,
                           precioVenta_ing INT NOT NULL,
                           precioMayoreo_ing INT NOT NULL,
                           tipoComprobante_ing VARCHAR(45) NOT NULL,
                           numComprobante_ing INT NOT NULL,
                           serieComprobante_ing INT NOT NULL,
                           create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `producto-ingreso` (
                                    id_prod INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    id_pro INT NOT NULL,
                                    id_ing INT NOT NULL,
                                    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                    FOREIGN KEY (id_prod) REFERENCES producto (id_pro),
                                    FOREIGN KEY (id_ing) REFERENCES ingreso (id_ing)
);
CREATE TABLE `usuario` (
                           id_usu INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           nombre_usu VARCHAR(45) NOT NULL,
                           apellido_usu VARCHAR(45) NOT NULL,
                           telefono_usu VARCHAR(45) NOT NULL,
                           direccion_usu VARCHAR(45) NOT NULL,
                           email_usu VARCHAR(45) NOT NULL,
                           password_usu VARCHAR(45) NOT NULL,
                           empleado_usu BOOLEAN NOT NULL,
                           create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `rol` (
                       id_rol INT AUTO_INCREMENT PRIMARY KEY,
                       nombre_rol VARCHAR(45) NOT NULL,
                       create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
                       update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `usuario-rol` (
                               id_usu INT NOT NULL,
                               id_rol INT NOT NULL,
                               create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                               PRIMARY KEY (id_usu, id_rol),
                               FOREIGN KEY (id_usu) REFERENCES usuario (id_usu) ON DELETE CASCADE,
                               FOREIGN KEY (id_rol) REFERENCES rol (id_rol) ON DELETE CASCADE
);
CREATE TABLE `veterinaria` (
                               id_vet INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                               nombre_vet VARCHAR(45) NOT NULL,
                               telefono_vet VARCHAR(45) NOT NULL,
                               direccion_vet VARCHAR(45) NOT NULL,
                               email_vet VARCHAR(45) NOT NULL,
                               create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `empleado`(
                           id_emp INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           id_vet INT NOT NULL,
                           id_usu INT NOT NULL,
                           sue_emp INT NOT NULL,
                           entrada_emp TIME NOT NULL,
                           salida_emp TIME NOT NULL,
                           create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           FOREIGN KEY (id_vet) REFERENCES veterinaria (id_vet),
                           FOREIGN KEY (id_usu) REFERENCES usuario (id_usu)
);
CREATE TABLE `mascota-usuario` (
                                   id_mas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                   id_usu INT NOT NULL,
                                   id_reg INT NOT NULL,
                                   create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                   update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                   FOREIGN KEY (id_usu) REFERENCES usuario (id_usu)
);
CREATE TABLE `especie` (
                           id_esp INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           nombre_esp VARCHAR(45) NOT NULL,
                           create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE `raza` (
                        id_raza INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        nombre_raza VARCHAR(45) NOT NULL,
                        id_esp INT NOT NULL,
                        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        FOREIGN KEY (id_esp) REFERENCES `especie` (id_esp)
);
CREATE TABLE `mascota` (
                           id_mas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           nombre_mas VARCHAR(45) NOT NULL,
                           edad_mas INT NOT NULL,
                           sexo_mas VARCHAR(45) NOT NULL,
                           id_esp INT NOT NULL,
                           create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                           update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           FOREIGN KEY (id_mas) REFERENCES `mascota-usuario` (id_mas),
                           FOREIGN KEY (id_esp) REFERENCES `especie` (id_esp)
);
CREATE TABLE `cita` (
                        id_cit INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        id_mas INT NOT NULL,
                        fecha_cit DATE NOT NULL,
                        hora_cit TIME NOT NULL,
                        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        FOREIGN KEY (id_mas) REFERENCES mascota (id_mas)
);


INSERT INTO `rol` (nombre_rol)
VALUES
    ('Administrador'),
    ('Empleado'),
    ('Cliente'),
    ('Veterinario');

INSERT INTO `usuario` (
    nombre_usu, apellido_usu, telefono_usu,
    direccion_usu, email_usu, password_usu,
    empleado_usu
)
VALUES
    (
        'Juan', 'Perez', '123456789', 'Calle 1',
        'example@gmail.com', '123456', false
    );

# ---------------
INSERT INTO categoria (
    nombre_cat, descripcion_cat, estado_cat, imagen_cat)
VALUES ('Alimento seco', 'Humedad de sólo 3 a 12%', 'Disponible', 'alimento_seco.jpg'),
       ('Alimento humedo', 'Aquellos con humedad superior al 60%', 'Disponible', 'alimento_humedo.jpg' ),
       ('Premios', 'Reforzamiento positivo al momento de entrenar', 'Disponible', 'premios.jpg'),
       ('Accesorios', 'Para pasear y/o diversión', 'Disponible', 'accesorios.jpg'),
       ('Salud y bienestar', 'Funcionamiento adecuado del organismo', 'Disponible', 'saludbienestar.jpg'),
       ('Arena y limpieza', 'Es el baño de los gatitos', 'Disponible', 'arenalimpieza.jpg');

INSERT INTO producto(nombre_pro, marca_pro, precio_pro, stock_pro, descripcion_pro, estado_pro, imagen_pro, id_cat)
values('NUFIT-Alimento Seco', 'NUFIT', 165, 2, 'De origen animal para musculos sanos.', true, 'nufit1.jpg', 1),
      ('Premios Soft & Chewy', 'HILL\'S SCIENCE DIET', 110, 0, 'hechos con solamente los mejores ingredientes.', false, 'softchewy1.jpg', 3);

