var fs = require('fs');
var path = require('path');

// Add all the application folder names you want to create shortcuts
// 'spa_common',
[
    'spa_account/app'
].forEach(function(app) {
    var source = path.resolve('restaurant/' + app),
        destination = path.resolve('node_modules/' + app.replace('/app', ''));

    fs.exists(destination, function(err) {
        if (!err) {
            console.log('Symlink created for ', app);
            fs.symlinkSync(source, destination, 'dir');
        }
    });

});

console.log('Symlink check is done');
