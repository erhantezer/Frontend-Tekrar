import React, { useState } from 'react';
import axios from "axios";
import Header from '../../components/header/Header';
import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import homeSvg from '../../assets/home.svg';
import Cards from '../../components/cards/Cards';

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null)

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        console.log(data.hits)
        setRecipes(data.hits)
      } catch (error) {
        console.log(error);
      }
    }else{
    alert("Please enter your meal!")}
  }
  

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

    {!recipes && (
      <ImgDiv>
        <HomeImg src={homeSvg}/>
      </ImgDiv>
    )}

      {recipes?.length === 0 && (
        <HeaderText>Text Food Can Not Be Found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes}/>} 
    </div>
  )
}

export default Home