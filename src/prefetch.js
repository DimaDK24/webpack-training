console.log('before timeout')
setTimeout(() => {
    import(/* webpackChunkName: 'a', webpackPrefetch: true, */ './a').then(({ default: a }) => a())
    console.log('after import')
}, 2000)
