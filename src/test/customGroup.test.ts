declare namespace jest{
    interface Matchers<R>{
        customToBe(value):CustomMatcherResult
        isExactly<T>(...items:T[]):CustomMatcher
    }
}
expect.extend({
    customToBe(expected, received) {
      return {
        pass: expected === received,
        message: () => `Expected: ${expected} \nReceived: ${received}`,
      };
    },
    isExactly<T>(expectedList:T[], ...values:T[]){
        const haveTheSameLenght=expectedList.length===values.length
        const haveTheSameElement=()=>
        values.map((_,i)=>values[i]===expectedList[i]).reduce((p,c)=>p&&c,true)
        return {
            pass:haveTheSameLenght&&haveTheSameElement(),
            message:() => `Expected: ${expectedList} \n Received: ${values}`
        }
    }
  });
xit('Custom asertion grouping',()=>{
    const list = [{ value: 10 }, { value: 20 }, { value: 30 }];

    expectThatList(list).isExactly({ value: 10 }, { value: 20 }, { value: 30 });
})
function expectThatList<T>(list:T[]) {
    return listMatchers(list)
}
function listMatchers<T>(list:T[]) {
    return {isExactly(...items:T[]){
        expect(items.length).toBe(list.length)
        items.forEach((_,i)=>{
            expect(items[i]).toEqual(list[i])
        })
    }}
}

xit('Custom assertion', ()=>{
    const list =[10,20,30]
    expect(list.length).customToBe(3)
    expect(list).isExactly(10,20,30)
})
