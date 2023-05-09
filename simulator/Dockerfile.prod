FROM golang:latest

WORKDIR /app

COPY . .

RUN GOOS=linux go build simulator.go

CMD ["./simulator"]