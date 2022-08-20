import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navigation } from './components/Navigation';
import { Blogs} from './components/Blogs';
import { CreateBlog } from './components/CreateBlog';
import { Create } from './components/Create';




function App() {
    return (
        <div class="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/log' element={<Login />}/>
                    <Route path='/regis' element={<Register />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/createblog" element={<CreateBlog />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
