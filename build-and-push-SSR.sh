#!/usr/bin/env bash

docker build -t registry.gitlab.com/l_x_t/ng-performance-demo:ssr . -f Dockerfile-SSR
docker push registry.gitlab.com/l_x_t/ng-performance-demo:ssr
