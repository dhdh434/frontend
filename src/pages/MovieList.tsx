import { useEffect, useState } from 'react';
import { Movies } from '../movieType';

function FoodList() {
  const [foodData, setFoodData] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setFoodData(temp);
    };

    fetchFood();
  }, []);

  return (
    <>
      <div className="row">
        <h2 className="text-center">Joel Hilton's Movie Collection</h2>
        <br />
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr className="text-center" key={f.movieId}>
              <td>{f.title}</td>
              <td>{f.category}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
