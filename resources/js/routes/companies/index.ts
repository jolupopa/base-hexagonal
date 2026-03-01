import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Company\Presentation\Controllers\StoreCompanyController::__invoke
 * @see app/Modules/Company/Presentation/Controllers/StoreCompanyController.php:12
 * @route '/companies'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const companies = {
    store: Object.assign(store, store),
}

export default companies