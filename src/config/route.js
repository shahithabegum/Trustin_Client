import React from "react";
import { Route,Routes } from "react-router-dom";
import {pathroute} from './routeParams'

export const renderRoutues=(pathroute)=>{
    return pathroute.map((route,index)=>{
        const {path,DynComponent,isExact = true,childroutes= []}= route;
        return(
            <Route 
            key={route.key || index}
            path={path}
            exact={isExact}
            element={<DynComponent />}
            >
                {childroutes.map((childroutes,i)=>{
                    const {path, DynComponent}=childroutes;
                    return <Route key={i}
                    path={path}
                    element={<DynComponent />}
                    ></Route>
                })}
            </Route>
        )
    })
  
}

export function RootRoutes(props){
    return(
        <React.Fragment>
            <Routes>{renderRoutues(pathroute)}</Routes>
        </React.Fragment>
    )
}