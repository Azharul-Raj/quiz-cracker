import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Quizes from './components/Quizes';
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
          path: '/topic/:topicID',
          loader: async ({params}) => {
            return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`)
          },
          element:<Quizes/>
        },
        {
          path: '/statistics',
          loader: async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics/>
        },
        {
          path: '/blog',
          element:<Blog/>
        }
      ]
    },
    {
      path: '*',
      element:<NotFound/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
