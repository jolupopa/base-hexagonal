import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
const DeletePropertyController = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeletePropertyController.url(args, options),
    method: 'delete',
})

DeletePropertyController.definition = {
    methods: ["delete"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
DeletePropertyController.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return DeletePropertyController.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
DeletePropertyController.delete = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DeletePropertyController.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
    const DeletePropertyControllerForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: DeletePropertyController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
        DeletePropertyControllerForm.delete = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: DeletePropertyController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    DeletePropertyController.form = DeletePropertyControllerForm
export default DeletePropertyController