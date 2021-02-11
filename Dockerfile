# Build stage
FROM node:12-alpine as builder
RUN npm install

# Test stage
FROM builder as test
RUN npm test

# Package stage
FROM node:8.9.4-alpine
COPY --from=builder /app .