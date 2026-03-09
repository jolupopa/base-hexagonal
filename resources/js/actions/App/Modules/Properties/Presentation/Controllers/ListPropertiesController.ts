import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
const ListPropertiesController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPropertiesController.url(options),
    method: 'get',
})

ListPropertiesController.definition = {
    methods: ["get","head"],
    url: '/propiedades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
ListPropertiesController.url = (options?: RouteQueryOptions) => {
    return ListPropertiesController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
ListPropertiesController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPropertiesController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
ListPropertiesController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPropertiesController.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
    const ListPropertiesControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListPropertiesController.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
        ListPropertiesControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPropertiesController.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
        ListPropertiesControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPropertiesController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListPropertiesController.form = ListPropertiesControllerForm
export default ListPropertiesController