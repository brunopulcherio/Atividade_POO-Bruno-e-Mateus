import Politico from "./Politico.js";
export default class Presidente extends Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, ministros) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.ministros = ministros;
    }
    getMinistros() {
        return this.ministros;
    }
    setMinistros(ministros) {
        this.ministros = ministros;
    }
    exercerMandato() {
        console.log("O presidente propõe, sanciona e veta leis e edita medidas provisórias.");
    }
    nomearMinistro() {
        return "Nomear e exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o país em eventos internacionais.";
    }
    prepararOrcamento() {
        return "Elaborar e enviar o PPA, a LDO e a LOA nacional.";
    }
    imprimeInfo() {
        console.log("Nome: " + this.getNome());
        console.log("Partido: " + this.getPartido());
        console.log("Esfera: " + this.getEsfera());
        console.log("Poder: " + this.getPoder());
        console.log("Local de trabalho: " + this.getLocalTrabalho());
        console.log("Endereço: " + this.getEnderecoTrabalho());
        console.log("Remuneração: " + this.getRemuneracao());
        console.log("Projetos: " + this.getProjetos());
        console.log("Ministros: " + this.getMinistros());
    }
}
