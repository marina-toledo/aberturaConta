package com.code.aberturaConta;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Calendar;

/**
 * Created by marinatoledo on 19/02/17.
 */
@Entity
public class User {

    @GeneratedValue
    @Id
    private Long id;

    private String email;

    private String senha;

    private String rg;

    private String cpf;

    private String nomeCompleto;

    private String telefone;

    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dataFinalizacao;

    public User() {
        super();
    }

    public User(Long id) {
        this.id = id;
    }

    public User(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public User(String email, String senha, String rg, String cpf, String nomeCompleto, String telefone) {
        this.email = email;
        this.senha = senha;
        this.rg = rg;
        this.cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Calendar getDataFinalizacao() {
        return dataFinalizacao;
    }

    public void setDataFinalizacao(Calendar dataFinalizacao) {
        this.dataFinalizacao = dataFinalizacao;
    }


    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
