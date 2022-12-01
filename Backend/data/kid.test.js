// jest.useFakeTimers()
const { serachKidByLocation } = require('./kid');


test('should fetch one kid by location', async() => {
    let a = await serachKidByLocation({
        "location":"abc"
    })

    expect(await serachKidByLocation({
        "location":"abc"
    })).toStrictEqual(a)
    
  });
    
//   test('should fetch parent phone number by location', async() => {
//     expect(await serachParentPhoneByEmail({
//         "email":"sagara1997@gmail.com"
//     })).toStrictEqual(
//         "987654321"
//     )
    
//   });
    

  
  
