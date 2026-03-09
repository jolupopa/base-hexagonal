import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
const PublicPropertyController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicPropertyController.url(options),
    method: 'get',
})

PublicPropertyController.definition = {
    methods: ["get","head"],
    url: '/propiedades-publico',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
PublicPropertyController.url = (options?: RouteQueryOptions) => {
    return PublicPropertyController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
PublicPropertyController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PublicPropertyController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
PublicPropertyController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PublicPropertyController.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
    const PublicPropertyControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: PublicPropertyController.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
        PublicPropertyControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PublicPropertyController.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Public\Presentation\Controllers\PublicPropertyController::__invoke
 * @see app/Modules/Public/Presentation/Controllers/PublicPropertyController.php:15
 * @route '/propiedades-publico'
 */
        PublicPropertyControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PublicPropertyController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    PublicPropertyController.form = PublicPropertyControllerForm
export default PublicPropertyController