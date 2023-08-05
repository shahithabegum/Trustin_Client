import Login from '../components/log/Login'
import Forgotpassword from '../components/log/Forgotpassword'
import Resetpassword from '../components/log/Resetpassword'
import Commonlayout from '../components/commonlayout/Commonlayout'
import Landing from '../components/landing/Landing'
import CreateCompany from '../components/company/CreateCompany'
import EditCompany from '../components/company/EditCompany'
import Adduser from '../components/adduser/Adduser'
import Connect from '../components/connect/Connect'
import Signup from '../components/profile/Signup'
import Editprofile from '../components/profile/Editprofile'
import ChangePassword from '../components/profile/ChangePassword'
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
      {
        path:"/commonlayout/connect",
        DynComponent:Connect
      },  
      {
        path:"/commonlayout/password",
        DynComponent:ChangePassword
      },  
    ]
},

]