import React,{useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import './QuizDifficulty.css'
import { optionObj } from '../services/types/Types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radio: {
      '&$checked': {
        color: '#91C691'
      }
    },
    checked: {}
  }),
);





const SelectQuiz:React.FC<{Selection:(difficulty:string,no:number)=>void;options:optionObj}>=({Selection,options})=>{
  const classes = useStyles();
  const [difficulty,setDifficulty]=useState('easy')
  const [no,setNo]=useState(10)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    setDifficulty(event.target.value)
     
    }
    const handleSelection = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNo(event.target.value as number);
      };
    const handleClick=()=>{
      Selection(difficulty,no)
    }
    if(options.quizDiff){

      
      return (
        
          <div className="quiz_selection">
            <div className="forms">
              
          <FormControl component="fieldset" className="form1">
                    <FormLabel component="legend">Difficulty</FormLabel>
                    <RadioGroup aria-label="difficulty" name="difficulty" value={difficulty} onChange={handleChange}>
                    <FormControlLabel value="easy" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Easy"/>
                    <FormControlLabel value="medium" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Medium" />
                    <FormControlLabel value="hard" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Hard" />
                    
                    </RadioGroup>
                </FormControl>
                <FormControl  className='form2'>
                    <InputLabel id="demo-simple-select-helper-label">Questions</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    onChange={handleSelection}
                    value={no}
                    >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    </Select>
                    <FormHelperText>Select Number of Questions</FormHelperText>
                </FormControl>
                <div className='start_quiz' onClick={handleClick}>
                        
                        <span>Start Quiz</span>
                    
                    <div className="button-arrow">
                        <img src="https://junto.digital/wp-content/themes/junto/assets/img/arrow-green.svg" alt=""
                        width='26'
                        height='22'
                        />
                    </div>                     
                </div>
                </div>
            </div>
        
      );
    }
    return(
      <div>
      </div>
    )
}
export default SelectQuiz