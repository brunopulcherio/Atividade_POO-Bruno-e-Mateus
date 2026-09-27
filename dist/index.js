import Presidente from "./Presidente.js";
import Governador from "./Governador.js";
import Senador from "./Senador.js";
import DeputadoFederal from "./DeputadoFederal.js";
import DeputadoEstadual from "./DeputadoEstadual.js";
const presidente = new Presidente("Luiz Inácio Lula da Silva", "PT", "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", 44008, ["PPA Nacional", "LDO Nacional"], ["Ministro da Fazenda", "Ministro da Educação"]);
const governadorPE = new Governador("Raquel Lyra", "PSD", "Palácio do Campo das Princesas", "Praça da República, Recife - PE", 35000, ["PPA de Pernambuco"], ["Secretário de Educação", "Secretário de Saúde"], "Pernambuco");
const governadorSP = new Governador("Tarcísio de Freitas", "Republicanos", "Palácio dos Bandeirantes", "Av. Morumbi, São Paulo - SP", 35000, ["PPA de São Paulo"], ["Secretário de Educação", "Secretário de Saúde"], "São Paulo");

const senador1 = new Senador("Fernando Dueire", "MDB", "Senado Federal", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto de Lei Federal"], "Pernambuco", 2022);
const senador2 = new Senador("Teresa Leitão", "PT", "Senado Federal", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto de Educação"], "Pernambuco", 2022);
const senador3 = new Senador("Astronauta Marcos Pontes", "PL", "Senado Federal", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto de Lei"], "São Paulo", 2022);

const deputadoFederal1 = new DeputadoFederal("Carlos Veras", "PT", "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto Federal 1"], "Governista");
const deputadoFederal2 = new DeputadoFederal("Pedro Campos", "PSB", "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto Federal 2"], "Governista");
const deputadoFederal3 = new DeputadoFederal("Fernando Rodolfo", "PL", "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto Federal 3"], "Ruralista");
const deputadoFederal4 = new DeputadoFederal("Tabata Amaral", "PSB", "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto Federal 4"], "Ambientalista");
const deputadoFederal5 = new DeputadoFederal("Baleia Rossi", "MDB", "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", 44008, ["Projeto Federal 5"], "Governista");

const deputadoEstadual1 = new DeputadoEstadual("João Paulo", "PT", "Assembleia Legislativa de Pernambuco", "Rua da Aurora, Recife - PE", 33000, ["Projeto Estadual 1"], "Pernambuco", ["Comissão de Educação"]);
const deputadoEstadual2 = new DeputadoEstadual("Dani Portela", "PSOL", "Assembleia Legislativa de Pernambuco", "Rua da Aurora, Recife - PE", 33000, ["Projeto Estadual 2"], "Pernambuco", ["Comissão de Saúde"]);
const deputadoEstadual3 = new DeputadoEstadual("Antônio Moraes", "PP", "Assembleia Legislativa de Pernambuco", "Rua da Aurora, Recife - PE", 33000, ["Projeto Estadual 3"], "Pernambuco", ["Comissão de Educação"]);
const deputadoEstadual4 = new DeputadoEstadual("André do Prado", "PL", "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, São Paulo - SP", 33000, ["Projeto Estadual 4"], "São Paulo", ["Comissão de Saúde"]);
const deputadoEstadual5 = new DeputadoEstadual("Carlos Giannazi", "PSOL", "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, São Paulo - SP", 33000, ["Projeto Estadual 5"], "São Paulo", ["Comissão de Educação"]);

presidente.exercerMandato();
console.log(presidente.nomearMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPais());
console.log(presidente.prepararOrcamento());

governadorPE.exercerMandato();
console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.coordenarEducacaoSaude());
console.log(governadorPE.prepararOrcamento());

senador1.exercerMandato();
console.log(senador1.aprovarAutoridades());
console.log(senador1.julgarCrimesResponsabilidade());
console.log(senador1.representarEstado());

deputadoFederal1.exercerMandato();
console.log(deputadoFederal1.votarPEC());
console.log(deputadoFederal1.criarCPI());
console.log(deputadoFederal1.votarOrcamento());
console.log(deputadoFederal1.proporLeiComplementar());

deputadoEstadual1.exercerMandato();
console.log(deputadoEstadual1.votarOrcamento());
console.log(deputadoEstadual1.proporEmenda());
console.log(deputadoEstadual1.criarCPI());
