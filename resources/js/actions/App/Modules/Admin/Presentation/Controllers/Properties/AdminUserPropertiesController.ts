import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
const AdminUserPropertiesController = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminUserPropertiesController.url(args, options),
    method: 'get',
})

AdminUserPropertiesController.definition = {
    methods: ["get","head"],
    url: '/admin/gestion-propiedades/usuario/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
AdminUserPropertiesController.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return AdminUserPropertiesController.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
AdminUserPropertiesController.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminUserPropertiesController.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
AdminUserPropertiesController.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AdminUserPropertiesController.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
    const AdminUserPropertiesControllerForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: AdminUserPropertiesController.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
        AdminUserPropertiesControllerForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminUserPropertiesController.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
        AdminUserPropertiesControllerForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminUserPropertiesController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    AdminUserPropertiesController.form = AdminUserPropertiesControllerForm
export default AdminUserPropertiesController