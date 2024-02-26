import { useState } from "react"
import {  faCheckToSlot, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Controller/UserController.ts";
import { User } from "../Model/user.ts";
import {motion} from 'framer-motion'
export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erromessage, setMessage] = useState('')
    
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    }
      const sendData = async (e) => {
        e.preventDefault()
        const data = {
          email: email,
          password: password
        }
          const response = await login("http://localhost:3333/user/login", data)

            if (response.data.errors) {
             const error = response.data.errors;
                if (error.lenght !==0) {
                    setMessage("Verifer votre login ou votre mot de passe")
                }
            } 
            else if(response.data){
              const {id, firstname, lastname, email} = response.data
              // console.log(id, firstname, lastname, email)
              const user = new User(id, lastname, firstname, email)
              const timeoutId = setTimeout(() => {
                // Effectuer la redirection ici
                navigate('/pages/Dashboard', { state:{user } });
              }, 400);
            }
      }

  
    return (<>
     <div className='w-full h-screen bg-white flex flex-row relative p-5 overflow-hidden'>  

<div className='w-1/2 h-full flex flex-col justify-center bg-slate-100 z-0 rounded-lg shadow-xl shadow-slate-200'>
  <p className='font-popone font-bold text-2xl p-5'>TaskManager</p>
  <div className='w-full h-screen my-24 flex flex-col  justify-center items-center'>
    <p className="text-center text-red-700 text-xs font-light">{erromessage == '' ? '' : erromessage }</p>
    <form action=""  method='post'  className='w-1/2 flex flex-col gap-10 justify-center items-center'>
      <label htmlFor="email" className='w-full flex flex-col justify-center items-start'>
        <span className='font-nunito font-bold ml-2'>Email</span>
        <input type="text"  name='email' value={email} onChange={handleChangeEmail} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Enter your email' />
      </label>
      <label htmlFor="password" className='w-full flex flex-col justify-center items-start'>
      <span className='font-nunito font-bold ml-2'>Password</span>
      <input type="password"  name='password' value={password} onChange={handleChangePassword} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4 space-x-2' placeholder='Enter your password'/>
      </label>
      <div className='w-full'>
        <button className='w-full rounded-xl bg-black text-white font-nunito font-semibold p-3' onClick={sendData}>Se connecter</button>
      </div>
    </form>
    <div className='mt-14'>
      <p>Vous n'avez pas de compte ? <Link to={'pages/register'}>inscrivez-vous</Link> </p>
    </div>
  </div>
</div>
<div className='w-1/2 h-full relative'>
<motion.div
  initial={{x: 1000}}
  animate= {{x:0}}

className='w-full  rounded-2xl bg-transparent shadow-slate-400 top-0 z-10 right-0 h-full -left-5 relative back-left-log'>
    <motion.div
    initial={{opacity: 0, translateY: -45, skewX: 10}}
    animate= {{opacity: 1, translateY: 0}}
    transition={{delay: 1, duration: 0.5}}
    
    
    className='w-96 h-80 overflow-hidden  backdrop-blur-xl absolute top-20 left-24 p-2 rounded-xl -skew-x-12'>
      <div className='w-full rounded-xl bg-slate-200 '>
        <p className='font-bold p-2  text-black'>Teams</p>
      </div>
      <ul>
        <li className='py-2 flex flex-row h-max'>
        <img src="https://img.freepik.com/photos-gratuite/portrait-homme-s-amusant_23-2149443790.jpg" className='w-14 h-14 rounded-full object-cover' alt=""   />
        <div className='flex flex-col'>
          <p className='my-2 w-24 h-3 ml-2 text-sm text-slate-300 font-bold bg-slate-300 rounded-lg px-2 animate-pulse'></p>
          <p className='my-2 w-24 h-3 ml-4 -mb-4 text-sm font-bold bg-slate-300 rounded-lg px-2 animate-pulse'></p>
        </div>
        </li>
        <li className='py-2 flex flex-row h-max'>
        <img src="https://pics.craiyon.com/2023-07-27/5d8efad564fd4289b59f45ab5e1d21a3.webp" className='w-14 h-14 rounded-full object-cover' alt=""   />
        <div className='flex flex-col'>
          <p className='my-2 w-24 h-3 ml-2 text-sm text-slate-300 font-bold bg-slate-300 rounded-lg px-2'></p>
          <p className='my-2 w-24 h-3 ml-4 -mb-4 text-sm font-bold bg-slate-300 rounded-lg px-2'></p>
        </div>
        </li>
        <li className='py-2 flex flex-row h-max'>
        <img src="https://byaaronwallace.com/cdn/shop/articles/Screenshot_2022-03-23_085734_ac4d2f2d-8bd7-46c9-9ea9-e3d602f64e6a_600x600_crop_center.png?v=1648041655" className='w-14 h-14 rounded-full object-cover' alt=""   />
        <div className='flex flex-col'>
          <p className='my-2 w-24 h-3 ml-2 text-sm text-slate-300 font-bold bg-slate-300 rounded-lg px-2'></p>
          <p className='my-2 w-24 h-3 ml-4 -mb-4 text-sm font-bold bg-slate-300 rounded-lg px-2'></p>
        </div>
        </li>
        
      </ul>
            
    </motion.div>
    
    <motion.div 
     className='w-96 h-60 backdrop-blur-xl absolute top-20 left-56 shadow-xl z-20 shadow-slate-800 p-2 rounded-xl overflow-hidden'
     initial={{opacity: 0, translateY: 45, skewX: 10 }}
     animate= {{opacity: 1, translateY: 0}}
     transition={{delay: 1, duration: 0.7}}
     whileHover={{skewX: 20}}
     >

    
      <div className='w-full rounded-xl bg-slate-200 '>
        <p className='font-bold p-2  text-black'>Task</p>
      </div>
      <ul className='mt-2 flex flex-col gap-2'>
          <motion.li 
          initial={{
            skewX: 0,
            translateX: 0
          }}
          transition={{duration: 2, delay: 1}}
          animate={{skewX: 1, translateX: 6, zIndex: 10}}
          
          className=' bg-white p-2 rounded-xl flex flex-row drop-shadow-xl'>
            <div className='w-1/2 justify-start items-start gap-1 flex flex-col'>
                  <p className='w-24 h-3 bg-slate-200 rounded-lg  text-sm font-semibold animate-pulse'></p>
                  <div className='w-full flex flex-rox relative'>
                    <img src="https://byaaronwallace.com/cdn/shop/articles/Screenshot_2022-03-23_085734_ac4d2f2d-8bd7-46c9-9ea9-e3d602f64e6a_600x600_crop_center.png?v=1648041655" className='w-7 h-7 rounded-full' alt="" />
                    <img src="https://pics.craiyon.com/2023-07-27/5d8efad564fd4289b59f45ab5e1d21a3.webp" className='w-7 h-7 rounded-full absolute left-5' alt="" />
                  </div>
            </div>
            <div className='w-1/2 flex justify-end items-center pr-2'>
            <FontAwesomeIcon icon={faCheckToSlot} className='text-green-500 text-xl' />
            </div>
          </motion.li>
          <motion.li 
              initial={{
                skewX: 0,
                translateX: 0
              }}
              transition={{duration: 2, delay: 1}}
              animate={{skewX: 1, translateX: 6, zIndex: 10}}
          
          className=' bg-white p-2 rounded-xl flex flex-row'>
            <div className='w-1/2 justify-start items-start gap-1 flex flex-col'>
                  <p className='w-28 h-3 bg-slate-200 rounded-lg text-sm font-semibold animate-pulse'></p>
                  <div className='w-full flex flex-row relative'>
                    <img src="https://pics.craiyon.com/2023-07-27/5d8efad564fd4289b59f45ab5e1d21a3.webp" className='w-7 h-7 rounded-full' alt="" />
                    <img src="https://byaaronwallace.com/cdn/shop/articles/Screenshot_2022-03-23_085734_ac4d2f2d-8bd7-46c9-9ea9-e3d602f64e6a_600x600_crop_center.png?v=1648041655" className='w-7 h-7 rounded-full absolute left-5' alt="" />

                  </div>
            </div>
                
            <div className='w-1/2 flex justify-end items-center pr-2'>
            <FontAwesomeIcon icon={faCircleDot} className='text-slate-400 text-xl' />
            </div>
          </motion.li>
      </ul>
            
    </motion.div>
</motion.div>
       
</div>
</div>

    </>)
}