import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
const StorePropertyInquiryController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StorePropertyInquiryController.url(options),
    method: 'post',
})

StorePropertyInquiryController.definition = {
    methods: ["post"],
    url: '/propiedades/consulta',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
StorePropertyInquiryController.url = (options?: RouteQueryOptions) => {
    return StorePropertyInquiryController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
StorePropertyInquiryController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StorePropertyInquiryController.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
    const StorePropertyInquiryControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: StorePropertyInquiryController.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyInquiryController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyInquiryController.php:12
 * @route '/propiedades/consulta'
 */
        StorePropertyInquiryControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: StorePropertyInquiryController.url(options),
            method: 'post',
        })
    
    StorePropertyInquiryController.form = StorePropertyInquiryControllerForm
export default StorePropertyInquiryController