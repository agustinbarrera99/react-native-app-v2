import {object,string} from 'yup'

export const loginSchema = object({
    password:string()
                .required("Password requerido")
                .min(8,"Minimo 8 caracteres")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"debe contener al menos una mayuscula una minuscula y un numero"),
    email:string()
            .required("El email es requerido")
            .email("Email no valido"),
    
})

