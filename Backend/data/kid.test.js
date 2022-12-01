// jest.useFakeTimers()
const { serachKidByFilters } = require('./kid');


test('should fetch users', async() => {
    let a = await serachKidByFilters({
        "location":"abc"
    })

    expect(await serachKidByFilters({
        "location":"abc"
    })).toStrictEqual(a)
    
  });
    

  
  
