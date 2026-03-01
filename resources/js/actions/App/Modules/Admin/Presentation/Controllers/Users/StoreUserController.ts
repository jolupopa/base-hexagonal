import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\StoreUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/StoreUserController.php:12
 * @route '/admin/usuarios'
 */
const StoreUserController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreUserController.url(options),
    method: 'post',
})

StoreUserController.definition = {
    methods: ["post"],
    url: '/admin/usuarios',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\StoreUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/StoreUserController.php:12
 * @route '/admin/usuarios'
 */
StoreUserController.url = (options?: RouteQueryOptions) => {
    return StoreUserController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\StoreUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/StoreUserController.php:12
 * @route '/admin/usuarios'
 */
StoreUserController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreUserController.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\StoreUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/StoreUserController.php:12
 * @route '/admin/usuarios'
 */
    const StoreUserControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: StoreUserController.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\StoreUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/StoreUserController.php:12
 * @route '/admin/usuarios'
 */
        StoreUserControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: StoreUserController.url(options),
            method: 'post',
        })
    
    StoreUserController.form = StoreUserControllerForm
export default StoreUserController