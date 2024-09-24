import {object,ref,string} from 'yup'

export const registerSchema = object({
    confirmPassword:string()
    .required("el requerido")
    .oneOf([ref("password"),null],"los password no coinciden"),
    password:string()
                .required("Password requido")
                .min(8,"Minimo 8 caracteres")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"debe contener mayusculas ,minusculas y un numero"),
    email:string()
            .required("El email es requerido")
            .email("Email no valido"),
    
})
