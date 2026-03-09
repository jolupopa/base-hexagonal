import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
const ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3 = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, options),
    method: 'get',
})

ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.definition = {
    methods: ["get","head"],
    url: '/propiedad/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
    const ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3Form = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
        ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3Form.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedad/{property}'
 */
        ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3Form.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3.form = ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3Form
    /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
const ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5 = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, options),
    method: 'get',
})

ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.definition = {
    methods: ["get","head"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
    const ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5Form = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
        ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5Form.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
        ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5Form.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5.form = ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5Form

const ShowPropertyController = {
    '/propiedad/{property}': ShowPropertyController8afc57730cd7fd7d198b6ea18f5307f3,
    '/propiedades/{property}': ShowPropertyController0f0fd6613739f7d5abe9babfe05c33d5,
}

export default ShowPropertyController