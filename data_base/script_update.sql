-- CRUD (Create, Read, Update, Delete).
-- Update: Atualizar.

UPDATE tb_categoria
	SET nome_categoria = 'Universidade'
WHERE id_categoria = 1;

UPDATE tb_usuario
	SET nome_usuario = 'Ana Paula',
		email_usuario = 'ana.paula@outlook.com',
        senha_usuario = 'anap321'
WHERE id_usuario = 2;