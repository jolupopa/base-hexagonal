import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/gestion-propiedades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyIndexController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyIndexController.php:15
 * @route '/admin/gestion-propiedades'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
export const userProperties = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userProperties.url(args, options),
    method: 'get',
})

userProperties.definition = {
    methods: ["get","head"],
    url: '/admin/gestion-propiedades/usuario/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
userProperties.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return userProperties.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
userProperties.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userProperties.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
userProperties.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userProperties.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
    const userPropertiesForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: userProperties.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
        userPropertiesForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: userProperties.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminUserPropertiesController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminUserPropertiesController.php:14
 * @route '/admin/gestion-propiedades/usuario/{user}'
 */
        userPropertiesForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: userProperties.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    userProperties.form = userPropertiesForm
/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
export const forceDelete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/admin/gestion-propiedades/{property}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
forceDelete.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: args.property,
                }

    return forceDelete.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
forceDelete.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
    const forceDeleteForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: forceDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Admin\Presentation\Controllers\Properties\AdminPropertyForceDeleteController::__invoke
 * @see app/Modules/Admin/Presentation/Controllers/Properties/AdminPropertyForceDeleteController.php:11
 * @route '/admin/gestion-propiedades/{property}/force'
 */
        forceDeleteForm.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: forceDelete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    forceDelete.form = forceDeleteForm
const management = {
    index: Object.assign(index, index),
userProperties: Object.assign(userProperties, userProperties),
forceDelete: Object.assign(forceDelete, forceDelete),
}

export default management