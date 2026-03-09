import Auth from './Auth'
import Public from './Public'
import Properties from './Properties'
import Company from './Company'
import Analytics from './Analytics'
import CRM from './CRM'
import Billing from './Billing'
import Profile from './Profile'
import Admin from './Admin'
import Categories from './Categories'
const Modules = {
    Auth: Object.assign(Auth, Auth),
Public: Object.assign(Public, Public),
Properties: Object.assign(Properties, Properties),
Company: Object.assign(Company, Company),
Analytics: Object.assign(Analytics, Analytics),
CRM: Object.assign(CRM, CRM),
Billing: Object.assign(Billing, Billing),
Profile: Object.assign(Profile, Profile),
Admin: Object.assign(Admin, Admin),
Categories: Object.assign(Categories, Categories),
}

export default Modules