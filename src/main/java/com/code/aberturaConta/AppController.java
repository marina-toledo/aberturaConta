package com.code.aberturaConta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import static javax.servlet.http.HttpServletResponse.SC_OK;

/**
 *
 * @author User
 */
@Controller
public class AppController {

    @Autowired
    UserDAO dao;

    @RequestMapping("/erro") //TODO
    public String erro(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return "menuFinal";
    }

//    ------------------------------
//    Requests vindo da pagina INDEX
//    ------------------------------
    @RequestMapping("/")
    public String init() {
        return "index";
    }

    @RequestMapping("/enviaSenhaPorEmail")
    private void enviaSenhaPorEmail(HttpServletRequest request, HttpServletResponse response) throws IOException {
        OutputStream os = response.getOutputStream();

        String email = request.getParameter("email");
        String senha = request.getParameter("senha");
        String msg = "parameters: " + email;

        // TODO:: implementar enviar senha por email
//        User u = new User(email, senha);
//        dao.save(u);
        List<User> emails = dao.findByEmail(request.getParameter("email"));
        if ( emails!=null && emails.size() > 0){
            msg = Boolean.TRUE.toString();
        }else{
            msg = Boolean.FALSE.toString();
        }

        os.write(msg.getBytes());
        os.close();
        os.flush();
    }

    @RequestMapping("/cadastrar")
    public String cadastrar(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //response.sendRedirect("cadastro");
        return "cadastro";
    }

    @RequestMapping("/entrar")
    public void entrar(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String usuario = request.getParameter("usuario");
        String senha = request.getParameter("senha");

        if (Helper.autenticar(usuario, senha)) {
            response.setStatus(SC_OK);
//            response.sendRedirect("greeting?name=bla");
            response.sendRedirect("abrir-conta?usuario=" + usuario + "&senha=" + senha);
        }
//            response.sendError(SC_UNAUTHORIZED, "   Erro de autenticacao de usuario.");
    }

//    ------------------------------
//    Requests vindo da pagina CADASTRO
//    ------------------------------
    @RequestMapping("/submitCadastro")
    private void submitCadastro(HttpServletRequest request, HttpServletResponse response) throws IOException {
        OutputStream os = response.getOutputStream();

        String email = request.getParameter("email");
        String rg = request.getParameter("rg");
        String cpf = request.getParameter("cpf");
        String nomeCompleto = request.getParameter("nomeCompleto");
        String telefone = request.getParameter("telefone");

        String msg = "parameters: "
                + nomeCompleto + cpf + rg + email + telefone;

        String senha = Helper.gerarSenha();
        //Boolean status = Helper.criarUsuario(/* parametros de cadastro aqui*/);
        User u = new User( email, senha, rg, cpf, nomeCompleto, telefone);
        dao.save(u);
        //msg = status.toString();
        msg = Boolean.TRUE.toString();

        os.write(msg.getBytes());
        os.close();
        os.flush();
    }

//    ------------------------------
//    Requests vindo da pagina ABRIR-CONTA
//    ------------------------------
    @RequestMapping("/abrir-conta")
    public String abrir(@RequestParam(value = "usuario") String usuario, @RequestParam(value = "senha") String senha, Model model) {
        model.addAttribute("usuario", usuario);
        model.addAttribute("senha", senha);
        return "abrir-conta";
    }

    //    ------------------------------
//    Requests vindo da pagina MENUFINAL
//    ------------------------------
    @RequestMapping("/menuFinal")
    public String irMenuFinal() {
//    public String irMenuFinal(@RequestParam(value="usuario") String usuario, @RequestParam(value="senha") String senha, Model model) {
        return "menuFinal";
    }

}
