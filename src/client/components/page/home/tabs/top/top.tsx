import { 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  SelectChangeEvent} from "@mui/material"
import { useState } from "react"
import { TopImages } from "./images"


export type TopValuesState = {
  area: string,
  year: string,
  month: string,
  day: string,
}

const Top = () =>{
  const [topValuesState, setTopValuesState ] = useState<TopValuesState>({
    area: "philippines",
    year: "2023",
    month: "10",
    day: "01"
  })

  const handleChangeTopValuesState = ( field: keyof TopValuesState) => ( event: SelectChangeEvent<string> ) => {
    setTopValuesState(prev => ({
      ...prev,
      [ field ]: event.target.value
    }))
  }

  return (
    <div>
      <div className="flex mx-auto max-w-max mb-8">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Area</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={ topValuesState.area }
            onChange={handleChangeTopValuesState("area")}
            label="Area">
            <MenuItem value="0">Japan</MenuItem>
            <MenuItem value="indonesia">Indonesia</MenuItem>
            <MenuItem value="thailand">Thailand</MenuItem>
            <MenuItem value="vietnam">Vietnam</MenuItem>
            <MenuItem value="myanmar">Myanmar</MenuItem>
            <MenuItem selected value="philippines">Philippines</MenuItem>
            <MenuItem value="cambodia">Cambodia</MenuItem>
            <MenuItem value="laos">Laos</MenuItem>
            <MenuItem value="taiwan">Taiwan</MenuItem>
            <MenuItem value="malaysia">Malaysia</MenuItem>
            <MenuItem value="singapore">Singapore</MenuItem>
            <MenuItem value="brunei">Brunei</MenuItem>
            <MenuItem value="timor">Timor</MenuItem>
            <MenuItem value="china">China</MenuItem>
            <MenuItem value="southkorea">South Korea</MenuItem>
            <MenuItem value="northkorea">North Korea</MenuItem>
            <MenuItem value="mongolia">Mongolia</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="pakistan">Pakistan</MenuItem>
            <MenuItem value="bangladesh">Bangladesh</MenuItem>
            <MenuItem value="srilanka">Sri Lanka</MenuItem>
            <MenuItem value="nepal">Nepal</MenuItem>
            <MenuItem value="bhutan">Bhutan</MenuItem>
            <MenuItem value="maldives">Maldives</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={ topValuesState.year }
            onChange={handleChangeTopValuesState("year")}
            label="Year">
            <MenuItem value="2002">2002</MenuItem>
            <MenuItem value="2003">2003</MenuItem>
            <MenuItem value="2004">2004</MenuItem>
            <MenuItem value="2005">2005</MenuItem>
            <MenuItem value="2006">2006</MenuItem>
            <MenuItem value="2007">2007</MenuItem>
            <MenuItem value="2008">2008</MenuItem>
            <MenuItem value="2009">2009</MenuItem>
            <MenuItem value="2010">2010</MenuItem>
            <MenuItem value="2011">2011</MenuItem>
            <MenuItem value="2012">2012</MenuItem>
            <MenuItem value="2013">2013</MenuItem>
            <MenuItem value="2014">2014</MenuItem>
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem selected value="2023">2023</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
          <Select
            value={ topValuesState.month }
            onChange={handleChangeTopValuesState("month")}
            label="Month">
            <MenuItem value="1">Jan</MenuItem>
            <MenuItem value="2">Feb</MenuItem>
            <MenuItem value="3">Mar</MenuItem>
            <MenuItem value="4">Apr</MenuItem>
            <MenuItem value="5">May</MenuItem>
            <MenuItem value="6">Jun</MenuItem>
            <MenuItem value="7">Jul</MenuItem>
            <MenuItem value="8">Aug</MenuItem>
            <MenuItem value="9">Sep</MenuItem>
            <MenuItem value="10">Oct</MenuItem>
            <MenuItem selected value="11">Nov</MenuItem>
            <MenuItem value="12">Dec</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Day</InputLabel>
          <Select
            value={ topValuesState.day }
            onChange={handleChangeTopValuesState("day")}
            label="Day">
            <MenuItem value="01">First half</MenuItem>
            <MenuItem selected value="16">Second half</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TopImages topValues={ topValuesState } />
      </div>
    </div>
  )
}


export default Top