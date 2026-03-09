import HomeController from './HomeController'
import PublicPropertyController from './PublicPropertyController'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
PublicPropertyController: Object.assign(PublicPropertyController, PublicPropertyController),
}

export default Controllers