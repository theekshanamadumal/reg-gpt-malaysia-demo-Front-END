

# Process to start ATrad GPT as of 2024 July:
 
STEP 1: start server in the backend
open a new terminal:
 
>> cd "Back End"
 
>> python -m main
 
 
STEP 2: Download node,npm,nvm,ng for Front end integration version 16.0.0

download the latest version:
https://nodejs.org/en/download/prebuilt-installer
 
 
STEP 3: Reinstall versions as of release

>> nvm install v16.0.0
 
>> nvm use v16.0.0
 
>> npm install -g @angular/cli@11.2.19
 
 
STEP 4: Start the FrontEnd
open a new terminal
 
>> cd "Front END"
 
>> ng build
change windows execution policy if it fails - >> Set-ExecutionPolicy Unrestricted
 
>>ng serve / ng serve --host 0.0.0.0
 
 
Step 5: Go to http:http://localhost:4200/

# Azure 
## Back End
Configuration 
    - python -m server
Environment variables
    - ANYSCALE_ENDPOINT_TOKEN
    - HUGGINGFACEHUB_API_TOKEN
    - WEBSITES_CONTAINER_START_TIME_LIMIT - 1800

## Back End
Configuration 
    
Environment variables
    - SCM_DO_BUILD_DURING_DEPLOYMENT - true

SCM_DO_BUILD_DURING_DEPLOYMENT 

# AiQAWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# ATrad_Final


# ATrad GPT

## Server Up
change directry `cd app1 - Endpoint`

run `python -m main` to activate the server Local

run `uvicorn main:app --host 192.168.10.77 --port 8000` to activate the server on the network

## Web App Up
go to new terminal

start web app run `ng serve` Localy up in `http://localhost:4200/`

start web app run `ng serve --host 192.168.10.77` to activate the server on the network


