import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
const AdminPropertyIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminPropertyIndexController.url(options),
    method: 'get',
})

AdminPropertyIndexController.definition = {
    methods: ["get","head"],
    url: '/admin/gestion-propiedades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
AdminPropertyIndexController.url = (options?: RouteQueryOptions) => {
    return AdminPropertyIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
AdminPropertyIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminPropertyIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
AdminPropertyIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AdminPropertyIndexController.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
    const AdminPropertyIndexControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: AdminPropertyIndexController.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
        AdminPropertyIndexControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminPropertyIndexController.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
        AdminPropertyIndexControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: AdminPropertyIndexController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    AdminPropertyIndexController.form = AdminPropertyIndexControllerForm
export default AdminPropertyIndexController