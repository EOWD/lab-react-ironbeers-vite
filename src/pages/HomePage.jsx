
import {Link} from 'react-router-dom';

function HomePage({data}) {
    console.log(data);
  return (
    <div>
     
      <div style={{display:'flex', flexWrap:'wrap'}}>
       { data? data.map(one=>{
       return(<div key={one._id}>
       <img key={one._id} src={one.image_url} alt="" style={{width:'50px', }}/>
      
       </div>
       )
       }): <h3>Loading ding ding.....</h3> }
      </div>

    </div>
  );
}

export default HomePage;
