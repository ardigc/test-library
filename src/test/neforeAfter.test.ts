describe.skip('use case',()=>{
    beforeAll(()=>{
        console.log('antes de todo')
    })
    afterAll(()=>{
        console.log('despues de todo')
    })
    beforeEach(()=>{
        console.log('antes de cada test (before each)')
    })
    afterEach(()=>{
        console.log('Despues de cada test')
    })
    it('able to do something 1',()=>{
        console.log('test 1')

        expect(true).toBe(true)
    })
    it('able to do something 2',()=>{
        console.log('test 2')
        expect(true).toBe(true)
    })

})