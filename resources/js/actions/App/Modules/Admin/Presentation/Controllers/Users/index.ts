import UpdateUserQuotaController from './UpdateUserQuotaController'
import IndexUserController from './IndexUserController'
import StoreUserController from './StoreUserController'
import UpdateUserController from './UpdateUserController'
import DeleteUserController from './DeleteUserController'
const Users = {
    UpdateUserQuotaController: Object.assign(UpdateUserQuotaController, UpdateUserQuotaController),
IndexUserController: Object.assign(IndexUserController, IndexUserController),
StoreUserController: Object.assign(StoreUserController, StoreUserController),
UpdateUserController: Object.assign(UpdateUserController, UpdateUserController),
DeleteUserController: Object.assign(DeleteUserController, DeleteUserController),
}

export default Users