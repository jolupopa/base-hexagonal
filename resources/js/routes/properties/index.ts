import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import inquiry from './inquiry'
/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/propiedades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\ListPropertiesController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ListPropertiesController.php:17
 * @route '/propiedades'
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
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/propiedades/crear',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\CreatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/CreatePropertyController.php:16
 * @route '/propiedades/crear'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/propiedades',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\StorePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/StorePropertyController.php:13
 * @route '/propiedades'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
export const show = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
show.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
show.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
show.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
    const showForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
        showForm.get = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\ShowPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ShowPropertyController.php:13
 * @route '/propiedades/{property}'
 */
        showForm.head = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
export const edit = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/propiedades/{property}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
edit.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return edit.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
edit.get = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
edit.head = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
    const editForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
        editForm.get = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Modules\Properties\Presentation\Controllers\EditPropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/EditPropertyController.php:15
 * @route '/propiedades/{property}/editar'
 */
        editForm.head = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
export const update = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
update.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return update.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
update.put = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
    const updateForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\UpdatePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/UpdatePropertyController.php:13
 * @route '/propiedades/{property}'
 */
        updateForm.put = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
export const destroy = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/propiedades/{property}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
destroy.url = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return destroy.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
destroy.delete = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
    const destroyForm = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Modules\Properties\Presentation\Controllers\DeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/DeletePropertyController.php:11
 * @route '/propiedades/{property}'
 */
        destroyForm.delete = (args: { property: string | { id: string } } | [property: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
export const forceDelete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/propiedades/{property}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
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
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
 */
forceDelete.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
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
* @see \App\Modules\Properties\Presentation\Controllers\ForceDeletePropertyController::__invoke
 * @see app/Modules/Properties/Presentation/Controllers/ForceDeletePropertyController.php:11
 * @route '/propiedades/{property}/force'
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
const properties = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
forceDelete: Object.assign(forceDelete, forceDelete),
inquiry: Object.assign(inquiry, inquiry),
}

export default properties