exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['demo.spec.js'],
    multiCapabilities: [{
        browserName: 'chrome'
    }]
  };