var mysql = require('mysql');

var con = mysql.createConnection({
  host: "quizbgdm.coxqxrjsrdck.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "admingdmb",
  database: "gdmb"
});

function createB() {

  con.connect(function (err) {
    if (err) {
      console.log("Error Connecting to GDMB DB - " + err.message + "\n");
    }
    else {
      console.log("Connecting to GDMB DB\n");
    }
    con.query("CREATE TABLE IF NOT EXISTS UsersB (userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))", function (err, result) {
      if (err) {
        console.log("Error create UsersB - " + err.message + "\n");
      }
      else {
        console.log("Table UsersB created\n");
      }
    });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz1B (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),hardme integer,hardthem integer,
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          console.log("Error create Quiz1B - " + err.message + "\n");
        }
        else {
          console.log("Table Quiz1B created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz2B (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
         resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          console.log("Error create Quiz2B - " + err.message + "\n");
        }
        else {
          console.log("Table Quiz2B created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS Quiz3B (userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
      firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
      secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
       resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          console.log("Error create Quiz3B - " + err.message + "\n");
        }
        else {
          console.log("Table Quiz3B created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS BQ12B (userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          console.log("Error create BQ12B - " + err.message + "\n");
        }
        else {
          console.log("Table BQ12B created\n");
        }
      });
    con.query(`CREATE TABLE IF NOT EXISTS BQ23B (userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
      resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves MEDIUMTEXT)`,
      function (err, result) {
        if (err) {
          console.log("Error create BQ23B - " + err.message + "\n");
        }
        else {
          console.log("Table BQ23B created\n");
        }
      });
  });

  //con.end();
}


function getUsersB(callback) {
  con.connect(function (err) {
    if (err) {
      console.log("Error Connecting to GDMB DB - " + err.message + "\n");
    }
    else {
      console.log("Connecting to GDMB DB\n");
    }
    let sql = `SELECT userName From UsersB`;
    con.query(sql, function (err, result) {
      if (err) {
        console.log("Error return users from 'getUsersB' function - " + err.message + "\n");
      }
      else {
        console.log("Successed return users from 'getUsersB' function\n");
        callback(null, result);
      }
    });
  });
  //con.end();
}

function insertUsersB(userName, age, gender, education) {

  con.connect(function (err) {
    if (err) {
      console.log("Error Connecting to GDMB DB - " + err.message + "\n");
    }
    else {
      console.log("Connecting to GDMB DB\n");
    }
    let sql = `INSERT INTO UsersB (userName ,age , gender ,education)
    VALUES  (?,?,?,?)`;
    con.query(sql, [userName, age, gender, education], function (err, result) {
      if (err) {
        console.log("Error close DB from 'insertUsersB' function - " + err.message + "\n");
      }
      else {
        console.log("Successed insertion user from 'insertUsersB' function\n");
      }
    });
  });

}


function insertQuiz1B(userName, minMoves, firstBox, secBox, hardme, hardthem, firstMovesRate, secondMovesRate, thirdMovesRate,
  forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
  secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
  resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    con.connect(function (err) {
      if (err) {
        console.log("Error Connecting to GDMB DB - " + err.message + "\n");
      }
      else {
        console.log("Connecting to GDMB DB\n");
      }
      let sql = `INSERT INTO Quiz1B (uuserName, minMoves, firstBox, secBox, hardme, hardthem, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
        VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        con.query(sql, [userName, minMoves, firstBox, secBox, hardme, hardthem, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves], function (err, result) {
        if (err) {
          console.log("Error insertion Quiz1B details from 'insertQuiz1B' function - " + err.message + "\n");
        }
        else {
          console.log("Successed insertion Quiz1B details from 'insertQuiz1B' function\n");
        }
      });
    });
  }

  function insertQuiz2B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
    secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
      con.connect(function (err) {
        if (err) {
          console.log("Error Connecting to GDMB DB - " + err.message + "\n");
        }
        else {
          console.log("Connecting to GDMB DB\n");
        }
        let sql = `INSERT INTO Quiz2B (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
          forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
          secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
          resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
          VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
          con.query(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], function (err, result) {
          if (err) {
            console.log("Error insertion Quiz2B details from 'insertQuiz2B' function - " + err.message + "\n");
          }
          else {
            console.log("Successed insertion Quiz2B details from 'insertQuiz2B' function\n");
          }
        });
      });
    }
    function insertQuiz3B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
      forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
      secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
      resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
        con.connect(function (err) {
          if (err) {
            console.log("Error Connecting to GDMB DB - " + err.message + "\n");
          }
          else {
            console.log("Connecting to GDMB DB\n");
          }
          let sql = `INSERT INTO Quiz3B (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
            VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            con.query(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
              forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
              secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
              resetNum, firstBoxToMove, endTime, totalMoves, histMoves], function (err, result) {
            if (err) {
              console.log("Error insertion Quiz3B details from 'insertQuiz3B' function - " + err.message + "\n");
            }
            else {
              console.log("Successed insertion Quiz3B details from 'insertQuiz3B' function\n");
            }
          });
        });
      }

      function insertBQ12B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {

        con.connect(function (err) {
          if (err) {
            console.log("Error Connecting to GDMB DB - " + err.message + "\n");
          }
          else {
            console.log("Connecting to GDMB DB\n");
          }
          let sql = `INSERT INTO BQ12B (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
          VALUES  (?,?,?,?,?,?,?,?,?)`;
          con.query(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], function (err, result) {
            if (err) {
              console.log("Error insertion BQ12B details from 'insertBQ12B' function - " + err.message + "\n");
            }
            else {
              console.log("Successed insertion BQ12B details from 'insertBQ12B' function\n");
            }
          });
        });
      
      }
      
      function insertBQ23B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {

        con.connect(function (err) {
          if (err) {
            console.log("Error Connecting to GDMB DB - " + err.message + "\n");
          }
          else {
            console.log("Connecting to GDMB DB\n");
          }
          let sql = `INSERT INTO BQ23B (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
          VALUES  (?,?,?,?,?,?,?,?,?)`;
          con.query(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], function (err, result) {
            if (err) {
              console.log("Error insertion BQ23B details from 'insertBQ23B' function - " + err.message + "\n");
            }
            else {
              console.log("Successed insertion BQ23B details from 'insertBQ23B' function\n");
            }
          });
        });
      
      }

      
      function updateBonusB(bonus, userName){

        con.connect(function (err) {
          if (err) {
            console.log("Error Connecting to GDMB DB - " + err.message + "\n");
          }
          else {
            console.log("Connecting to GDMB DB\n");
          }
          let sql = `UPDATE UsersB SET bonus = ? WHERE userName = ?`;
          con.query(sql,[bonus, userName], function (err, result) {
            if (err) {
              console.log("Error update Users bonus from 'updateBonusB' function - " + err.message + "\n");
            }
            else {
              console.log("Successed update Users bonus from 'updateBonusB' function\n");
            }
          });
        });
        con.end();
      }

      module.exports = { updateBonusB,createB, getUsersB, insertUsersB, insertQuiz1B, insertQuiz2B, insertQuiz3B, insertBQ12B, insertBQ23B };
