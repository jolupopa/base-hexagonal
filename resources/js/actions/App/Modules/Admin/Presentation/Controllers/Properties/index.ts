import AdminPropertyIndexController from './AdminPropertyIndexController'
import AdminUserPropertiesController from './AdminUserPropertiesController'
import AdminPropertyForceDeleteController from './AdminPropertyForceDeleteController'
const Properties = {
    AdminPropertyIndexController: Object.assign(AdminPropertyIndexController, AdminPropertyIndexController),
AdminUserPropertiesController: Object.assign(AdminUserPropertiesController, AdminUserPropertiesController),
AdminPropertyForceDeleteController: Object.assign(AdminPropertyForceDeleteController, AdminPropertyForceDeleteController),
}

export default Properties