import Weather from '../components/Weather';
import '../../globals.css'; 


function App() {

  return (
    <div className="App mx-auto mt-12 w-11/12 max-w-lg rounded-2xl h-118 p-5 text-center bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
      <Weather />
    </div>
  );
}

export default App;

