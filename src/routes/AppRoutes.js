// core components/views
import Login from '../Views/Login/Login'
import SignUp from '../Views/SignUp/SignUp'
import Cabinet from '../Views/Cabinet/Cabinet'
import Home from '../Views/Home/Home'
// import Static from '../Views/Static'
// import Result from '../Views/Result'
// import UserSetting from '../Views/UserSetting'
import Execersice from '../Views/Execersice/Execersice'
// import LostPassword from '../Views/LostPassword'
// import Rating from '../Views/Rating'

const appRoutes = [
  {
    path: '/login',
    navbarName: 'LoginPage',
    component: Login
  },
  {
    path: '/sign-up',
    navbarName: 'sign-up',
    component: SignUp
  },
  {
    path: '/cabinet',
    navbarName: 'cabinet',
    component: Cabinet
  },
  {
    path: '/execersice',
    navbarName: 'execersice',
    component: Execersice
  },
  // {
  //   path: '/static',
  //   navbarName: 'static',
  //   component: Static
  // },
  // {
  //   path: '/result',
  //   navbarName: 'result',
  //   component: Result
  // },
  // {
  //   path: '/user-setting',
  //   navbarName: 'user-setting',
  //   component: UserSetting
  // },

  // {
  //   path: '/lost-password',
  //   navbarName: 'lost-password',
  //   component: LostPassword
  // },
  // {
  //   path: '/rating',
  //   navbarName: 'rating',
  //   component: Rating
  // },
  {
    path: '/',
    navbarName: 'Home',
    component: Home
  },
  // { redirect: true, path: '/', to: '/home', navbarName: 'Redirect' }
]

export default appRoutes
