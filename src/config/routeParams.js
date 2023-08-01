import Login from '../components/log/Login'
import Forgotpassword from '../components/log/Forgotpassword'
import Resetpassword from '../components/log/Resetpassword'
import Commonlayout from '../components/commonlayout/Commonlayout'
import Landing from '../components/landing/Landing'
export const pathroute=[
    {
      path:'/',
      DynComponent:Login
    }
    ,{
      path:'/forgetpassword',

      DynComponent:Forgotpassword
    },
    {
      path:'/resetpassword',
      DynComponent:Resetpassword
    },
   
    {
    path:'/commonlayout',
    DynComponent:Commonlayout,
    isExact:false,
    childroutes:[
      {
        path:"/commonlayout/landingpage",
        DynComponent:Landing
      },
          
         
    ]
},

]