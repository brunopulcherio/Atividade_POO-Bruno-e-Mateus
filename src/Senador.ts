import Politico from "./Politico.js";

export default class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        anoEleicao: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getAnoEleicao(): number {
        return this.anoEleicao;
    }

    setAnoEleicao(anoEleicao: number): void {
        this.anoEleicao = anoEleicao;
    }

    exercerMandato(): void {
        console.log("O senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.");
    }

    aprovarAutoridades(): string {
        return "Aprovar autoridades de alto escalão.";
    }

    julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    representarEstado(): string {
        return "Representar os interesses do seu Estado.";
    }

    imprimeInfo(): void {
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