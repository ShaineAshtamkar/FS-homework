//const { add, calculateHyp, removeBugs, clearLowPriority, PictureManager, ArrayManipulator, Excercises } = require("./code");
const { Exercises } = require("./code");


// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })

// test("calculateHyp should return", () => {
//     let result = calculateHyp(3, 4)
//     expect(result).toBe(5)
// })


// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = removeBugs(code)
//     expect(bugFreeCode).not.toContain("BUG")
// })

// test("should return only High Priority items from the array", () => {
//     let objects = [{ text: "bla", priority: "Low" }, { text: "money", priority: "High" }]
//     let objectsFreeLow = clearLowPriority(objects)
//     for (let i = 0; i < objectsFreeLow; i++) {
//         expect(objectsFreeLow[i].priority).toBe("High")
//     }

// })



// test("addPicture should add/delete a picture URL of the pictureURLs array", function () {
//     //sanity
//     const picManager = new PictureManager()
//     expect(picManager.pictureURLs.length).toBe(0)

//     picManager.addPicture("some_url")
//     expect(picManager.pictureURLs.length).toBe(1)           //test
//     expect(picManager.pictureURLs).toContain("some_url")    //double check
//     picManager.removePicture("some_url")
//     expect(picManager.pictureURLs.length).toBe(0)
//     expect(picManager.pictureURLs).not.toContain("some_url")
// })

// test("should recieve two arrays of strings", function () {
//     const arrManap = new ArrayManipulator()
//     result = arrManap.manipulate(["food", "item", "location"],
//         ["cherry", "lightbulb", "Tazmania"]
//     )
//     expect(result).toEqual({
//         food: "cherry", item: "lightbulb", location:
//             "Tazmania"
//     }
//     )
// }
// )
let e = new Exercises();
test("isEven should return true for even", () => {
    let result = e.isEven(2);
    expect(result).toBeTruthy()
})
test("isEven should work with 0", () => {
    let result = e.isEven(0)
    expect(result).toBeTruthy
})

test("should remove at least one element from the array",
    () => {
        let newArr = e.removeAtLeastOne([1, 2, 3])
        expect(newArr.length).toBeLessThan(3)
    }
)
test("removeAtleastOne should throw a friendly error if the parameter is not an array",
    () => {
        expect(() =>
            e.removeAtLeastOne("not an array")).toThrow("expects an array")

    })
test(`//should return a clean string without these symbols: "!", "#", ".", ", ", "'"`,
    () => {
        let symbols = ["!", "#", ".", ",", "'"]
        let result = e.simplify("Arr@@y!");
        symbols.forEach(s => {
            expect(result).not.toContain("s")
        })

    }
)
test("simplify should take care of null input",
    () => {
        expect(() => e.simplify(null)).toThrow()

    }
)
test('should throw error message if no boolean in array',
    () => {
        let result = e.validate(["bla", 2])
        expect(result).toEqual({ error: "Need at least one boolean" })
    }
)
test('should return true when trues are more than false',
    () => {
        let result = e.validate([true, true, true, false])
        expect(result).toEqual(true)
    }
)
test("should return false when trues are not more than falses", () => {
    expect(e.validate([true, false, false])).toBe(false)
})
test("should return error message when array is empty",
    () => {
        expect(e.validate([])).toEqual({ error: "Need at least one boolean" })
    })

test("add should use push method", () => {
    const pushSpy = jest.spyOn(Array.prototype, "push")
    e.add("x", "y")
    expect(pushSpy).toHaveBeenCalled()
    expect(pushSpy).toHaveBeenCalledWith("x", "y")
    pushSpy.mockRestore()

}
)




