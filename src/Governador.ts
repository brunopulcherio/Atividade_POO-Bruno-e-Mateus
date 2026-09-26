import Politico from "./Politico.js";

export default class Governador extends Politico {

    private secretarios: string[];
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        secretarios: string[],
        estado: string
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.secretarios = secretarios;
        this.estado = estado;
    }

    getSecretarios(): string[] {
        return this.secretarios;
    }

    setSecretarios(secretarios: string[]): void {
        this.secretarios = secretarios;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    exercerMandato(): void {
        console.log("O governador sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }

    gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar.";
    }

    administrarRodovias(): string {
        return "Administrar as rodovias estaduais.";
    }

    coordenarEducacaoSaude(): string {
        return "Coordenar a educação e a saúde do estado.";
    }

    prepararOrcamento(): string {
        return "Elaborar e enviar o PPA, a LDO e a LOA estadual.";
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
        console.log("Secretários: " + this.getSecretarios());
    }
}