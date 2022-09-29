// Generate Team Card HTML
function generateTeamCards(teamArray) {
  let compiledCards = [];

  for (let i = 0; i < teamArray.length; i++) {
    let miscInfo;
    switch (teamArray[i].getRole()) {
      case "Engineer":
        miscInfo = `Github: ${teamArray[i].getGithub()}`;
        break;

      case "Intern":
        miscInfo = `School: ${teamArray[i].getSchool()}`;
        break;

      case "Manager":
        miscInfo = `Office Number: ${teamArray[i].officeNumber}`;
        break;

      default:
        console.log("Something Broke in Team Cards!");
    }
    compiledCards.push(`
        <div class="card shadow mx-2 my-3" style="width: 18rem;"> 
        <img src="./images/${teamArray[i].getRole()}.svg" alt="${teamArray[
      i
    ].getRole()} svg graphic">
            <ul class="list-group">
                <li class="list-group-item h2 font-weight-bold text-center text-white bg-dark">${teamArray[
                  i
                ].getName()}</li>
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email:${teamArray[i].email}</li>
                <li class="list-group-item">${miscInfo}</li>
            </ul>
        </div>`);
  }
  return compiledCards.join("");
}

// Generate overall HTML and insert Generated Team Cards
function generateHTMLCode(teamArray) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
            <title>My Team Members</title>
        </head>
        
        <body>
            <main>
                <section class="py-5 text-center container-fluid bg-primary">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-bold text-light">Your Team Members</h1>
                            <p class="lead text-light">Welcome Manager! Below are your current team members!</p>
                        </div>
                    </div>
                </section>
                <section class="container">
                    <div class="container-fluid row py-5 justify-content-center">
                    ${generateTeamCards(teamArray)}
                    </div>
                </section>
            </main>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>
    `;
}

module.exports = generateHTMLCode;
