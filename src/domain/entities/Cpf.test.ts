
import {describe,it,expect,test} from "vitest"
import Cpf from "./Cpf";

describe('Cpf',()=>{
    const validCpfs = [
        "987.654.321-00",
        "714.602.380-01",
        "987.654.321-00",
        "313.030.210-72"
    ]
    const invalidCpfs = [
        "111.111.111-11",
        "222.222.222-22",
        "333.333.3336-33"
    ]
    test.each(validCpfs)('Deve testar um cpf valido: %s',(cpf:string)=>{
        const cpfValidate = new Cpf(cpf)
        const isValid = cpfValidate.validate(cpf)
        expect(isValid).toBeTruthy()
    })

    test.each(invalidCpfs)('Deve testar um cpf invalido: %s',(cpf:string)=>{
        expect(()=>new Cpf(cpf)).toThrow(new Error('invalid cpf'))
    })

})