export const addSalary=(salary:number, bonus:number) => salary+bonus
export const fallSalary=(salary:number, minus:number) => salary-minus
export const multSalary=(salary:number, coefficient:number) => salary*coefficient
export const divSalary=(salary:number, coefficient:number) => salary*coefficient
//1.  В параметрах у всех - salary
//2. Тип действия в названии (type of action)
//3. Дополнительные значения для каждого типа действия

type AddSalaryActionType={
    type: "ADD_SALARY"
    bonus: number
}

type ActionType=AddSalaryActionType

export const salaryReducer=(salary: number, action: ActionType)=>{
    switch (action.type){
        case "ADD_SALARY":
            return salary+action.bonus
        default:
            return salary
    }

}