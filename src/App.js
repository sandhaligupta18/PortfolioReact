import './App.css';
// import topbar from './components/topbar';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>
  <Navbar />
<div className='flex '>
<Sidebar />
    <Home />
</div>
   <Aboutme />
<Skills />
<Resume />


    </>
  )
}

export default App;
