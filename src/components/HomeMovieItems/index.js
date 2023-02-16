import {Link} from 'react-router-dom'

import './index.css'

const HomeMovieItems = props => {
  const {eachMovie} = props
  const {title, id, backdropPath} = eachMovie
  return (
    <Link to={`/movies/${id}`}>
      <li>
        <img className="thumbnail-img" alt={title} src={backdropPath} />
      </li>
    </Link>
  )
}
export default HomeMovieItems
