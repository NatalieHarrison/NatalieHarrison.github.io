import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Resume from './components/resume';
import Tools from './components/tools';
import Footer from './components/footer';
import Ptimer from './components/pomodoro/ptimer';


function App() {
  return (
    <div className="App">
      <Ptimer></Ptimer>
      <Header></Header>
      <Grid container spacing = {2} sx = {{mt: '5px'}}>

        <Grid item xs = {10} md = {4} style={{maxHeight: 700, overflow: 'auto'}} > 
          <AboutMe></AboutMe>
        </Grid> 
        <Divider orientation="vertical" flexItem ></Divider>

        <Grid item xs = {10} md = {7} style={{maxHeight: 700, overflow: 'auto'}} sx = {{ml: '5px'}}> 
          <Resume></Resume>
        </Grid>

      </Grid>
      <Divider  flexItem sx = {{mt: '10px', mb: '25px'}}></Divider>
      <Tools></Tools>
      
      <Divider  flexItem sx = {{mt: '10px'}} ></Divider>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
