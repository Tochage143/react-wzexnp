import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpages from './Pages/Mainpages';

export default function App(){
    return(
            
                    <BrowserRouter>
                            <Routes>
                                    <Route path='/'  element={<Mainpages/>} />
                                            <Route path='*' element={<h1>No pages</h1>}/>
                                                    </Routes>
                                                            </BrowserRouter>
                                                                    
                                                                            )
                                                                            }