const express = require('express');
const { IpFilter } = require('express-ipfilter');

// Create Express app
const app = express();

// Define whitelisted IPs
const ips = ['127.0.0.1', '::1'];

// Configure IP filter middleware
app.use(IpFilter(ips, { mode: 'allow' }));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World! Your IP is whitelisted.');
});

// Error handler for IP filtering
app.use((err, req, res, next) => {
  if (err.name === 'IpDeniedError') {
    res.status(403).send('Access denied: Your IP is not allowed');
  } else {
    next(err);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Allowed IPs: ${ips.join(', ')}`);
}); 