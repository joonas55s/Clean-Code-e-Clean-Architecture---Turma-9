export default class Cpf {
    constructor(cpf:string) { 
        if(!this.validate(cpf)) throw new Error('invalid cpf')
    }

    validate(rawCpf: string) {
        const cleanCpf = rawCpf.replace(/\D/g, "");
        if (this.isInvalidCpfLenght(cleanCpf)) return false
        if (this.allDigitsTheSame(cleanCpf)) return false
        const firstDigit = this.calculateDigit(cleanCpf, 10)
        const lastDigit = this.calculateDigit(cleanCpf, 11)
        const actualDigit = this.extractDigit(cleanCpf)
        const validatedDigit = `${firstDigit}${lastDigit}`
        return actualDigit == validatedDigit
    }

    isInvalidCpfLenght(cpf: string) {
        return cpf.length !== 11
    }

    allDigitsTheSame(cpf: string) {
        const [firstDigit] = cpf
        return [...cpf].every(digit => digit === firstDigit)
    }

    calculateDigit(cpf: string, factor: number) {
        let total = 0
        for (const digit of cpf) {
            if (factor > 1) total += (parseInt(digit)) * factor--
        }
        const rest = total % 11
        return (rest < 2) ? 0 : 11 - rest
    }

    extractDigit(cpf:string){
        return cpf.slice(9)
    }

}
