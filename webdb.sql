CREATE TABLE `webdb`.`dados` (
  `id_orcamento` INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `valor` FLOAT NULL);
  
INSERT INTO `webdb`.`dados` (id_orcamento, nome, email, valor) 
VALUES (default, 'teste', 'teste.teste@admin.com', 5000);

SELECT *
FROM `webdb`.`dados`;
