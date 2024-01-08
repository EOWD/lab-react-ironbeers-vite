import {useEffect,useState} from 'react' 
import axios from 'axios'
function RandomBeersPage() {
    const [beer,setBeer]= useState(null)
useEffect(()=>{
    const data = async ()=>{
const call = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
const item = call.data
setBeer(item)
//console.log(call.data)

    }
    data()
},[])
console.log(beer)

return (
    beer ? (
        <>
            <img src={beer.image_url} alt={beer.name || 'Beer Image'} />
            <h3>{beer.name}</h3>
        </>
    ) : (
        <h1>Loading...</h1>
    )
);


}

export default RandomBeersPage;
