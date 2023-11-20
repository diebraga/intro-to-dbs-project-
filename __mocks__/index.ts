import { generateRandomPassword } from "@/utils/generateRandomPassword";

export const users = [
    {
        name: "Diego",
        surname: "Braga",
        username: "diebraga",
        password: generateRandomPassword(10),
        role: "ceo",
        annualLeaveAllowance: 20,
        salary: 90000,
        address: "Road 42 High Street",
        created_at: "2021-01-10"
    },
    {
        name: "Ana",
        surname: "Silva",
        username: "anasilva",
        password: generateRandomPassword(10),
        role: "Administrator",
        annualLeaveAllowance: 20,
        salary: 50000,
        address: "238 Chuo Dori",
        created_at: "2021-01-10" 
    },
    {
        name: "Luiz",
        surname: "Costa",
        username: "luizcosta",
        password: generateRandomPassword(10),
        role: "Office Worker",
        annualLeaveAllowance: 20,
        salary: 40000,
        address: "Road EH1 1TG Scotland, UK",
        created_at: "2015-04-15" 
    }
];
