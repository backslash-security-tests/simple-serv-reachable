# Express IP Filter Server

A simple Node.js server that uses express-ipfilter version 1.3.2 to restrict access to specific IP addresses.

## Setup

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

The server will run on port 3000 by default. You can change this by setting the PORT environment variable.

## IP Filtering

By default, the server only allows connections from:
- 127.0.0.1 (localhost)
- ::1 (IPv6 localhost)

You can modify the allowed IPs by editing the `ips` array in `server.js`.

## Testing

- Access from an allowed IP: You'll see "Hello World! Your IP is whitelisted."
- Access from a blocked IP: You'll see "Access denied: Your IP is not allowed" with a 403 status code. 