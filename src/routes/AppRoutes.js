// core components/views
import Login from '../Views/Login/Login'
import SignUp from '../Views/SignUp/SignUp'
import Cabinet from '../Views/Cabinet/Cabinet'
// import Static from '../Views/Static'
// import Result from '../Views/Result'
// import UserSetting from '../Views/UserSetting'
// import Exercises from '../Views/Exercises'
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
  //   path: '/exercises',
  //   navbarName: 'exercises',
  //   component: Exercises
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

]

export default appRoutes
