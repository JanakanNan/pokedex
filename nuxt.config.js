export default {
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content:'width=device-width, initial-scale=1'},
            {hid: 'description', name:'description', content: process.env.npm_package_description || ''}
        ],
        script: [
            {src: ''}
        ],
        link: [
            {rel:'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'}
        ]
    },
}