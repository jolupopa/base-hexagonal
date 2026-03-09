import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
export const events = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})

events.definition = {
    methods: ["get","head"],
    url: '/api/calendar/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
events.url = (options?: RouteQueryOptions) => {
    return events.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
events.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
events.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: events.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
    const eventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: events.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
        eventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Analytics\Presentation\Controllers\DashboardCalendarController::__invoke
 * @see app/Modules/Analytics/Presentation/Controllers/DashboardCalendarController.php:12
 * @route '/api/calendar/events'
 */
        eventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    events.form = eventsForm
const calendar = {
    events: Object.assign(events, events),
}

export default calendar