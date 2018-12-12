#!/usr/bin/env node

const index = require('../src/index.js')

let args = process.argv.splice(process.execArgv.length + 2)

index.generateDocs(args)
