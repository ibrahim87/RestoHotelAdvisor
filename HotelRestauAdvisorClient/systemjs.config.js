(function (global) {
    var paths = {
        // paths serve as alias
        'npm:': 'node_modules/'
    }
    var map = {
        'app': 'app',
        '@angular': 'npm:@angular',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'rxjs': 'npm:rxjs',
        /** Path for ng2-file-upload */
        'ng2-file-upload' : 'npm:ng2-file-upload',
        /** Path for ng2-file-upload */
        'ng2-filter-pipe': 'node_modules/ng2-filter-pipe'
    };
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'},
        /** Configuration for ng2-file-upload */
        'ng2-file-upload' : {
            main: './ng2-file-upload.js',
            defaultExtension: 'js'
        },
        'ng2-filter-pipe': { main: 'dist/index.js' }

        /** Configuration for ng2-file-upload */
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',];
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    });
    var config = {paths: paths, map: map, packages: packages}
    System.config(config);
})(this);