const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
const app = express();
const DIST_DIR = path.join(__dirname, "../build");
app.use(express.static(DIST_DIR));
app.get( '*', ( req, res ) => {
  res.status( 200 );
  return res.sendFile(path.join(DIST_DIR, "index.html"));
  } );
app.listen( 3000, () => {
    console.log( 'Express server started at <http://localhost:3000>' );
} );
