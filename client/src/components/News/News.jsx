import "./News.css"
import axios from "axios";
import {useEffect, useState } from "react";
import { useSelector}  from "react-redux";


function News(props){

    const countryDetail = useSelector((state)=>state.countryDetail)

    const newsKey="7ae7b526c5e04d9793d659a7f37dc2c4"
    
    var url = 'https://newsapi.org/v2/everything?' +`q=${countryDetail.name}&` +'from=2023-06-15&' +'sortBy=popularity&' +'apiKey='+newsKey

    const [newNumber,setNewNumber] = useState(0)

    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [source,setSource] = useState("")
    const [title,setTitle] = useState("")
    const [newUrl,setNewUrl] = useState("")

    

    useEffect(() => {
        axios(url)
        .then(( data ) => {
            //console.log(data.data.articles[newNumber])
            setTitle(data.data.articles[newNumber].title)
            setSource(data.data.articles[newNumber].source.name)
            setDescription(data.data.articles[newNumber].description)
            setImage(data.data.articles[newNumber].urlToImage)
            setNewUrl(data.data.articles[newNumber].url)
        }).catch(()=>{
            window.alert('Could not find a new')
        });
    }, [countryDetail]);




    return (
      <div className="news"> 
        <h2 className="presentation">Here is a random new about {countryDetail.name}</h2>
        <h3 className="news-title">{title}</h3>
        {image?<img src={image} className="news-image" alt='new' /> :<></>}
        <p className="news-description">{description}</p>
        <p className="news-source">-{source}</p>
        <a className="news-url" href={newUrl}>{newUrl}</a>
      </div>
    );
};
  
  export default News;