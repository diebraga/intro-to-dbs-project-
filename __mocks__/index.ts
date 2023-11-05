import { generateRandomPassword } from "@/utils/generateRandomPassword";

export const users = [
    {
        name: "Diego",
        surname: "Braga",
        username: "diebraga",
        password: generateRandomPassword(10),
        roleId: 1,
        annualLeaveAllowance: 20 
    },
    {
        name: "Ana",
        surname: "Silva",
        username: "anasilva",
        password: generateRandomPassword(10),
        roleId: 2,
        annualLeaveAllowance: 20
    },
    {
        name: "Luiz",
        surname: "Costa",
        username: "luizcosta",
        password: generateRandomPassword(10),
        roleId: 3,
        annualLeaveAllowance: 20
    }
];