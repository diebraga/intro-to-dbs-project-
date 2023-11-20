import { generateRandomPassword } from "@/utils/generateRandomPassword";

export const users = [
    {
        name: "Diego",
        surname: "Braga",
        username: "diebraga",
        password: generateRandomPassword(10),
        role: "ceo",
        annualLeaveAllowance: 20 ,
        salary: 90000
    },
    {
        name: "Ana",
        surname: "Silva",
        username: "anasilva",
        password: generateRandomPassword(10),
        role: "Administrator",
        annualLeaveAllowance: 20,
        salary: 50000
    },
    {
        name: "Luiz",
        surname: "Costa",
        username: "luizcosta",
        password: generateRandomPassword(10),
        role: "Office Worker",
        annualLeaveAllowance: 20,
        salary: 40000
    }
];