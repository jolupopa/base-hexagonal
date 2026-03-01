import Public from './Public'
import Company from './Company'
import Analytics from './Analytics'
import Properties from './Properties'
import CRM from './CRM'
import Billing from './Billing'
import Admin from './Admin'
const Modules = {
    Public: Object.assign(Public, Public),
Company: Object.assign(Company, Company),
Analytics: Object.assign(Analytics, Analytics),
Properties: Object.assign(Properties, Properties),
CRM: Object.assign(CRM, CRM),
Billing: Object.assign(Billing, Billing),
Admin: Object.assign(Admin, Admin),
}

export default Modules