import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserQuotaController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserQuotaController.php:11
 * @route '/admin/users/{user}/quota'
 */
const UpdateUserQuotaController = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateUserQuotaController.url(args, options),
    method: 'post',
})

UpdateUserQuotaController.definition = {
    methods: ["post"],
    url: '/admin/users/{user}/quota',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserQuotaController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserQuotaController.php:11
 * @route '/admin/users/{user}/quota'
 */
UpdateUserQuotaController.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return UpdateUserQuotaController.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserQuotaController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserQuotaController.php:11
 * @route '/admin/users/{user}/quota'
 */
UpdateUserQuotaController.post = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UpdateUserQuotaController.url(args, options),
    method: 'post',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserQuotaController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserQuotaController.php:11
 * @route '/admin/users/{user}/quota'
 */
    const UpdateUserQuotaControllerForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: UpdateUserQuotaController.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserQuotaController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserQuotaController.php:11
 * @route '/admin/users/{user}/quota'
 */
        UpdateUserQuotaControllerForm.post = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: UpdateUserQuotaController.url(args, options),
            method: 'post',
        })
    
    UpdateUserQuotaController.form = UpdateUserQuotaControllerForm
export default UpdateUserQuotaController