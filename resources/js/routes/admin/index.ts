import users from './users'
import acl from './acl'
const admin = {
    users: Object.assign(users, users),
acl: Object.assign(acl, acl),
}

export default admin