
import '../App.css'
import { useState} from 'react'
import { Box } from '@mui/material'
import EmailField from './forms/EmailField'
import ButtonValidation from './forms/ButtonValidation'
import {useForm} from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import MyMessage from './Message'

const PasswordResetRequest = () =>{
    const {handleSubmit, control} = useForm()

    const [ShowMessage, setShowMessage] = useState(false)


    const submission = (data) => {
        AxiosInstance.post(`api/password_reset/`,{
            email: data.email, 
        })

        .then(() => {
            setShowMessage(true)
        })
      
    }
    return(
        <div className={"myBackground"}> 

        {ShowMessage ? <MyMessage text={"If your email exists you have received an email with instructions for resetting the password"}  color={'#69C9AB'}/> : null}
        <form onSubmit={handleSubmit(submission)}>

        

        <Box className={"whiteBox"}>

            <Box className={"itemBox"}>
                <Box className={"title"}> Request password reset </Box>
            </Box>

            <Box className={"itemBox"}>
                <EmailField
                label={"Email"}
                name ={"email"}
                control={control}
                />
            </Box>

            <Box className={"itemBox"}>
                <ButtonValidation 
                    label={"Request password reset"}
                    type={"submit"}
                />
            </Box>

            <Box className={"itemBox"} sx={{flexDirection:'column'}}>
             
            </Box>


        </Box>

    </form>
        
    </div>
    )

}

export default PasswordResetRequest
