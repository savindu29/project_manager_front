import {Button, Card, CardActions, CardContent, Stack, Typography} from '@mui/material';
import React, {useState} from 'react';
import MiniDrawer from "../../layouts/side-bar";
import "./styles/styles.css"

function ShowFunction(){
    const [visible,SetChecked]=useState(false);

    const checkBox = () =>{
        SetChecked(!visible)
    }

    const [serviceList,setServiceList] = useState([{service: ""},{service: ""}])



    return (
        <div className="box1">
            <div className="container">
                <MiniDrawer/>
                <div className="text">
                    New Project
                </div>
                <form>
                    <h2>Project Details</h2>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Project Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Priority</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Customer Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Client's Country</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Client's Project Lead/Project Manager </label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Email</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Conatact Number</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Quoted Value </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Quoting Rate</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">AMC Value </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input
                                type="text"
                                required
                            />
                            <div className="underline"></div>
                            <label htmlFor="">Total Man Hours</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Status</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>Third Party project?</label>
                        <div className={"checkbox"}>
                            <input type="checkbox" value="1" checked={visible} onChange={checkBox}/>
                        </div>

                    </div>
                    { visible &&
                        <div>
                            <h2>Partner details</h2>
                            <div className="form-row">
                                <div className="input-data">
                                    <input
                                        type="text"
                                        required
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="">Company Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Project Lead's Name</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input
                                        type="text"
                                        required
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="">Project Lead's Email</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Project Lead's Conatact Number</label>
                                </div>
                            </div>
                        </div>
                    }



                    <h2>Inova Details</h2>

                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Designation</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Contact Number</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Email</label>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Project Lead's Private Email</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Specialized Field</label>
                        </div>

                    </div>

                    <h2>Project Estimators</h2>

                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Designation</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label htmlFor="">Designation</label>
                        </div>

                    </div>


                    <h2>Other Details</h2>


                    <div className="form-row">
                        <div className="underline"></div>

                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <label htmlFor="">To Do</label>

                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="underline"></div>

                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <label htmlFor="">RFP resources Description</label>

                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="underline"></div>

                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <label htmlFor="">RFP Resources Locations</label>

                            <br />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Clarification Discussion Details</label>
                            <br />
                        </div>

                    </div>


                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Outputs from Inova Description</label>
                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Outputs from Inova Location</label>
                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Clarification Discussion Details</label>
                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Impl. Success/Faliure Reasons</label>
                            <br />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea  required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label htmlFor="">Lessons Learned</label>
                            <br />
                        </div>
                    </div>








                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="submit"/>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default ShowFunction;