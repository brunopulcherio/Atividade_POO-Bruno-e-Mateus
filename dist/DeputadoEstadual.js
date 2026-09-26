import Politico from "./Politico.js";
export default class DeputadoEstadual extends Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, comissoes) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    setComissoes(comissoes) {
        this.comissoes = comissoes;
    }
    exercerMandato() {
        console.log("O deputado estadual legisla sobre assuntos de interesse do estado e fiscaliza o governador.");
    }
    votarOrcamento() {
        return "Votar o PPA, a LOA e a LDO do Estado.";
    }
    proporEmenda() {
        return "Propor emendas à Constituição Estadual.";
    }
    criarCPI() {
        return "Criar CPI estadual.";
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
        console.log("Comissões: " + this.getComissoes());
    }
}
