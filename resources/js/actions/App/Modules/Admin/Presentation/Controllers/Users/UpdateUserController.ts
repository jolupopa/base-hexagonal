import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserController.php:11
 * @route '/admin/usuarios/{user}'
 */
const UpdateUserController = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: UpdateUserController.url(args, options),
    method: 'put',
})

UpdateUserController.definition = {
    methods: ["put"],
    url: '/admin/usuarios/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserController.php:11
 * @route '/admin/usuarios/{user}'
 */
UpdateUserController.url = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return UpdateUserController.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserController.php:11
 * @route '/admin/usuarios/{user}'
 */
UpdateUserController.put = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: UpdateUserController.url(args, options),
    method: 'put',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserController.php:11
 * @route '/admin/usuarios/{user}'
 */
    const UpdateUserControllerForm = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: UpdateUserController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\UpdateUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/UpdateUserController.php:11
 * @route '/admin/usuarios/{user}'
 */
        UpdateUserControllerForm.put = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: UpdateUserController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    UpdateUserController.form = UpdateUserControllerForm
export default UpdateUserController