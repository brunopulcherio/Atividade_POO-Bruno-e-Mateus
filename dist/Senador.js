import Politico from "./Politico.js";
export default class Senador extends Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, anoEleicao) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    setAnoEleicao(anoEleicao) {
        this.anoEleicao = anoEleicao;
    }
    exercerMandato() {
        console.log("O senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.");
    }
    aprovarAutoridades() {
        return "Aprovar autoridades de alto escalão.";
    }
    julgarCrimesResponsabilidade() {
        return "Julgar crimes de responsabilidade.";
    }
    representarEstado() {
        return "Representar os interesses do seu Estado.";
    }
    imprimeInfo() {
        console.log("Nome: " + this.getNome());
        console.log("Partido: " + this.getPartido());
        console.log("Esfera: " + this.getEsfera());
        console.log("Poder: " + this.getPoder());
        console.log("Estado: " + this.getEstado());
        console.log("Ano de eleição: " + this.getAnoEleicao());
        console.log("Local de trabalho: " + this.getLocalTrabalho());
        console.log("Endereço: " + this.getEnderecoTrabalho());
        console.log("Remuneração: " + this.getRemuneracao());
        console.log("Projetos: " + this.getProjetos());
    }
}
