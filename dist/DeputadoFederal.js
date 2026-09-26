import Politico from "./Politico.js";
export default class DeputadoFederal extends Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, bancada) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    exercerMandato() {
        console.log("O deputado federal legisla sobre leis federais e fiscaliza o presidente da República.");
    }
    votarPEC() {
        return "Votar PECs da Constituição Federal.";
    }
    criarCPI() {
        return "Criar CPI nacional.";
    }
    votarOrcamento() {
        return "Votar o PPA, a LDO e a LOA nacionais.";
    }
    proporLeiComplementar() {
        return "Propor leis complementares.";
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
        console.log("Bancada: " + this.getBancada());
    }
}
