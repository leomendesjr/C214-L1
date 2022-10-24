class Aula{
    constructor (professor, materia, quant_alunos){
        this.professor = professor
        this.materia = materia
        this.quant_alunos = quant_alunos
    }

    getInfo(){
        return [this.professor, this.materia, this.quant_alunos]
    }
}

const aula = new Aula("Felipe", "C214", 35)

const AulaFactory = (professor, materia, quant_alunos) => ({
    professor,
    materia,
    quant_alunos,
    getInfo: () => ({professor, materia, quant_alunos})
})

const aulaFactory = AulaFactory("Gustavo", "C214-L1", 28)
console.log(aulaFactory.getInfo())