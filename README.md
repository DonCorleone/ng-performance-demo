# Angular Ng Performance Demo

This project was generated with the [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1, by [@LX_T](https://twitter.com/LX_T) and is based upon work by [@Manfred Steyer](https://twitter.com/ManfredSteyer). It's currently using Angular V16.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `ng build:ssr` to build the project using SSR. The build artifacts will still be stored in the `dist/` directory.

## Build / push docker image, => registry.gitlab.com/l_x_t/ng-performance-demo:

**STATIC**: ./build-and-push-STATIC.sh

**SSR**: ./build-and-push-SSR.sh

## Redeploy freshly built image in portainer:

**SHOULD** be automated with webhooks.
(does not redeploy, if images are identical)

#### If no work: ####
Portainer => Stack => Editor => Update the stack & re-pull image and redeploy. 
