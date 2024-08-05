import { List, Card } from 'antd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FcFilm } from 'react-icons/fc';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Card>
      <List
        dataSource={movies}
        renderItem={(item) => (
          <List.Item>
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {' '}
                <FcFilm />
                <p className="movie_list_title">{item.title}</p>
                <p className="movie_list_overview">{item.release_date}</p>
              </Link>
            </li>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MovieList;
