import Navbar from './components/Navbar';
import Foooter from './components/Foooter';
import './App.css';
import React, { useState } from 'react'
import News from './components/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const [searchNews, setsearchNews] = useState({
    squery: 0,
    pagesize: 18,
  });


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="general" /></>
    },
    {
      path: "/entertainment",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="entertainment" /></>
    },
    {
      path: "/business",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="business" /></>
    },
    {
      path: "/health",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="health" /></>
    },
    {
      path: "/sports",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="sports" /></>
    },
    {
      path: "/science",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="science" /></>
    },
    {
      path: "/technology",
      element: <><Navbar title="NewsApp" searchNews={searchNews} setsearchNews={setsearchNews} />
        <News searchNews={searchNews} category="technology" /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

      <Foooter />

    </>

  );
}

export default App;
