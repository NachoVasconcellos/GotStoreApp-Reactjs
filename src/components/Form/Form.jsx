import React from 'react'
import { useForm } from 'react-hook-form'
import "./styles.css";

export const FormBasic = ({buyer, confirmPurchase}) => {
    const { register, handleSubmit, formState: { errors }} = useForm()
    
    const customSubmit = (data) => {
        console.log(data)
        buyer = data;
        confirmPurchase()
    }

  return (
    <div className='container-form'>
        <h2>Purchase Form</h2>

        <form onSubmit={handleSubmit(customSubmit)}>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name',{ required:true })} />
                {errors.name && <small>complete field</small>}
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type="number" {...register('phone',{ required:true })} />
                {errors.phone && <small>complete field</small>}
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type="email" {...register('email',{pattern:true})} />
                {errors.email && <small>invalid email</small>}
            </div>
            <button type='submit' className='btn'>Confirm Purchase</button>
        </form>
    </div>
  )
}

export default FormBasic