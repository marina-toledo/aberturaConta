package com.code.aberturaConta;

import java.security.SecureRandom;
import java.math.BigInteger;

/**
 *
 * @author User
 */
public class Helper {

    public static boolean autenticar(String email, String senha) {
        return true;
//        return false;
    }

    public static String gerarSenha() {
        SecureRandom random = new SecureRandom();
        return new BigInteger(130, random).toString(32);
    }

    public static Boolean criarUsuario(/* parametros de cadastro aqui*/) {
        if(false){//sucesso
            return true;
        }else{//fail
            return false;
        }
    }

}
