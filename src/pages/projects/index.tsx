import React, {useState} from 'react';
import MiniDrawer from "../../layouts/side-bar";
import "./styles/styles.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



import "react-datepicker/dist/react-datepicker.css";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function ShowFunction(){
    const [visible,SetChecked]=useState(false);

    const checkBox = () =>{
        SetChecked(!visible)
    }
    const [age, setAge] = React.useState('');







    const [visiblity, setVisible] = useState(false);

    const [a, setVisi] = useState(false);

    const [personName, setPersonName] = React.useState<string[]>([]);

    const [personNames, setPersonNames] = React.useState<string[]>([]);


    const handleChanges = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChanges2 = (event: SelectChangeEvent<typeof personNames>) => {
        const {
            target: { value },
        } = event;
        setPersonNames(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const Example = () => {
        const [startDate, setStartDate] = useState(new Date());}




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
                            <label htmlFor="">Client's Lead's Email</label>
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
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Latest Project Status Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Initiation Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Proposed Implementation Start Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Proposed Implementation End Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Actual Implementation Start Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Implementation Due Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Actual Implementation End Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="input-data">

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
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-checkbox-label">project Leads</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleChanges}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className={"radio"}>
                        <label className="radio label"> Add New Project Lead: </label>

                                Yes <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setVisible(true)} />

                                No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisible(false)} />

                    </div>


                    { visiblity &&
                        <div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Project Lead's Name</label>
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
                                    <label htmlFor="">Project Lead's Contact Number</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Project Lead's Private Email</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Specified Field</label>
                                </div>
                            </div>

                        </div>
                    }

                    <h2>Project Estimators</h2>
                    <div className="form-row">
                        <div className="input-data">
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-checkbox-label">Project Estimators</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personNames}
                                    onChange={handleChanges2}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personNames.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={"radio"}>
                        <label className="col-sm-3 col-form-label"><span> Add New Project Estimators: </span></label>
                        Yes <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setVisi(true)} />

                        No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisi(false)} />

                    </div>

                    {a &&
                        <div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Effort Estimator's Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Effort Estimator's Email</label>
                                </div>

                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Effort Estimator's Contact Number</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Effort Estimator's Private Email</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Specified Field</label>
                                </div>
                            </div>

                        </div>}


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