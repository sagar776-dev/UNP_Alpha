// jest.useFakeTimers()
const { serachParentEmailByName ,serachParentPhoneByEmail} = require('./parents');


test('should fetch parent by location', async() => {
    expect(await serachParentEmailByName({
        "name":"Sagar"
    })).toStrictEqual(
        "sagara1997@gmail.com"
    )
    
  });
    

test('should fetch parent phone number by location', async() => {
    expect(await serachParentPhoneByEmail({
        "email":"sagara1997@gmail.com"
    })).toStrictEqual(
        "987654321"
    )
    
  });
    

  

  
  
