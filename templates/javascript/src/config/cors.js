const whitelist = [process.env.CLIENT_URL]; // Add your allowed origins here

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};

export default corsOptions;
