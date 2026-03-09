import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
const StorePropertyController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StorePropertyController.url(options),
    method: 'post',
})

StorePropertyController.definition = {
    methods: ["post"],
    url: '/propiedades',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
StorePropertyController.url = (options?: RouteQueryOptions) => {
    return StorePropertyController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
StorePropertyController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StorePropertyController.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
    const StorePropertyControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: StorePropertyController.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
        StorePropertyControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: StorePropertyController.url(options),
            method: 'post',
        })
    
    StorePropertyController.form = StorePropertyControllerForm
export default StorePropertyController