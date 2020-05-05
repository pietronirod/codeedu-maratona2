FROM golang:alpine as builder

WORKDIR /usr/local/app
COPY ./src/helloworld.go ./
RUN env GOOS=linux go build helloworld.go

FROM scratch
COPY --from=builder /usr/local/app/helloworld ./

CMD ["./helloworld"]


