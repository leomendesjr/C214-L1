//Var: Podem ser criadas e declaradas dentro do escopo da programação (Não Usar)
//Let: Podem ser atualizadas mas não podem ser declaradas novamente
//Const: Não podem atualizadas e nem declaradas novamente

class Veiculo {
    placa;
    ano;

    Veiculo(){};

    Veiculo(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }

    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }

    exibirDados(){
        console.log("Placa do veiculo: ", this.placa);
        console.log("Ano do veiculo: ", this.ano);
    }
}

class Onibus extends Veiculo{

    assentos;

    onibus(placa, ano, assentos){
        this.placa = placa;
        this.ano = ano;
        this.assentos = assentos;
    }

    getAssentos() {
        return this.assentos;
    }
    setAssentos(assentos) {
        this.assentos = assentos;
    }

    exibirDados(){
        console.log("Placa do veiculo: ", this.placa);
        console.log("Ano do veiculo: ", this.ano);
        console.log("Qtd de Assentos de veiculo: ", this.assentos);
    }

}

class Caminhao extends Veiculo{
    eixos;

    caminhao(placa, ano, eixos){
        this.placa = placa;
        this.ano = ano;
        this.eixos = eixos;
    }

    getEixos() {
        return this.eixos;
    }
    setEixos(eixos) {
        this.eixos = eixos;
    }

    exibirDados(){
        console.log("Placa do veiculo: ", this.placa);
        console.log("Ano do veiculo: ", this.ano);
        console.log("Qtd de Assentos de eixos: ", this.eixos);
    }

}

let veiculo = new Veiculo();
veiculo.setPlaca('GTV-3047');
veiculo.setAno('1995');
veiculo.exibirDados();

console.log('------------------------------------------------');

let caminhao = new Caminhao();
caminhao.setPlaca('HJR-3423');
caminhao.setAno('2021');
caminhao.setEixos('4');
caminhao.exibirDados();

console.log('------------------------------------------------');

let onibus = new Onibus();
onibus.setPlaca('FDR-4567');
onibus.setAno('2010');
onibus.setAssentos('44');
onibus.exibirDados();