import React from "react";

function Jumbotron(){

    return(
        <section id="Jumbotron project">
        <div class="uk-flex uk-flex-center">
            <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <div class="uk-card-badge uk-label">Group</div>
                <h3 class="uk-card-title">Citizen Master</h3>
                <a href="https://blitman12.github.io/Citizen-Master/" target="_blank"><img src="./assets/images/Citizen-Master.jfif"/></a>
                <p>An application where you can search for local events in a town using the TicketMaster API as well as
                    statistics on that town (such as safety) using a 0-10 rating scale using the Teleport API.</p>
            </div>
        </div>
        <hr class="uk-divider-icon"></hr>
        </section>
    );
}

export default Jumbotron