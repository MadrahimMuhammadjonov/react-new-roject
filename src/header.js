import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        window.addEventListener("scroll", function () {
            let header = document.querySelector("header");
            header.classList.toggle("stiky", window.scrollY > 650)
        })
        return (
            <div>
                <header>
                    <a href="#" className="logo">Logo</a>
                    <ul>
                        <li><a href="#"> Bosh menu</a></li>
                        <li><a href="#"> Sahifa</a></li>
                        <li><a href="#"> Portifolio</a></li>
                        <li><a href="#"> Blog</a></li>
                        <li><a href="#"> Aloqa</a></li>
                    </ul>
                </header>
                <section className="banner">
                    <div>
                        <div className="box">
                            <div className="ceny">
                                <h2 className="log">L</h2>
                                <h2 className="log">o</h2>
                                <h2 className="log">g</h2>
                                <h2 className="log">i</h2>
                                <h2 className="log">n</h2>
                            </div>

                            <form>
                                <div className="inputbox">
                                    <input type="text" name="" required/>
                                    <label>Username</label>
                                </div>

                                <div className="inputbox">
                                    <input type="password" name="" required/>
                                    <label>password</label>
                                </div>
                                <input type="submit" name="" value="Login"/>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );

    }

}

Header.propTypes = {};

export default Header;