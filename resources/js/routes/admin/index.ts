import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import users from './users'
import properties from './properties'
import acl from './acl'
import categories from './categories'
/**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Analytics\Presentation\Controllers\AdminDashboardController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/AdminDashboardController.php:16
 * @route '/admin/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
users: Object.assign(users, users),
properties: Object.assign(properties, properties),
acl: Object.assign(acl, acl),
categories: Object.assign(categories, categories),
}

export default admin