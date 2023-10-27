import './search.css'
import Header from '../Header';
import SearchField from './SearchField';

function Search() {
  return (
    <>
      <div className="card-container text-center mt-3">
        <Header title={"GOT | Characters"} />
        <SearchField />
      </div>
    </>
  );
}

export default Search;
