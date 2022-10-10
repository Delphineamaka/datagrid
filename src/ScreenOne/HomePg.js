import React, {useState} from 'react'
import { Box } from '@mui/system';
import starss from '../Asset/starss.png'
import Astronaut from '../Asset/Astronaut.png'





function HomePg() {

const [inputChange, setInputChage] = useState({
email: "",
password: ""
});

function handleChange(event){
	const { name, value } = event.target;
	setInputChage((prevValue) =>{
	return {
	...prevValue,
	[name]: value
	};
	})

	
}

function handleSubmit(event) {
	setInputChage({
	email: "",
	password: ""
	})
	console.log('you have signed in')
	event.preventDefault()

	
	}
return (
<section>

	<div className='bg__img'>
	<img className='bgs__img' src={Astronaut} alt="star war img"/>
	</div>
	<div className='container__div' >
		<div className='welcome__header'>
	<h1 className='h1__header'>Welcome to star wars the clone wars</h1>
	<img className='header__img' src={starss} alt="star war img"/>
	<div className='div' />
	</div>
	<div className='input__holder'>
<Box>
	<h3 className='account__header'>sign in to continue to your account</h3>

</Box>
	<form className='signup__form'>
		<label className='email__label'>Email address</label> <br />
		<input 
		onChange={handleChange}
		name="email"
		className='input__button' required="email" type="email" placeholder='  Email address' 
			value={inputChange.email}
			/> 
		<label>password</label>   <br />
		<input 
		onChange={handleChange}
		name="password"
		className='input__button' 
		required 
		type='password'
		placeholder='  Enter Strong Password' 
		value={inputChange.password}
		/>
		<button onClick={handleSubmit} className='signin__button' type='button'>sign in</button>
	</form>
	</div>
	
	</div>
</section>
)
}

export default HomePg;
