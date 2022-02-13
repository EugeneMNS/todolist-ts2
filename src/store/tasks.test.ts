import {addSalary, divSalary, fallSalary, multSalary, salaryReducer} from "./tasks";

test("addSalary", ()=>{
    //1. test task
   const salary: number=700
   const bonus: number = 250
    //2. Test code
    const result =addSalary(salary, bonus)
    //3. Checking the expected result
    expect(result).toBe(950)
    }
)

test("fallSalary", ()=>{
        //1. test task
        const salary: number=700
        const minus: number = 100
        //2. Test code
        const result =fallSalary(salary, minus)
        //3. Checking the expected result
        expect(result).toBe(600)
    }
)

test("multSalary", ()=>{
        //1. test task
        const salary: number=700
        const coefficient: number = 1.2
        //2. Test code
        const result =multSalary(salary, coefficient)
        //3. Checking the expected result
        expect(result).toBe(840);
    }
)

test("divSalary", ()=>{
        //1. test task
        const salary: number=700
        const coefficient: number = 0.8
        //2. Test code
        const result =divSalary(salary, coefficient)
        //3. Checking the expected result
        expect(result).toBe(560)
    }
)

test("case 'ADD_SALARY' of salaryReducer", ()=>{
    const salary: number=700
    const action: AddSalaryActionType={
        type: "ADD_SALARY",
        bonus: 300

    }
    expect(salaryReducer(salary, action)).toBe(1000)
})