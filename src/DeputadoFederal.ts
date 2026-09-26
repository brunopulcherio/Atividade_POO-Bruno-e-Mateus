import Politico from "./Politico.js";

export default class DeputadoFederal extends Politico {

    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        bancada: string
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

        this.bancada = bancada;
    }

    getBancada(): string {
        return this.bancada;
    }

    setBancada(bancada: string): void {
        this.bancada = bancada;
    }

    exercerMandato(): void {
        console.log("O deputado federal legisla sobre leis federais e fiscaliza o presidente da República.");
    }

    votarPEC(): string {
        return "Votar PECs da Constituição Federal.";
    }

    criarCPI(): string {
        return "Criar CPI nacional.";
    }

    votarOrcamento(): string {
        return "Votar o PPA, a LDO e a LOA nacionais.";
    }

    proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }

    imprimeInfo(): void {
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