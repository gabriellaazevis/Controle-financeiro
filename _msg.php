<?php

    if(isset($_GET['ret'])){
        $ret = $_GET['ret'];
    }

    if (isset($ret)) {

        switch ($ret) {
            case 0:
                echo '<div class="alert alert-warning">
            Preencher o campo obrigatório!
        </div>';
                break;

            case 1:
                echo '<div class="alert alert-success">
            Ação realizada com sucesso!
        </div>';
                break;

            case -1:
                echo '<div class="alert alert-danger">
            Ocorreu um erro na operação. Tente mais tarde!
        </div>';
                break;

            case -2:
                echo '<div class="alert alert-danger">
            A senha deve conter entre 6 e 8 caracteres!
        </div>';
                break;

            case -3:
                echo '<div class="alert alert-danger">
            As senhas devem ser iguais!
        </div>';
                break;
            case -4:
                echo '<div class="alert alert-warning">
            Esse item não pode ser excluido, pois está em uso!
        </div>';
                break;
            case -5:
                echo '<div class="alert alert-warning">
            Email já cadastrado. Escolha outro email!
        </div>';
                break;
            case -6:
                echo '<div class="alert alert-warning">
            Usuário não encontrado!
        </div>';
                break;
        }
    }