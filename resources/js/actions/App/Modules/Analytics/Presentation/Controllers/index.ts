import DashboardController from './DashboardController'
import DashboardCalendarController from './DashboardCalendarController'
import AdminDashboardController from './AdminDashboardController'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
DashboardCalendarController: Object.assign(DashboardCalendarController, DashboardCalendarController),
AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
}

export default Controllers