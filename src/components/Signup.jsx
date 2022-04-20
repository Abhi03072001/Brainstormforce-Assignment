import './home.css';
import {Button, InputRightElement, Input,Select,InputGroup} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {useState} from "react"
import { useForm } from "react-hook-form"


export const Signup = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (

     <div className="mainDiv">
     <div className="leftDiv">
     <div className="inputDiv">
     <p className="heading">Let's set up your account</p>
        <p className='topp'>Already have an account? 
        <Link to="/signup" style={{color: '#276EFA'}}>Sign in</Link></p>  

        <form style={{marginTop:"3%"}} onSubmit={handleSubmit(onSubmit)}>

         <Input className="input" id='name' type='name' placeholder="Your name" {...register("name", { required: true})} />
         {errors.name && <p className="errFormat">Please Enter your name</p>}

         <Input className="input" id='email' type='email' placeholder="Email address" 
         {...register("email", { required: true, pattern: ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}') })}/>
         {errors.email && <p className="errFormat">Please Enter a valid email address</p>}

           <Select id='user' type='user' placeholder='I would describe my user type as' className="input"   {...register("user", { required: true})}>
            <option>User</option>
             <option>Admin</option>
             
             </Select>

           {errors.user && <p className="errFormat">User type is required</p>}
          <InputGroup size='md' className="input">

             <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Password'  {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/})}/>
             <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
            </InputRightElement>
            </InputGroup>
            {errors.password && <p className="errFormat">Password Should be in "Raoji@123" format. </p>}
            <Button type="submit" width='100%' className="nextBtn" colorScheme="blue">Next</Button>
        </form>


       <p className='bottom1'>By clicking the "Next" button, you agree to creating a free account, and to <span style={{color: '#276EFA'}}>Terms of Service</span> and <span style={{color: '#276EFA'}}>Privacy Policy.</span></p>
             </div>
             </div>
            <div className="rightDiv">
                <div className="BsfDiv">
                    <img id='imgBSF' src="data:image/png;base64,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" alt="" />
                {/* <p className="headBsf">Helping Businesses Grow Online with Simplified Solutions</p> */}
             </div>

            </div>
        </div>
    )
}




