import { useState } from 'react'

import './css/register.css'
import { UserRegister } from '../Controller/UserController.ts'
import { User } from '../Model/user.ts';
import { useNavigate } from 'react-router-dom';



export default function Register(){
  const navigate = useNavigate();
  const [value, setValue] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '', 
    cpassword: ''
  })

  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })


  const handleSetValue = (fieldname, value) =>{
      setValue(prevState => ({
        ...prevState, 
        [fieldname]: value
      }));
  }
  
  const {nom, prenom, email, password, cpassword} =  value;
  

  
  
  
  const sendData = async (e) => {
    e.preventDefault();
    const data =  {
      firstname: nom,
       lastname: prenom,
        email: email,
         password: password}
         const c = await UserRegister('http://localhost:3333/user/register', data)
        if(c){
          const message = c;
            if (message.errors) {
              if (message.errors.lenght !== 0) {
                message.errors.forEach(element => {
                  switch (element.field) {
                    case 'firstname':
                      setError(prevError => ({ ...prevError, firstname: element.message }));
                      break;
                    case 'lastname':
                      setError(prevError => ({ ...prevError, lastname: element.message }));
                      break;
                    case 'email':
                      setError(prevError => ({ ...prevError, email: element.message }));
                      break;
                    case 'password':
                      setError(prevError => ({ ...prevError, password: element.message }));
                      break;
                    default:
                      break;
                  }
                })
              }
            }
          else if (message) {
            const {id, lastname, firstname, email} = message.data.e;
             const user = new User(id, lastname, firstname, email);
             const timeoutId = setTimeout(() => {
              // Effectuer la redirection ici
              navigate('/pages/Dashboard', { state:{user } });
            }, 400);
           
          }
            
        }


   }
  
    return (

        <div className="w-full h-screen bg-slate-300 flex flex-row gap-2 p-5 overflow-hidden overflow-y-auto ">
            <div className='w-1/2 h-full flex flex-col justify-center bg-slate-100 z-0 rounded-lg'>
            <p className='font-popone font-bold text-2xl p-5'>TaskManager</p>
  <div className='w-full h-screen  flex flex-col  justify-start items-center' onSubmit={sendData}>
    <form action=""  method='post'  className='w-1/2 flex flex-col mt-2  gap-5 justify-center items-center'>
    <label htmlFor="nom" className='w-full flex flex-col justify-center items-start'>
        <span className='font-nunito font-bold ml-2'>Nom <span className='text-red-900 font-semibold'>*</span></span>
        <input type="text"  name='firstname' value={  nom} onChange={(e) => handleSetValue('nom', e.target.value)} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Entrer votre nom' />
        <span className='text-sm text-red-700 font-light'>{error.firstname}</span>
      </label>
    <label htmlFor="prenom" className='w-full flex flex-col justify-center items-start'>
        <span className='font-nunito font-bold ml-2'>Prènom <span className='text-red-900 font-semibold'>*</span></span>
        <input type="text"  name='lastname' value={  prenom} onChange={(e) => handleSetValue('prenom', e.target.value)} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Entrer votre prénom' />
        <span className='text-sm text-red-700 font-light'>{error.lastname}</span>
      </label>
    <label htmlFor="email" className='w-full flex flex-col justify-center items-start'>
        <span className='font-nunito font-bold ml-2'>Email <span className='text-red-900 font-semibold'>*</span></span>
        <input type="email"  name='email' value={  email} onChange={(e) => handleSetValue('email', e.target.value)} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Entrer votre email' />
        <span className='text-sm text-red-700 font-light'>{error.email}</span>
      </label>
    <label htmlFor="password" className='w-full flex flex-col justify-center items-start'>
        <span className='font-nunito font-bold ml-2'>Password <span className='text-red-900 font-semibold'>*</span></span>
        <input type="password" required  name='password' value={  password} onChange={(e) => handleSetValue('password', e.target.value)} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Entrer un mot de passe' />
        <span className='text-sm text-red-700 font-light'>{error.password}</span>
      </label>
    <label htmlFor="cf-password" className='w-full flex flex-col justify-center items-start '>
        <span className='font-nunito font-bold ml-2'>Confirmer votre mot de passe <span className='text-red-900 font-semibold'>*</span></span>
        <input type="password" required  name='cf-password' value={  cpassword}  onChange={(e) => handleSetValue('cpassword', e.target.value)} className='bg-slate-200 p-2 rounded-2xl w-full font-nunito px-4' placeholder='Confirmer votre mot de passe' />

      
      </label>
      <div className='w-full'>
        <button className='w-full rounded-xl bg-black text-white font-nunito font-semibold p-3'>Suivant</button>
      </div>
        </form>
        </div>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center back-left bg-cyan-100 z-0 rounded-lg '></div>
        </div>

    )
}