import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard
      lastname="Doe"
      firstname="Jane"
      age={45}
      hairColor="Black"
      />
      <PersonCard
      lastname="Smith"
      firstname="John"
      age={88}
      hairColor="Brown"
      />
      <PersonCard
      lastname="Fillmore"
      firstname="Millord"
      age={50}
      hairColor="Brown"
      />
      <PersonCard
      lastname="Smith"
      firstname="Maria"
      age={62}
      hairColor="Brown"
      />
    </div>
  );
}

export default App;
