import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/propiedades/consulta',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const inquiry = {
    store: Object.assign(store, store),
}

export default inquiry