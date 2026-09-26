import Politico from "./Politico.js";
export default class Governador extends Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, secretarios, estado) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.secretarios = secretarios;
        this.estado = estado;
    }
    getSecretarios() {
        return this.secretarios;
    }
    setSecretarios(secretarios) {
        this.secretarios = secretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    exercerMandato() {
        console.log("O governador sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar.";
    }
    administrarRodovias() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacaoSaude() {
        return "Coordenar a educação e a saúde do estado.";
    }
    prepararOrcamento() {
        return "Elaborar e enviar o PPA, a LDO e a LOA estadual.";
    }
    imprimeInfo() {
        console.log("Nome: " + this.getNome());
        console.log("Partido: " + this.getPartido());
        console.log("Esfera: " + this.getEsfera());
        console.log("Poder: " + this.getPoder());
        console.log("Estado: " + this.getEstado());
        console.log("Local de trabalho: " + this.getLocalTrabalho());
        console.log("Endereço: " + this.getEnderecoTrabalho());
        console.log("Remuneração: " + this.getRemuneracao());
        console.log("Projetos: " + this.getProjetos());
        console.log("Secretários: " + this.getSecretarios());
    }
}
