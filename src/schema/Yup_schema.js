import * as yup from 'yup'

export const Yup_schema = yup.object(
    {
        username: yup.string().min(3, "User name must be atleast 3 charactor").max(22, 'User name will lesser than 22 charactor').required("User name is required"),
        email: yup.string().email("Please write a valid email").required("Email is required"),
        password: yup.string().min(3, "Password must be atleast 3 charactor long").max(22, "Password will be lessaer than 22 charactor").required("Password is required")
    }
)