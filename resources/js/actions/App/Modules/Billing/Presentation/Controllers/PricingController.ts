import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
const PricingController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PricingController.url(options),
    method: 'get',
})

PricingController.definition = {
    methods: ["get","head"],
    url: '/billing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
PricingController.url = (options?: RouteQueryOptions) => {
    return PricingController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
PricingController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PricingController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
PricingController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PricingController.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
    const PricingControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: PricingController.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
        PricingControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PricingController.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Billing\Presentation\Controllers\PricingController::__invoke
 * @see app/Modules/Billing/Presentation/Controllers/PricingController.php:12
 * @route '/billing'
 */
        PricingControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: PricingController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    PricingController.form = PricingControllerForm
export default PricingController