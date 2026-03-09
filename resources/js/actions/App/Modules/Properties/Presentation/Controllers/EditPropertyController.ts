import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
const EditPropertyController = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPropertyController.url(args, options),
    method: 'get',
})

EditPropertyController.definition = {
    methods: ["get","head"],
    url: '/propiedades/{property}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
EditPropertyController.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
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

    return EditPropertyController.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
EditPropertyController.get = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPropertyController.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
EditPropertyController.head = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPropertyController.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
    const EditPropertyControllerForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditPropertyController.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
        EditPropertyControllerForm.get = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPropertyController.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
        EditPropertyControllerForm.head = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPropertyController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditPropertyController.form = EditPropertyControllerForm
export default EditPropertyController