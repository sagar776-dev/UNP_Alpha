jest.useFakeTimers()
const { serachKidByFilters } = require('./kid');

test('Get Kid by location', async () => {
    expect(serachKidByFilters({
        "location":"abc"
    })).toMatch({
        "message": {
            "id": 1,
            "first_name": "anish C",
            "last_name": "subedi C",
            "username": "anish",
            "age": 12,
            "gender": "Male",
            "grade": "5",
            "street": "jersey city",
            "school": "stevens",
            "ethnicity": "male",
            "location": "abc",
            "flag": "1",
            "userid": 7
        }
    })
})



// test('Get Kid by location', async () => {

//     console.log("testing the output", await serachKidByFilters({
//         "location":"abc"
//     }))

    


// //         expect(serachKidByFilters({
// //             "location":"abc"
// //         })).then((value) => {
// //     console.log("value", value);
// //     // expected output: "Success!"
// //   });

// }
// )
  
  
