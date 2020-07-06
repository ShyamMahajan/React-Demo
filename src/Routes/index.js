import User from '../Views/User'
import UserEdit from '../Views/UserEdit'

const layoutRoutes = [
    {path : "/users", component:User},
    {path : "/users/add", component:UserEdit},
    {path : "/users/edit/:id", component:UserEdit}
];

export default layoutRoutes