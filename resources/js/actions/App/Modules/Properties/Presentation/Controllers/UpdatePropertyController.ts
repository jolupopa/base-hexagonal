import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
const UpdatePropertyController = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: UpdatePropertyController.url(args, options),
    method: 'put',
})

UpdatePropertyController.definition = {
    methods: ["put"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
UpdatePropertyController.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
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

    return UpdatePropertyController.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
UpdatePropertyController.put = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: UpdatePropertyController.url(args, options),
    method: 'put',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
    const UpdatePropertyControllerForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: UpdatePropertyController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
        UpdatePropertyControllerForm.put = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: UpdatePropertyController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    UpdatePropertyController.form = UpdatePropertyControllerForm
export default UpdatePropertyController