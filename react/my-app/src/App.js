import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

var people = [
  {
    id: 1,
    name: "Mark",
    last_name: "Otto",
    sn: "mdo",
    check: true,
  },
  {
    id: 2,
    name: "Jacob",
    last_name: "Thornton",
    sn: "fat",
    check: false,
  },
  {
    id: 3,
    name: "Larry",
    last_name: "the brid",
    sn: "ftwitter",
    check: false,
  },
];

function App() {
  return (
    <div className="App">
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"></script>
      <h1>Mi primera tabla en React</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">check</th>
          </tr>
        </thead>
        <tbody>
          {people.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.sn}</td>
                {item.check ? <i><FontAwesomeIcon icon={faCheck} /></i> : <i><FontAwesomeIcon icon={faTimes} /></i>}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <i class="fas fa-check"></i>
      </div>
    </div>
  );
}

export default App;
