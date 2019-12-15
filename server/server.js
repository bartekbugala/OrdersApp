if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('mongo-sanitize');
const loadTestData = require('./testData');

//ew inna ścieżka ../../
const initializePassport = require('./passport-config');
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

const users = [];

// import routes
const productionsRoutes = require('./routes/productions.routes');

const app = express();

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
app.set('view-engine', 'ejs');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', checkAuthenticated, (req, res) => {
  res.redirect('index.html');
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

app.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});
app.use('/api', productionsRoutes);
/* app.use('/api', checkAuthenticated, (req, res) => {
  res.redirect(productionsRoutes);
}); */

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// mongoDB - connect backend code with db
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', err => console.log('Error ' + err));

app.listen(config.PORT, function() {
  console.log('Server is running on port:', config.PORT);
});

/// DUMMY ENDPOINT

/* app.product('/login', function(req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, function(err, data) {
    if (err) {
      res.send(err);
    } else if (data) {
      res.send('User Login Successful');
    } else {
      res.send('Wrong Username Password Combination');
    }
  });
});
 */
