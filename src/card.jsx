import { useParams, Link } from 'react-router-dom'; 

function Card() {
  const { cardID } = useParams();  

  return (
    <>
      <h1>Gallery Page (id: {cardID})</h1>
      <ul>
        <li>
          <Link to='/author'>Про автора</Link>  
        </li>
        <li>
          <Link to='/more'>Додаткові характеристики</Link>  
        </li>
        
      </ul>
    </>
  );
}

export default Card;
