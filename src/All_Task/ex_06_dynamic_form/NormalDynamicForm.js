import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DynamicNoramal() {

    const eduLevel = ["Under Graduate", "Graduate", "Post Graduate", "PhD"];

    const [data, setData] = useState({
        basicInfo: {
            firstName: "",
            lastName: ""
        },
        education: [{
            uniName: "",
            startDate: "",
            endDate: "",
            educationLevel: ""
        }]
    });



    const addmore = () => {

        let m = [...data.education];
        m.push({
            uniName: "",
            startDate: "",
            endDate: "",
            educationLevel: ""
        });

        setData({ ...data, education: m });

    }

    const deleteEducation = (index) => {
        let m = [...data.education];
        m.splice(index, 1);
        setData({ ...data, education: m });
    }

    const myhandler = (e) => {
        const { name, value } = e.target;

        let mydata = { ...data };
        let d = name.split(".");

        // if(name.includes("firstName")|| name.includes("lastName"))
        // {
        //     let d = name.split(".");
        //     mydata[d[0]][d[1]] = value;
        // }

        if (!Array.isArray(mydata[d[0]])) {

            mydata[d[0]][d[1]] = value;
        }
        else {
            let field = d[1].split("[")[0];
            let index = Number(d[1].substr(-2, 1));
            mydata[d[0]][index][field] = value;
        }

        setData(mydata);

    }

    const mySave = (e) => {

        e.preventDefault();

        console.log(data);

    }


    return (

        <div>

            <h2 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>Education Detail</h2>


            <form onSubmit={mySave}>

                <div>
                    <Box sx={{ m: 2 }}>
                        <TextField sx={{ width: '20%', mr: 1 }} name='basicInfo.firstName' label='firstName' onChange={myhandler} variant="outlined" />
                        <TextField sx={{ width: '20%', mr: 1 }} name='basicInfo.lastName' label='lastName' onChange={myhandler} variant="outlined" />
                    </Box>

                    {
                        data.education.map((value, index) => {

                            return (
                                <Box sx={{ m: 2 }}>

                                    <TextField sx={{ width: '20%', mr: 1 }} name={`education.uniName[${index}]`} label='University' variant="outlined" onChange={myhandler} />


                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Basic example"
                                            name={`education.startDate[${index}]`}
                                            value={data.education.startDate}
                                            onChange={()=>myhandler}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider> */}


                                    <TextField sx={{ width: '18%', mr: 1 }} type="date" name={`education.startDate[${index}]`} InputLabelProps={{ shrink: true }} label="Start Date" variant="outlined" onChange={myhandler} />


                                    <TextField sx={{ width: '18%', mr: 1 }} type="date" name={`education.endDate[${index}]`} InputLabelProps={{ shrink: true }} label="End Date" variant="outlined" onChange={myhandler} />


                                    <FormControl sx={{ width: '18%', mr: 1 }}>
                                        <InputLabel id="demo-simple-select-label ">Education Level</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={data.education.eduLevel}
                                            label="Education Level"
                                            onChange={myhandler}
                                            name={`education.educationLevel[${index}]`}
                                        >
                                            {
                                                eduLevel.map((edu) => {
                                                    return (
                                                        <MenuItem value={edu}>{edu}</MenuItem>)
                                                })
                                            }

                                        </Select>
                                    </FormControl>

                                    {
                                        index == 0 ? "" : <Button sx={{ p: 1, m: 1, width: '10%' }} type='button' variant="contained" startIcon={<DeleteIcon />} onClick={() => { deleteEducation(index) }}>Delete</Button>
                                    }
                                    {
                                        index == data.education.length - 1 ? <Button type='button' sx={{ p: 1, m: 1, width: '10%', height: '20%' }} variant="contained" onClick={addmore}>AddMore</Button> : ""
                                    }
                                </Box>)

                        })
                    }

                </div>

                <Button type='submit' sx={{ p: 1, m: 2, width: '10%', height: '20%' }} variant="contained">Submit</Button>
            </form>


        </div>
    )
}