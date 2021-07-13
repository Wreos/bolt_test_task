# Test task for Bolt
# There is just MVP version of test

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Autotests are written using
- Appium
- Javascript

# Requirements
* Appium requires [Node.js](https://nodejs.org/) v10+ for launching.
* JDK is installed
* Android SDK is installed
* JAVA_HOME and ANDROID_HOME is setted
* Android emulator is installed with following params: name - Pixel, android version - 9

## Instruction
1) Run android emulator
2) Install Appium
```sh
npm install -g appium
```
3) Install Appium Client
```sh
npm install wd 
```
4) Run appium with port in index.js file 
```sh
appium --port 4725
```

## Launching tests
Go to the test directory and run
```sh
 node index.js
```

