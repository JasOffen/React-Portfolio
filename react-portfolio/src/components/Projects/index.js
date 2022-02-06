import React from "react";

function Projects(){

    return(
        <section id="Projects">
            <div uk-filter="target: .js-filter">
                <ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center">
                <li class="uk-active" uk-filter-control=""><a href="#">All</a></li>
                    <li uk-filter-control="[data-type*='React']"><a href="#">React</a></li>
                    <li uk-filter-control="[data-type*='Group']"><a href="#">Group</a></li>
                    <li uk-filter-control="[data-type*='MongoDB']"><a href="#">MongoDB</a></li>
                    <li uk-filter-control="[data-type*='HTML']"><a href="#">HTML</a></li>
                    <li uk-filter-control="[data-type*='CSS']"><a href="#">CSS</a></li>
                    <li uk-filter-control="[data-type*='Javascript']"><a href="#">Javascript</a></li>
                    <li uk-filter-control="[data-type*='Legacy']"><a href="#">Legacy</a></li>
                    <li uk-filter-control="[data-type*='API']"><a href="#">API</a></li>
                </ul>
                <ul className="js-filter uk-child-width-1-2 uk-child-width-1-2@m uk-flex-wrap uk-flex uk-flex-center" uk-grid>
                    <div data-type="API Javascript">
                        <div className="uk-card uk-card-body">
                            <a href="https://jasoffen.github.io/WeatherApplication/" target="_blank">
                                <img src="./assets/images/WeatherApplication.png"/>
                                <div className="uk-card uk-card-default uk-card-body">5 day weather forecast</div>
                            </a>
                        </div>
                    </div>
                    <div data-type="Javascript">
                        <div className="uk-card uk-card-body">
                            <a href="https://jasoffen.github.io/WorkDaySchedular/" target="_blank">
                                <img src="./assets/images/WorkCalendar.png"/>
                                <div className="uk-card uk-card-default uk-card-body">
                                    Daily Planner with average working hours of 9-5
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-type="Javascript">
                        <div className="uk-card uk-card-body">
                            <a href="https://jasoffen.github.io/Code-Quiz/" target="_blank">
                                <img src="./assets/images/CodeQuiz.png"/>
                                <div className="uk-card uk-card-default uk-card-body">
                                    This is a 6 Question coding challenge.
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-type="Javascript">
                        <div className="uk-card uk-card-body">
                            <a href="https://jasoffen.github.io/Password-Generator/" target="_blank">
                                <img src="./assets/images/PasswordGenerator.png"/>
                                <div className="uk-card uk-card-default uk-card-body">Generates a password based on user input</div>
                            </a>
                        </div>
                    </div>
                    <div data-type="HTML Legacy">
                        <div className="uk-card uk-card-body">
                            <a href="./old/index.html" target="_blank">
                                <img src="./assets/images/old-portfolio.png"/>
                                <div className="uk-card uk-card-default uk-card-body">
                                    <p>First attempt at a portfolio</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}

export default Projects;