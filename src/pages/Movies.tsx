import data from '../MovieData.json';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MDS = data.MovieData;

function MovieList() {
  // const [listOMovies, setListOMovies] = useState(MDS);

  // const addMovie = () => {
  //   setListOMovies([
  //     ...MDS,
  //     {
  //       Category: 'Action/Adventure',
  //       Title: 'Batman Returns',
  //       Year: 1992,
  //       Director: 'Tim Burton',
  //       Rating: 'PG-13',
  //     },
  //   ]);
  // };

  return (
    <>
      <div>
        {/* give the h2 some style */}
        <h2 className="text-center">Joel Hilton's Movie Collection</h2>
        <br />
      </div>

      <div>
        <table className="table">
          <thead>
            <tr className="text-center">
              {/* table headers */}
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* connect to the map and get info for each thing */}
            {MDS.map((m) => (
              <tr className="text-center">
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
