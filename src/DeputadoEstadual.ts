import Politico from "./Politico.js";

export default class DeputadoEstadual extends Politico {

    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        comissoes: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.comissoes = comissoes;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getComissoes(): string[] {
        return this.comissoes;
    }

    setComissoes(comissoes: string[]): void {
        this.comissoes = comissoes;
    }

    exercerMandato(): void {
        console.log("O deputado estadual legisla sobre assuntos de interesse do estado e fiscaliza o governador.");
    }

    votarOrcamento(): string {
        return "Votar o PPA, a LOA e a LDO do Estado.";
    }

    proporEmenda(): string {
        return "Propor emendas à Constituição Estadual.";
    }

    criarCPI(): string {
        return "Criar CPI estadual.";
    }

    imprimeInfo(): void {
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