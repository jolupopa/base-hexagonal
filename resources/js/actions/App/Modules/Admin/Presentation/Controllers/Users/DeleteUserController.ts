import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\DeleteUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/DeleteUserController.php:10
 * @route '/admin/usuarios/{user}'
 */
const DeleteUserController = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeleteUserController.url(args, options),
    method: 'delete',
})

DeleteUserController.definition = {
    methods: ["delete"],
    url: '/admin/usuarios/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\DeleteUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/DeleteUserController.php:10
 * @route '/admin/usuarios/{user}'
 */
DeleteUserController.url = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
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

    return DeleteUserController.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Users\DeleteUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/DeleteUserController.php:10
 * @route '/admin/usuarios/{user}'
 */
DeleteUserController.delete = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeleteUserController.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\DeleteUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/DeleteUserController.php:10
 * @route '/admin/usuarios/{user}'
 */
    const DeleteUserControllerForm = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: DeleteUserController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Users\DeleteUserController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Users/DeleteUserController.php:10
 * @route '/admin/usuarios/{user}'
 */
        DeleteUserControllerForm.delete = (args: { user: string | { id: string } } | [user: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: DeleteUserController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    DeleteUserController.form = DeleteUserControllerForm
export default DeleteUserController