import ListPropertiesController from './ListPropertiesController'
import CreatePropertyController from './CreatePropertyController'
const Controllers = {
    ListPropertiesController: Object.assign(ListPropertiesController, ListPropertiesController),
CreatePropertyController: Object.assign(CreatePropertyController, CreatePropertyController),
}

export default Controllers