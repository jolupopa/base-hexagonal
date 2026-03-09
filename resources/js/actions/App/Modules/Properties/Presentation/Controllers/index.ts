import ShowPropertyController from './ShowPropertyController'
import ListPropertiesController from './ListPropertiesController'
import CreatePropertyController from './CreatePropertyController'
import StorePropertyController from './StorePropertyController'
import EditPropertyController from './EditPropertyController'
import UpdatePropertyController from './UpdatePropertyController'
import DeletePropertyController from './DeletePropertyController'
import ForceDeletePropertyController from './ForceDeletePropertyController'
import StorePropertyInquiryController from './StorePropertyInquiryController'
const Controllers = {
    ShowPropertyController: Object.assign(ShowPropertyController, ShowPropertyController),
ListPropertiesController: Object.assign(ListPropertiesController, ListPropertiesController),
CreatePropertyController: Object.assign(CreatePropertyController, CreatePropertyController),
StorePropertyController: Object.assign(StorePropertyController, StorePropertyController),
EditPropertyController: Object.assign(EditPropertyController, EditPropertyController),
UpdatePropertyController: Object.assign(UpdatePropertyController, UpdatePropertyController),
DeletePropertyController: Object.assign(DeletePropertyController, DeletePropertyController),
ForceDeletePropertyController: Object.assign(ForceDeletePropertyController, ForceDeletePropertyController),
StorePropertyInquiryController: Object.assign(StorePropertyInquiryController, StorePropertyInquiryController),
}

export default Controllers