// jest.useFakeTimers()
const { serachKidByLocation, serachKidAgeByName } = require('./kid');


test('should fetch one kid by location', async() => {
    let a = await serachKidByLocation({
        "location":"abc"
    })

    expect(await serachKidByLocation({
        "location":"abc"
    })).toStrictEqual(a)
    
  });
    
  
  test('should fetch kid age  by name', async() => {
    expect(await serachKidAgeByName({
        "name":"anish C"
    })).toStrictEqual(
   12
    )
    
  });
    

  
  
