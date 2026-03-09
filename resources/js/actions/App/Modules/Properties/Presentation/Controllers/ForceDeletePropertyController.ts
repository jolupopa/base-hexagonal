import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
const ForceDeletePropertyController = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ForceDeletePropertyController.url(args, options),
    method: 'delete',
})

ForceDeletePropertyController.definition = {
    methods: ["delete"],
    url: '/propiedades/{property}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
ForceDeletePropertyController.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ForceDeletePropertyController.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
ForceDeletePropertyController.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ForceDeletePropertyController.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
    const ForceDeletePropertyControllerForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: ForceDeletePropertyController.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
        ForceDeletePropertyControllerForm.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: ForceDeletePropertyController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    ForceDeletePropertyController.form = ForceDeletePropertyControllerForm
export default ForceDeletePropertyController