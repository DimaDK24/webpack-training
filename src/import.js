console.log('before timeout')
setTimeout(() => {
    import(/* webpackChunkName: 'a' */'./a').then(({ default: a }) => a())
    console.log('after import')
}, 2000)
