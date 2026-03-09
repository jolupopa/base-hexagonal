import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
const DashboardCalendarController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardCalendarController.url(options),
    method: 'get',
})

DashboardCalendarController.definition = {
    methods: ["get","head"],
    url: '/api/calendar/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
DashboardCalendarController.url = (options?: RouteQueryOptions) => {
    return DashboardCalendarController.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
DashboardCalendarController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DashboardCalendarController.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
DashboardCalendarController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DashboardCalendarController.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
    const DashboardCalendarControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: DashboardCalendarController.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
        DashboardCalendarControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DashboardCalendarController.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
        DashboardCalendarControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: DashboardCalendarController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    DashboardCalendarController.form = DashboardCalendarControllerForm
export default DashboardCalendarController