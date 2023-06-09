import axios from "axios";

const EMPLOYEE_REST_API = "http://localhost:8080/api/employees"

class EmployeeService{

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API,employee);
    }
}

export default new EmployeeService();
