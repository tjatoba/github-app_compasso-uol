import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ProfileUserPage from "../pages/ProfileUserPage/ProfileUserPage"
import FindUserPage from "../pages/FindUserPage/FindUserPage"
import StarredProjectsPage from "../pages/StarredProjectsPage/StarredPojectsPage"
import UserReposPage from "../pages/UserReposPage/UserReposPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <FindUserPage/>
                </Route>
                <Route exact path="/profile/:username">
                    <ProfileUserPage/>
                </Route>
                <Route exact path="/starred/:username">
                    <StarredProjectsPage/>
                </Route>
                <Route exact path="/repos/:username">
                    <UserReposPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 