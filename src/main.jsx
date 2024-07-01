import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import  { Toaster } from 'react-hot-toast';
import AddCraftItem from './components/AddCraftItem.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MyArtAndCraftList from './components/MyArtAndCraftList.jsx';
import AllArtCraftItems from './components/AllArtCraftItems.jsx';
import CraftDetails from './components/CraftDetails.jsx';
import UpdateCraft from './components/UpdateCraft.jsx';
// import UpdateCraft from './components/UpdateCraft.jsx';
import Aos from 'aos';
import CreativeExpressions from './components/CreativeExpressions.jsx';
import CreativeExpressionsCardDetails from './CreativeExpressionsCardDetails.jsx';
import HandcraftedWonders from './components/HandcraftedWonders.jsx';
import ArtisianDelights from './ArtisianDelights.jsx';
import MasterpieceCollections from './components/MasterpieceCollections.jsx';
import ArtisticTreasures from './components/ArtisticTreasures.jsx';
import CraftedElegance from './components/CraftedElegance.jsx';
import ArtisticTreasuresCards from './components/ArtisticTreasuresCards.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/crafts')
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:"/addcraftitem",
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>

      },
      {
        path:"/myart&craftlist",
        element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/crafts')
      },{
        path:'/allart&craft',
        element:<AllArtCraftItems></AllArtCraftItems>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/crafts')
      },
      {
        path:'/crafts/:id',
        element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/crafts/${params.id}`)
      },
      {
        path:'/updateCraft/:id',
        element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/crafts/${params.id}`)
      },
      {
        path:'/CreativeExpressions',
        element:<CreativeExpressions></CreativeExpressions>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/CreativeExpressions')
      },
      {
        path:'/CreativeExpressions/:id',
        element:<PrivateRoute><CreativeExpressionsCardDetails></CreativeExpressionsCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/CreativeExpressions/${params.id}`)
      
      },
      {
        path:'/HandcraftedWonders',
        element:<HandcraftedWonders></HandcraftedWonders>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/HandcraftedWonders')
      },
      {
        path:'/HandcraftedWonders/:id',
        element:<PrivateRoute><CreativeExpressionsCardDetails></CreativeExpressionsCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/HandcraftedWonders/${params.id}`)
        
      },
      
      {
        path:'/HandcraftedWonders',
        element:<ArtisianDelights></ArtisianDelights>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/HandcraftedWonders')
      },
      {
        path:'/HandcraftedWonders/:id',
        element:<PrivateRoute><CreativeExpressionsCardDetails></CreativeExpressionsCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/HandcraftedWonders/${params.id}`)
        
      },
      {
        path:'/MasterpieceCollections',
        element:<MasterpieceCollections></MasterpieceCollections>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/MasterpieceCollections')
      },
      {
        path:'/MasterpieceCollections/:id',
        element:<PrivateRoute><CreativeExpressionsCardDetails></CreativeExpressionsCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/MasterpieceCollections/${params.id}`)
        
      },


      {
        path:'/ArtisticTreasures',
        element:<ArtisticTreasures></ArtisticTreasures>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/ArtisticTreasures')
      },

      {
        path:'/ArtisticTreasures/:id',
        element:<PrivateRoute><ArtisticTreasuresCards></ArtisticTreasuresCards></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/ArtisticTreasures/${params.id}`)
        
      },


      // {
      //   path:'/ArtisticTreasures/:id',
      //   element:<PrivateRoute><ArtisticTreasuresCards></ArtisticTreasuresCards></PrivateRoute>,
      //   loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/ArtisticTreasures/${params.id}`)
        
      // },



      {
        path:'/CraftedElegance',
        element:<CraftedElegance></CraftedElegance>,
        loader:()=>fetch('https://assignment-10-server-side-drab.vercel.app/CraftedElegance')
      },
      {
        path:'/CraftedElegance/:id',
        element:<PrivateRoute><CreativeExpressionsCardDetails></CreativeExpressionsCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-side-drab.vercel.app/CraftedElegance/${params.id}`)
        
      },

      
    ],
  },
]);



Aos.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
