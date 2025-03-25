import { Link } from 'react-router-dom'

const cards = [{
  "name": "card1",
  "id": "1"
},{
  "name": "card2",
  "id": "2"
},{
  "name": "card3",
  "id": "3"
},{
  "name": "card4",
  "id": "4"
}]

function Gallery() {
  return (<>
    <h1>Gallery Page</h1>
    {cards.map(x=><p key={x.id}><Link to={`/gallery/${x.id}`}>{x.name}</Link></p>)}
  </>)
}

export default Gallery