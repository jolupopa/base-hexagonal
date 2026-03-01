import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
const StoreCompanyController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreCompanyController.url(options),
    method: 'post',
})

StoreCompanyController.definition = {
    methods: ["post"],
    url: '/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
StoreCompanyController.url = (options?: RouteQueryOptions) => {
    return StoreCompanyController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
StoreCompanyController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: StoreCompanyController.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
    const StoreCompanyControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: StoreCompanyController.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
        StoreCompanyControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: StoreCompanyController.url(options),
            method: 'post',
        })
    
    StoreCompanyController.form = StoreCompanyControllerForm
export default StoreCompanyController