
	import { Avatar, Card, CardContent, CardHeader, Container, Paper, Stack, Typography } from '@mui/material'
	import React from 'react'
	import Box from '@mui/material/Box';
	import Grid from '@mui/material/Grid';
	import video from '../Asset/video.png';
	import ufo from '../Asset/ufo.png';
	import people from '../Asset/people.png';
	import taxi from '../Asset/taxi.png';
	 import phylogenetics from '../Asset/phylogenetics.png';
	

	function GridLayout() {
	return (
		 
		<Grid   container Paper
		direction = "flex-row"
		justifyContent = "space-between"
		alignItems = "space-between"
		flexGrow={1}
		display='inline-flex'
		padding={2} 
		backgroundColor = '#FAFAFA' 
	    className='grid__container'>


		<Grid item >
		<Card sx={{maxWidth: '13rem', maxHeight: '35rem', }} >
		<Grid container >
			<Grid item lg={2} paddingLeft='20px'>
			Film 
		</Grid>
		<Grid item lg = {2} paddingLeft='7rem' paddingTop='4'>
		<Avatar src = {video} variant = 'square' sx = {{width: 30, height: 30, backgroundColor: 'skyblue', borderRadius: 1, padding: 1}}/> 
		</Grid>
		</Grid>
		<CardContent>
			<h4 style={{paddingTop: 20, color: '#466D1D'}}>200</h4>
			<h6 style={{fontSize: '6px'}}>20% increase everyday</h6> 
		</CardContent>
		</Card>
		</Grid>

		<Grid item >
		<Card sx={{maxWidth: '13rem', maxHeight: '35rem'}}>
		<Grid container>
			<Grid item lg={2} paddingLeft='20px'>
			Starships
		</Grid>
		<Grid item lg = {2} paddingLeft='7rem'>
		<Avatar src = {ufo} variant = 'square' sx = {{width: 30, height: 30, backgroundColor: '#e8ffff', borderRadius: 1, padding: 1}}/> 
		</Grid>
		</Grid>
		<CardContent>
			<h4 style={{paddingTop: 20, color: '#466D1D'}}>200</h4>
			<h6 style={{fontSize: '6px'}}>20% increase everyday</h6> 
		</CardContent>
		</Card>
		</Grid>
		
		<Grid item >
		<Card sx={{maxWidth: '13rem', maxHeight: '35rem'}}>
		<Grid container>
			<Grid item lg={2} paddingLeft='20px'>
			people
		</Grid>
		<Grid item lg = {2} paddingLeft='7rem'>
		<Avatar src = {people} variant = 'square' sx = {{width: 30, height: 30, backgroundColor: '#B8E8F8', borderRadius: 1, padding: 1, display:{xs:{padding: 4}}}}/> 
		</Grid>
		</Grid>
		<CardContent>
			<h4 style={{paddingTop: 20, color: '#466D1D'}}>200</h4>
			<h6 style={{fontSize: '6px'}}>20% increase everyday</h6> 
		</CardContent>
		</Card>
		</Grid>
		
		<Grid item >
		<Card sx={{maxWidth: '13rem', maxHeight: '35rem'}}>
		<Grid container>
			<Grid item lg={2} paddingLeft='20px'>
			vehicle
		</Grid>
		<Grid item lg = {2} paddingLeft='7rem'>
		<Avatar src = {taxi} variant = 'square' sx = {{width: 30, height: 30, backgroundColor: '#f1ee8e', borderRadius: 1, padding: 1}}/> 
		</Grid>
		</Grid>
		<CardContent>
			<h4 style={{paddingTop: 20, color: '#466D1D'}}>200</h4>
			<h6 style={{fontSize: '6px'}}>20% increase everyday</h6> 
		</CardContent>
		</Card>
		</Grid>
		
		<Grid item >
		<Card sx={{maxWidth: '13rem', maxHeight: '35rem'}}>
		<Grid container>
			<Grid item lg={2} paddingLeft='20px'>
			species 
		</Grid>
		<Grid item lg = {2} paddingLeft='7rem'>
		<Avatar src = {phylogenetics} variant = 'square' sx = {{width: 30, height: 30, backgroundColor: 'skyblue', borderRadius: 1, padding: 1}}/> 
		</Grid>
		</Grid>
		<CardContent>
			<h4 style={{paddingTop: 20, color: '#466D1D'}}>200</h4>
			<h6 style={{fontSize: '6px'}}>20% increase everyday</h6> 
		</CardContent>
		</Card>
		</Grid>
		

		 
	</Grid>
 
	
	
	)
	}

	export default GridLayout;
