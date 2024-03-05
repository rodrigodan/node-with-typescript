import { fullNameConcat } from "../Utils"

describe('Util Test', ()=>{
    it('should concat first name and last name', ()=>{
        const name = fullNameConcat('Rodrigo', 'Gonçalves');
        expect(name).toBe('Rodrigo Gonçalves');
    })
})