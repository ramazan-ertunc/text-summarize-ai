import MainComponent from './components/MainComponent';
import Header from './components/Header';
import './App.css'
const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Header/>
            <MainComponent/>

        </div>

    </main>
  )
}

export default App