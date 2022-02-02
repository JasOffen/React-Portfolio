import React from "react";

function Projects(){

    return(
        <section id="Projects">
             <div class="uk-child-width-expand@s uk-text-center" uk-grid id="smallCards">
                <div>
                    <a href="https://jasoffen.github.io/WeatherApplication/" target="_blank">
                        <img src="./assets/images/WeatherApplication.png" />
                        <div class="uk-card uk-card-default uk-card-body">5 day weather forecast</div>
                    </a>
                </div>
                <div>
                    <a href="https://jasoffen.github.io/WorkDaySchedular/" target="_blank">
                        <img src="./assets/images/WorkCalendar.png" />
                        <div class="uk-card uk-card-default uk-card-body">Daily Planner with average working hours of
                            9-5
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://jasoffen.github.io/Code-Quiz/" target="_blank">
                        <img src="../public/assets/" />
                        <div class="uk-card uk-card-default uk-card-body">This is a 6 Question coding challenge.</div>
                    </a>
                </div>
                <div>
                    <a href="https://jasoffen.github.io/Password-Generator/" target="_blank">
                        <img src="./assets/images/PasswordGenerator.png" />
                        <div class="uk-card uk-card-default uk-card-body">Generates a password based on user input</div>
                    </a>
                </div>
            </div>
            <div class="uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                    <a href="./old/index.html" target="_blank">
                        <img src="./assets/images/old-portfolio.png" />
                        <div class="uk-card uk-card-default uk-card-body">
                            <p>First attempt at a portfolio</p>
                        </div>
                    </a>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body"></div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body"></div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body"></div>
                </div>
            </div>
        </section>
    );
}

export default Projects;