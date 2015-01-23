{
    appDir: '../requirejs-demo',
    baseUrl: 'js/lib',
    paths: {
        web: '../web'
    },
    dir: '../requirejs-demo-dist',
    modules: [
        //配置通用模块js        {
            //module names are relative to baseUrl
            name: '../common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
            ]
        },
        //配置页面特有的js
        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //require in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: '../demo1',
            include: ['web/masonry1'],
            exclude: ['../common']
        }
    ]
}
