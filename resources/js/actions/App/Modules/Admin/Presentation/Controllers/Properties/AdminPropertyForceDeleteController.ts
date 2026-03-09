import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
const AdminPropertyForceDeleteController = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: AdminPropertyForceDeleteController.url(args, options),
    method: 'delete',
})

AdminPropertyForceDeleteController.definition = {
    methods: ["delete"],
    url: '/admin/gestion-propiedades/{property}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
AdminPropertyForceDeleteController.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: args.property,
                }

    return AdminPropertyForceDeleteController.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
AdminPropertyForceDeleteController.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: AdminPropertyForceDeleteController.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
    const AdminPropertyForceDeleteControllerForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: AdminPropertyForceDeleteController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
        AdminPropertyForceDeleteControllerForm.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: AdminPropertyForceDeleteController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    AdminPropertyForceDeleteController.form = AdminPropertyForceDeleteControllerForm
export default AdminPropertyForceDeleteController