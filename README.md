# node-datadog

# Installation
    npm install node-datadog-logging

# Usage
    var logger = require('node-datadog-logging');

    let message='log from node to datadog';

    let apiKey='YOUR DATADOG API KEY';

    let env='dev or prod';

    let source='source name';

    let hostname='your hostname';

    logger.sendLog(message, apiKey, env, source, hostname);
