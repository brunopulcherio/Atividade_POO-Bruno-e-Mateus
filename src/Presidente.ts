import Politico from "./Politico.js";

export default class Presidente extends Politico {

    private ministros: string[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        ministros: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.ministros = ministros;
    }

    getMinistros(): string[] {
        return this.ministros;
    }

    setMinistros(ministros: string[]): void {
        this.ministros = ministros;
    }

    exercerMandato(): void {
        console.log(
            "O presidente propõe, sanciona e veta leis e edita medidas provisórias."
        );
    }

    nomearMinistro(): string {
        return "Nomear e exonerar Ministros de Estado.";
    }

    comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    prepararOrcamento(): string {
        return "Elaborar e enviar o PPA, a LDO e a LOA nacional.";
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
        console.log("Ministros: " + this.getMinistros());
    }
}