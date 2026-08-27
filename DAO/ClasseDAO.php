<?php

 // POO = Programação Orientada a Objeto.
 // DAO = Data Access Object  Objeto de Acesso de Dados (Classe)
 // Todo objeto 9 Super alocamento de memória RAM), é uma classe DAO.

 //Tipos de function: 
 //public: função aberta para a comunicação com todas as camadas da aplicação.
 //public static: função aberta para a comunicação com todas as camadas da aplicação, porem sua execução se torna congelada.

 //private: função restrita na classe onde foi desenvolvida, passando dados para uma função pública.
 //private static: função restrita na classe onde foi desenvolvida, passando dados para uma função pública, porem sua execução se torna congelada.

 //função pública, podem ser realizadaas atividades de jerança entre Classes.
 //função privada, nâo executa nenhum tipo de herança.

 class ClasseDAO{
    // 1 exercício de POO
    public function CalcularCombustivel($tipo, $qtdLitros){
        if (empty($tipo) || empty($qtdLitros)){
            return 0;
        }else{
            if($tipo == 1){
                $retornou = $this -> Etanol($qtdLitros);
            }if($tipo == 2){
                $retornou = $this -> Gasolina($qtdLitros);
            }if($tipo == 3){
                $retornou = $this -> Diesel($qtdLitros);
            }
            return $retornou;
        }      
    } 
    private function Etanol($qtdLitros){
        // $calculoGas = $qtdLitros * 4.85;
        //return $calculoGas;
        return $qtdLitros * 4.85;
    }
    private function Gasolina($qtdLitros){
         return $qtdLitros * 5.65;
    }
    private function Diesel($qtdLitros){
         return $qtdLitros * 6.05;
    }

 }
 ?>