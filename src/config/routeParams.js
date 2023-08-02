import Login from '../components/log/Login'
import Forgotpassword from '../components/log/Forgotpassword'
import Resetpassword from '../components/log/Resetpassword'
import Commonlayout from '../components/commonlayout/Commonlayout'
import Landing from '../components/landing/Landing'
import Signup from '../components/log/Signup'
import CreateCompany from '../components/company/CreateCompany'
import EditCompany from '../components/company/EditCompany'
import Editprofile from '../components/log/Editprofile'
import Adduser from '../components/adduser/Adduser'
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
      path:'/signup',

      DynComponent:Signup
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
      {
        path:"/commonlayout/company",
        DynComponent:CreateCompany
      },    
      {
        path:"/commonlayout/editcompany",
        DynComponent:EditCompany
      },  
      {
        path:"/commonlayout/edituser",
        DynComponent:Editprofile
      },
      {
        path:"/commonlayout/adduser",
        DynComponent:Adduser
      },  
    ]
},

]