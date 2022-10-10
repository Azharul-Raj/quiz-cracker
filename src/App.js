import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Statistics from './components/Statistics'
import Layouts from './layouts/Layouts';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts />,
      children: [
        {
          path: '/',
          loader: async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home/>
        },
        {
          path: '/statistics',
          element:<Statistics/>
        },
        {
          path: '/blog',
          element:<Blog/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
