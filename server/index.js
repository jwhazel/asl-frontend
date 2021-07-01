const express = require('express');
const {loadNuxt} = require('nuxt-start');
const app = express();

async function init(){
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start');
    await nuxt.listen(process.env.PORT, process.env.HOST);
}

init();