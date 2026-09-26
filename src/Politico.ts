export default abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    getNome(): string {
        return this.nome;
    }

    getPartido(): string {
        return this.partido;
    }

    getEsfera(): string {
        return this.esfera;
    }

    getPoder(): string {
        return this.poder;
    }

    getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    getRemuneracao(): number {
        return this.remuneracao;
    }

    getProjetos(): string[] {
        return this.projetos;
    }

    setProjetos(projetos: string[]): void {
        this.projetos = projetos;
    }

    abstract exercerMandato(): void;
}